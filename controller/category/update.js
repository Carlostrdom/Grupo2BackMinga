import Category from "../../models/Category.js";

const updateCategory = async (req, res, next) => {
    try {
            

        const updCategory = await Category.findByIdAndUpdate(
            req.body._id,
            req.body,
           
        );
      

        return res.status(200).json({
            success: true,
            response: updCategory
        });
    } catch (error) {
        next(error); 
    }
};

export { updateCategory };