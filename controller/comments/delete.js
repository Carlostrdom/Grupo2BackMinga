import Comment from "../../models/Comment.js";

const deleteCo = async (req, res, next) => {
    try {
        let deleteA = await Comment.deleteOne({
            _id: req.params._id
        })
        return res.status(200).json({
            response: deleteA
        })
    } catch (error) {
        next(error)
    }
}

export default deleteCo