import User from '../../models/User.js';

let deleteUser = async (req, res, next) => {
    try {
        let delU = await User.deleteOne({ _id: req.params._id });
        return res.status(200).json({
            response: delU
        });
    } catch (error) {
        next(error);
    }
};
export default deleteUser 
