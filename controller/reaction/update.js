import Reaction from "../../models/Reaction.js";

const updateReaction = async (req, res, next) => {
    try {
        const updReaction = await Reaction.findByIdAndUpdate(
            req.body._id,
            req.body,

        );
        return res.status(200).json({
            success: true,
            response: updReaction
        });
    } catch (error) {
        next(error);
    }
};

export default updateReaction