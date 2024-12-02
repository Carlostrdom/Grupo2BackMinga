import Chapter   from "../../models/Chapter.js";


let createChapteries = async (req,res,next) => {
    try {
        let chapter = req.body
        let all = await Chapter.create(chapter)
        return res.status(201).json({
            response:all
        })
        
    } catch (error) {
        next(error)
    }
}

export { createChapteries }