import Author from "../../models/Author.js";
import User from "../../models/User.js";



let createAuthors = async (req, res, next) => {
    
    try {
        await User.findOneAndUpdate(
            {_id: req.body.user_id},{role: 1}
        )
        let authors = req.body
        let all = await Author.create(authors)
        return res.status(201).json({
            response: all
        })

    } catch (error) {
        next(error)
    }
}

export { createAuthors }