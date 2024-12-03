import Manga from "../../models/Manga.js"



const allManga = async (req, res, next) => {
    try {

        const query = req.query.search ? {title: {$regex: req.query.search, $options:'i'}}:{}
        let all = await Manga.find(query)

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