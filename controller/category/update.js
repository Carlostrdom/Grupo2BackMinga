import Category from "../../models/Category.js";

const updateCategory = async (req, res, next) => {
    try {
        let category = req.body; 

        if (!category._id || !category.name) {
            return res.status(400).json({
                success: false,
                message: "Required fields missing (_id, name)."
            });
        }

        const result = await Category.updateOne(
            { _id: category._id },
            { name: category.name }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "Category not found."
            });
        }

        return res.status(200).json({
            success: true,
            response: author
        });
    } catch (error) {
        next(error); 
    }
};

export { updateCategory };