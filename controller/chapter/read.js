import Chapter from "../../models/Chapter.js";



const allChapters = async (req, res, next) => {
    try {
        let all = await Chapter.find()

        return res.status(200).json({
            response: all
        })

    } catch (error) {
        next(error)
    }
}

const chaptersById = async (req, res, next) => {
    try {
        const chapterById = req.params._id;
        const chapter = await Chapter.findById(chapterById);
        return res.status(200).json({
            response: chapter
           

        })
    } catch (error) {
        next(error);
    }
}


export { allChapters, chaptersById }