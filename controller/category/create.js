import Category from "../../models/Category.js";


let createCategories = async (req,res,next) => {
    try {
        let categories = req.body
        let all = await Category.create(categories)
        return res.status(201).json({
            response:all
        })
        
    } catch (error) {
        next(error)
    }
}

export { createCategories }