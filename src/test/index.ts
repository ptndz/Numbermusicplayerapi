import Youtube from "../service/youtube";

(async () => {
    // const data=await Youtube.getAudio("JFqiNlAx2Tg")
    // console.log(data)
    const search = await Youtube.getVideo("j8U06veqxdU" )
    console.log(search)
})();