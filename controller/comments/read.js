import Comment from "../../models/Comment.js";

const allComments = async (req, res, next) => {
    try {
        const query = req.query.search
        ? { name: { $regex: req.query.search, $options: 'i' } }
        : {};

              let all = await Comment.find(query)

        return res.status(200).json({
            response: all,
            length: all.length
        })

    } catch (error) {
        next(error)
    }
}

const commentsById = async (req, res, next) => {
    try {
        let commentQuery = req.params._id
        let all = await Comment.findById(commentQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)

    }
}

export {allComments, commentsById }