import Comment from "../../models/Comment.js";
import mongoose from "mongoose";

const allComments = async (req, res, next) => {
    try {

        const { search } = req.query;

        // Validar si el parámetro `search` es un ObjectId válido
        if (search && !mongoose.isValidObjectId(search)) {
            return res.status(400).json({
                error: 'Invalid search parameter format. Must be a valid ObjectId.',
            });
        }

        const query = req.query.search
        ? {
            $or: [
                { author_id: new mongoose.Types.ObjectId(search) },
                { company_id: new mongoose.Types.ObjectId(search) },
            ],
        }
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