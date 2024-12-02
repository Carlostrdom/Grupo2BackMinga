import Manga  from "../../models/Manga.js";


let createManga = async (req,res,next) => {
    try {
        let manga = req.body
        let all = await Manga.create(manga)
        return res.status(201).json({
            response:all
        })
        
    } catch (error) {
        next(error)
    }
}

export { createManga }