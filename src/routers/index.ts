import { Request, Response, Router } from "express";
import { autoComplete, findName, findNameVideoViewMax } from "../controllers/search";
import { getInfoAudioByVideoId, getInfoVideoByVideoId } from "../controllers/video";
import {
	getHome,
	getPlaylists,
	getTopKeyword,
	getTrendingArtists,
	getSong,
	getLyric,
	getPlaylistDetail,
	getVideoDetail,
	getTop100,
	getArtistDetail,
	searchByKeyword,
} from "../controllers/nhaccuatui";
import * as zing from "../controllers/zing";
const router = Router();

router.get("/", (req: Request, res: Response) => {
	res.send("Server");
});
router.get("/search", findName);

router.get("/search/views", findNameVideoViewMax);
router.get("/search/complete", autoComplete);
router.get("/infovideo", getInfoVideoByVideoId);
router.get("/infoaudio", getInfoAudioByVideoId);
router.get("/nhaccuatui/getHome", getHome);
router.get("/nhaccuatui/getPlaylists", getPlaylists);
router.get("/nhaccuatui/getTrendingArtists", getTrendingArtists);
router.get("/nhaccuatui/getTopKeyword", getTopKeyword);
router.get("/nhaccuatui/getSong", getSong);
router.get("/nhaccuatui/getLyric", getLyric);
router.get("/nhaccuatui/getPlaylistDetail", getPlaylistDetail);
router.get("/nhaccuatui/getVideoDetail", getVideoDetail);
router.get("/nhaccuatui/getTop100", getTop100);
router.post("/nhaccuatui/getArtistDetail", getArtistDetail);
router.post("/nhaccuatui/searchByKeyword", searchByKeyword);

router.get("/zing/getHome", zing.getHome);
router.get("/zing/getPlaylistDetail", zing.getPlaylistDetail);
router.get("/zing/getArtist", zing.getArtist);
router.get("/zing/getChartHome", zing.getChartHome);
router.get("/zing/getTop100", zing.getTop100);
router.get("/zing/getLyric", zing.getLyric);
router.get("/zing/getNewReleaseChart", zing.getNewReleaseChart);
router.get("/zing/getSong", zing.getSong);
router.get("/zing/getInfoSong", zing.getInfoSong);
router.post("/zing/search", zing.search);

export default router;
