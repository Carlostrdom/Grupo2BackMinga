import Author from "../../models/Author.js"
import  "../../models/Author.js"


let allAuthors =  async (req,res,next) => {
    try {
        
    let all = await Author.find()

        return res.status (200).json({
            response: all
        })
      
    } catch (error) {
       next(error)
    }
}

let authorsById = async (req, res) => {
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


export  { allAuthors, authorsById }


