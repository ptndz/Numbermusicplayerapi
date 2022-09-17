import ytdl, {Filter} from 'ytdl-core';
import ytsr from 'ytsr';
import axios from 'axios';
import he from "he";

class Youtube {
    async getAudio(videoID: string) {
        let audioFormats = await this.getInfoVideo(videoID, "audioonly");
        return audioFormats.reduce(
            (previousValue: ytdl.videoFormat, currentValue: ytdl.videoFormat) => {
                if (previousValue.audioBitrate !== undefined && currentValue.audioBitrate !== undefined) {
                    return previousValue.audioBitrate > currentValue.audioBitrate ? previousValue : currentValue
                }
                return previousValue
            }
        );
    }

    async getVideo(videoID: string) {
        let videoFormat = await this.getInfoVideo(videoID, 'videoandaudio');
        return videoFormat[0]
    }

    async getInfoVideo(videoID: string, filter: Filter) {
        let info = await ytdl.getInfo(videoID);
        return ytdl.filterFormats(info.formats, filter);
    }

    async searchVideo(name: string, options?: ytsr.Options) {
        return await ytsr(name, options)
    }

    async searchVideoViewMax(name: string) {
        const filters1 = await ytsr(name, {
            limit: 10
        });

        let data: ytsr.Video[] = [];
        filters1.items.forEach((v) => {
            if (v.type === "video") {
                data.push(v)
            }
        })

        if (data.length > 0) {

            return data.reduce((previousValue: ytsr.Video, currentValue: ytsr.Video) => {
                if (previousValue.views !== null && currentValue.views !== null) {
                    return previousValue.views > currentValue.views ? previousValue : currentValue
                }
                return previousValue
            })
        }
    }

    async autoComplete(name: string) {
        const url: string = `https://suggestqueries-clients6.youtube.com/complete/search?client=youtube&hl=vi&gl=vn&sugexp=24280400,rankembed.ytb=2,rankembed.rodt=0.78,rankembed.apfl=0,legos.upv=1,cfro=1,rankembed.ytb=1,rankembed.rodt=0.74,rankembed.apfl=0,rankembed.ula=1,legos.upv=1,rankembed.uplc=1,rankembed.uelc=1&gs_rn=64&gs_ri=youtube&ds=yt&cp=2&gs_id=1g&q=${decodeURIComponent(name)}&xhr=t&xssi=t`;
        const res = await axios.get(url)
        const result = res.data;
        let data: string[] = [];

        result.split('[\"').forEach((v: string) => {
            if (v?.includes("\",")) {
                data.push(he.decode(v.split("\",")[0]))
            }
        })
        return data

    }

    youtube_parser(url: string) {
        const regExp =
            /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        const match = url.match(regExp);
        if (match && match[7].length == 11) {
            return match[7];
        } else {
            return "";
        }
    }
}

export default new Youtube;