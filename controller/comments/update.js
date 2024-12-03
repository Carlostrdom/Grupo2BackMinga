import Comment from "../../models/Comment.js";

const updateComment = async(req, res, next) => {
    try {

        const updatedresult = await Comment.findByIdAndUpdate(
            req.body._id,
            req.body,

        );

        return res.status(200).json({
            success: true,
            response: updatedresult
        });
    } catch (error) {
        next(error);
    }
}

export default updateComment