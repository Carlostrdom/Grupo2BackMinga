import User from "../../models/User.js"


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
    
        return res.status(200).json({
            user: req.user
        });
};

export {allUser, idAllUsers, recorToken}