import Manga from "../../models/Manga.js";

const deleteManga = async (req, res, next) => {
    try {
        let deleteM= await Manga.deleteOne({
            _id: req.params._id
        })
        return res.status(200).json({
            response: deleteM
        })
    } catch (error) {
        next(error)
    }
}

export {deleteManga}