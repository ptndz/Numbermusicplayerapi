import { Request, Response } from "express";
import { TypedRequest } from "./search";
import { ZingMp3 } from "zingmp3-api-full";

export let getHome = async (req: Request, res: Response) => {
	const result = await ZingMp3.getHome();
	return res.json(result);
};

export let getTop100 = async (req: Request, res: Response) => {
	const result = await ZingMp3.getTop100();
	return res.json(result);
};

export let getChartHome = async (req: Request, res: Response) => {
	const result = await ZingMp3.getChartHome();
	return res.json(result);
};

export let getNewReleaseChart = async (req: Request, res: Response) => {
	const result = await ZingMp3.getNewReleaseChart();
	return res.json(result);
};

export let getSong = async (
	req: TypedRequest<{ songId: string }, { songId: string }>,
	res: Response
) => {
	let songId: string = req.query.songId || req.body.songId;
	if (songId) {
		const result = await ZingMp3.getSong(songId);
		return res.json(result);
	}
	return res.json({
		code: 400,
	});
};

export let getInfoSong = async (
	req: TypedRequest<{ songId: string }, { songId: string }>,
	res: Response
) => {
	let songId: string = req.query.songId || req.body.songId;
	if (songId) {
		const result = await ZingMp3.getInfoSong(songId);
		return res.json(result);
	}
	return res.json({
		code: 400,
	});
};

export let getArtist = async (
	req: TypedRequest<{ artistId: string }, { artistId: string }>,
	res: Response
) => {
	let artistId: string = req.query.artistId || req.body.artistId;
	if (artistId) {
		const result = await ZingMp3.getArtist(artistId);
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
		const result = await ZingMp3.getLyric(songId);
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
		const result = await ZingMp3.getDetailPlaylist(playlistId);
		return res.json(result);
	}
	return res.json({
		code: 400,
	});
};

export let search = async (
	req: TypedRequest<{ name: string }, { name: string }>,
	res: Response
) => {
	let name: string = req.query.name || req.body.name;
	if (name) {
		const result = await ZingMp3.search(name);
		return res.json(result);
	}
	return res.json({
		code: 400,
	});
};
