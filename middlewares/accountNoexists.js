import User from "../models/User.js";

const accountNotExist = async (req, res, next) => {
    try {
        let account = await User.findOne({ email: req.body.email });
        if (account) {
            req.user = {
                email: account.email,
                password: account.password,
                role: account.role,
            }
            return next();
        }


        return res.status(400).json({
            success: false,
            code: 400,
            message: "user does not exist.",
        });

    }
    catch (error) {
        next(error);
    }
};

export default accountNotExist