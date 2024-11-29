import City from "../models/City.js";

const cityExists = async (req, res, next) => {
    try {
        const Citiereq = await City.findOne({ name: req.body.name });
        if (Citiereq) {
            return res.status(400).json({
                success: false,
                code: 400,
                message: "this City already exists.",

            });
        }
        next();
    } catch (error) {
        next(error);
    }
};

export default cityExists;