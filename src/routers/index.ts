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
} from "../controllers/nhaccuatui";
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
export default router;
