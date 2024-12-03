import User from '../../models/User.js';
let createUser = async (req, res, next) => {
    try {
        let user = req.body;
        let creaU = await User.create(user);
        return res.status(200).json({
            user: creaU,
            token: req.token
        });
    } catch (error) {
        next(error);

    }
}

export default createUser