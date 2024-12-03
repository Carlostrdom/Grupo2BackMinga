import Chapter from "../../models/Chapter.js";

const updateChapter = async (req, res, next) => {
    try {
        const updChapter = await Chapter.findByIdAndUpdate(
            req.body._id,
            req.body,

        );
        return res.status(200).json({
            success: true,
            response: updChapter
        });
    } catch (error) {
        next(error);
    }
};

export { updateChapter };