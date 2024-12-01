import Category from "../../models/Category.js";

const deleteI = async (req, res, next) => {
    try {
        let deleteA = await Category.deleteOne({
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