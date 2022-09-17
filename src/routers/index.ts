import {Request, Response, Router} from "express";
import {autoComplete, findName, findNameVideoViewMax} from "../controllers/search";
import {getInfoAudioByVideoId, getInfoVideoByVideoId} from "../controllers/video";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Server');
});
router.get('/search', findName)
router.get('/search/views', findNameVideoViewMax)
router.get('/search/complete', autoComplete)
router.get('/infovideo', getInfoVideoByVideoId)
router.get('/infoaudio', getInfoAudioByVideoId)

export default router;