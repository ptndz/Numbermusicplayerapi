import Orm from "../config/database";

export interface Music {
    title:string;
    link:string;
    photo:string;
    videID:string;
}
const music = Orm.table<Music>("musics");

export default music;