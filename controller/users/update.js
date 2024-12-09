import User from "../../models/User.js";
const updateUser = async (req, res, next) => {
    try {
        let user = req.body;
        
        let upU = await User.updateOne({ email: user.email },user

        );
        return res.status(200).json({
            response: upU
        });
    } catch (error) {
        next(error);
    }
};


export  default updateUser 