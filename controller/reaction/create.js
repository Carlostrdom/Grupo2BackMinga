import Reaction from "../../models/Reaction.js";

let createReaction = async (req,res,next) => {
    try {
        let reaction = req.body
        let all = await Reaction.create(reaction)
        return res.status(201).json({
            response:all
        })
        
    } catch (error) {
        next(error)
    }
}

export default createReaction