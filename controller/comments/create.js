import Comment from "../../models/Comment.js";

const create = async (req, res, next) => {
    try {
        let comments = req.body
        let all = await Comment.create(comments)
        return res.status(201).json({
            response: all
        })

    } catch (error) {
        next(error)
    }
}

export default create