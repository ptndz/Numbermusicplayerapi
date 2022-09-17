import Orm from "../config/database";
(async () => {
    try {
        const columnsMusic = {
            "title": "VARCHAR(255) NOT NULL",
            "link": "VARCHAR(255) NOT NULL",
            "photo": "VARCHAR(255) NOT NULL",
            "videID": "VARCHAR(20) NOT NULL",
        }
        await Orm.crateTable("musics", columnsMusic)
        console.log("Done")
    } catch (error) {
        console.error(error);
    }

})()