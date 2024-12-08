import Manga from "../models/Manga.js";
const mangaExists = async (req, res, next) => {
    try {
        const Itine = await Manga.findOne({ titte: req.body.titte });
        if (Itine) {
            return res.status(400).json({
                success: false,
                code: 400,
                message: "this manga already exists.",

            });
        }
        next();
    } catch (error) {
        next(error);
    }
};

export default mangaExists;