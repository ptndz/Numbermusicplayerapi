import Youtube from "../service/youtube";
import {Request, Response} from "express";
import {Query}  from 'express-serve-static-core';

export interface TypedRequest<T extends Query, U> extends Request {
    body: U,
    query: T
}
export interface TypeRequestQuery<T extends Query> extends Request{
    query: T
}
export let findName = async (req: TypedRequest<{ name: string }, { name: string }>, res: Response) => {
    let name: string = req.query.name || req.body.name;
    if (name) {
        const result = await Youtube.searchVideo(name)
        return res.json(result)
    }
    return res.json({
        code: 400
    })
}
export let findNameVideoViewMax = async (req: TypedRequest<{ name: string }, { name: string }>, res: Response) => {
    let name: string = req.query.name || req.body.name;
    if (!name) {
        return res.json({
            code: 400
        })
    }
    const result = await Youtube.searchVideoViewMax(name);
    return res.json(result)
}
export let autoComplete =async (req :TypeRequestQuery<{q:string}>,res:Response)=>{
    const q = req.query.q;
    if (!q){
        return res.json({
            code: 400
        })
    }
    const result = await Youtube.autoComplete(q);
    return res.send(result)
}
