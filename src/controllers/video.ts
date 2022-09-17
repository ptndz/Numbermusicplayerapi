import Youtube from "../service/youtube";
import {Response} from "express";
import {TypedRequest} from "./search";

export let getInfoVideoByVideoId = async (req: TypedRequest<{ videoId: string }, { videoId: string }>, res: Response) => {
    try {
        const videoId = req.query.videoId || req.body.videoId;
        if (videoId) {
            const info = await Youtube.getVideo(videoId);
            return res.json(info)
        }
        return res.json({code: 400})
    } catch (error) {
        console.error(error);
        return res.json({code: 400})
    }

}
export let getInfoAudioByVideoId = async (req: TypedRequest<{ videoId: string }, { videoId: string }>, res: Response) => {
    try {

        const videoId = req.query.videoId || req.body.videoId;
        if (videoId) {
            const info = await Youtube.getAudio(videoId);
            return res.json(info)
        }

        return res.json({code: 400})
    } catch (error) {
        console.error(error);
        return res.json({code: 400})
    }

}