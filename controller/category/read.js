import Category from "../../models/Category.js"
import  "../../models/Category.js"


let allCategories =  async (req,res,next) => {
    try {
        const query = req.query.search
          ? { name: { $regex: req.query.search, $options: 'i' } }
          : {};
    
        let all = await Category.find(query);
        
    
        return res.status(200).json({
          success: true,
          message: 'Categories retrieved successfully',
         
          response: all,
        });
      } catch (error) {
        next(error);
      }
    };

let categoriesById = async (req, res) => {
    try {
        let categoriesQuery = req.params._id 
        let all = await Category.findById(categoriesQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
        
    }
}


export  { allCategories, categoriesById }