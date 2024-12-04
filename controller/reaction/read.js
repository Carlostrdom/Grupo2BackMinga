import Reaction from "../../models/Reaction.js";

const allReactions = async (req, res, next) => {
    try {
        const query = req.query.search
            ? { title: { $regex: req.query.search, $options: 'i' } }
            : {};
        let all = await Reaction.find(query)

        return res.status(200).json({
            response: all
        })

    } catch (error) {
        next(error)
    }
}

const reactionById = async (req, res, next) => {
    try {
        const reacById = req.params._id;
        const reaction = await Reaction.findById(reacById);
        return res.status(200).json({
            response: reaction
        })
    } catch (error) {
        next(error);
    }
}


export { allReactions, reactionById }