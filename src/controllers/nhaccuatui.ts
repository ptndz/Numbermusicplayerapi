import { Request, Response } from "express";
import { TypedRequest } from "./search";
import NhacCuaTui from "nhaccuatui-api-full";

export let getHome = async (req: Request, res: Response) => {
	const result = await NhacCuaTui.getHome();
	return res.json(result);
};
export let getTop100 = async (req: Request, res: Response) => {
	const result = await NhacCuaTui.getTop100("m3liaiy6vVsF");
	return res.json(result);
};
export let getPlaylists = async (req: Request, res: Response) => {
	const result = await NhacCuaTui.getPlaylists();
	return res.json(result);
};
export let getTrendingArtists = async (req: Request, res: Response) => {
	const result = await NhacCuaTui.getTrendingArtists();
	return res.json(result);
};
export let getTopKeyword = async (req: Request, res: Response) => {
	const result = await NhacCuaTui.getTopKeyword();
	return res.json(result);
};

export let getSong = async (
	req: TypedRequest<{ songId: string }, { songId: string }>,
	res: Response
) => {
	let songId: string = req.query.songId || req.body.songId;
	if (songId) {
		const result = await NhacCuaTui.getSong(songId);
		return res.json(result);
	}
	return res.json({
		code: 400,
	});
};
export let getLyric = async (
	req: TypedRequest<{ songId: string }, { songId: string }>,
	res: Response
) => {
	let songId: string = req.query.songId || req.body.songId;
	if (songId) {
		const result = await NhacCuaTui.getLyric(songId);
		return res.json(result);
	}
	return res.json({
		code: 400,
	});
};
export let getPlaylistDetail = async (
	req: TypedRequest<{ playlistId: string }, { playlistId: string }>,
	res: Response
) => {
	let playlistId: string = req.query.playlistId || req.body.playlistId;
	if (playlistId) {
		const result = await NhacCuaTui.getPlaylistDetail(playlistId);
		return res.json(result);
	}
	return res.json({
		code: 400,
	});
};
export let getVideoDetail = async (
	req: TypedRequest<{ videoId: string }, { videoId: string }>,
	res: Response
) => {
	let videoId: string = req.query.videoId || req.body.videoId;
	if (videoId) {
		const result = await NhacCuaTui.getVideoDetail(videoId);
		return res.json(result);
	}
	return res.json({
		code: 400,
	});
};
