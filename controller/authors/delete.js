import Author from "../../models/Author.js";

const deleteI = async (req, res, next) => {
    try {
        let deleteA = await Author.deleteOne({
            name: req.body.name
        })
        return res.status(200).json({
            response: deleteA
        })
    } catch (error) {
        next(error)
    }
}

export {deleteI}
