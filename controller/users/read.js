import User from "../../models/User.js"
import Author from "../../models/Author.js"
import Company from "../../models/Company.js"


const allUser = async (req,res,next)=>{
    try {
        const query = req.query.search ? {email: {$regex: req.query.search, $options:'i'}}:{}
        const users = await User.find(query)
        return res.status(201).json({
            users: users,
            length: users.length
        })
    } catch (error) {
        next(error)
    }
}
const idAllUsers = async (req, res, next) => {
    
    try {
        const userId = req.params._id; 
        const user = await User.findById(userId);

      
        return res.status(200).json({
            response: user
        });

    } catch (error) {
        next(error);
    }
};

const recorToken = async (req, res, next) => {
    const author = await Author.find({user_id:req.user._id})
    const company = await Company.find({user_id:req.user._id})
        return res.status(200).json({
            user: req.user,
     
            author: author  ? author[0]: null,
            company: company ? company[0]:null
        });
};

export {allUser, idAllUsers, recorToken}