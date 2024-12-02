import Manga from "../../models/Manga.js"



const allManga = async (req, res, next) => {
    try {
        let all = await Manga.find()

        return res.status(200).json({
            response: all
        })

    } catch (error) {
        next(error)
    }
}

const mangaById = async (req, res, next) => {
    try {
        const mangById = req.params._id;
        const manga = await Manga.findById(mangById);
        return res.status(200).json({
            response: manga


        })
    } catch (error) {
        next(error);
    }
}


export { allManga, mangaById }