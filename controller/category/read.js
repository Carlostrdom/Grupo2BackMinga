import Category from "../../models/Category.js"
import  "../../models/Author.js"


let allCategories =  async (req,res,next) => {
    try {
        
    let all = await Category.find()

        return res.status (200).json({
            response: all
        })
      
    } catch (error) {
       next(error)
    }
}

let categoriesById = async (req, res) => {
    try {
        let authorsQuery = req.params.id 
        let all = await Author.findById(authorsQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
        
    }
}


export  { allCategories, categoriesById }