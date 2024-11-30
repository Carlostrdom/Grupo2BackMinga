import Author from "../../models/Author.js";

const deleteI = async (req, res, next) => {
    try {
        let deleteA = await Author.deleteOne({
            _id: req.params._id
        })
        return res.status(200).json({
            response: deleteA
        })
    } catch (error) {
        next(error)
    }
}

export {deleteI}