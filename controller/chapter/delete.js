import Chapter from "../../models/Chapter.js";

const deleteChapter = async (req, res, next) => {
    try {
        let deleteC= await Chapter.deleteOne({
            _id: req.params._id
        })
        return res.status(200).json({
            response: deleteC
        })
    } catch (error) {
        next(error)
    }
}

export {deleteChapter}