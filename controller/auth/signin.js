import User from "../../models/User.js";
import Author from "../../models/Author.js";
import Company from "../../models/Company.js";

const signIn = async (req, res, next) => {
    try {
        
       let user = await User.findOneAndUpdate({ email: req.body.email || req.user.email }, { online: true },{new: true}).lean()
       const author = await Author.find({user_id: user._id})
       const company = await Company.find({user_id:user._id})
       console.log(author,company,user);
       
        return res.status(200).json({
            success: true,
            message: "User signed in successfully",
            user: {
                email: req.user.email,
                role: req.user.role,
                photo: req.user.photo,
                _id: req.user._id
            },
            token: req.token,
            author: author  ? author[0]: null,
            company: company ? company[0]:null
        });
    } catch (error) {
        next(error);

    }
}

export default signIn