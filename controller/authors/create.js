import Author from "../../models/Author.js";


let createAuthors = async (req,res,next) => {
    try {
        let authors = req.body
        let all = await Author.create(authors)
        return res.status(201).json({
            response:all
        })
        
    } catch (error) {
        next(error)
    }
}

export { createAuthors }