import Reaction from "../../models/Reaction.js";

const deleteReaction = async (req, res, next) => {
    try {
        let deleteC= await Reaction.deleteOne({
            _id: req.params._id
        })
        return res.status(200).json({
            response: deleteC
        })
    } catch (error) {
        next(error)
    }
}

export default deleteReaction