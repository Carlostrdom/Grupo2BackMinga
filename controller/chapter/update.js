import Chapter from "../../models/Chapter.js";

const updateChapter = async (req, res, next) => {
    try {
        let chapter = req.body
        
        const updChapter = await Chapter.updateOne(
            {title:chapter.title},
            chapter
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