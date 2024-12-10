import Chapter from "../../models/Chapter.js";



const allChapters = async (req, res, next) => {
    try {
        const query = req.query.search
            ? { title: { $regex: req.query.search, $options: 'i' } }
            : {};
        let all = await Chapter.find(query).populate('manga_id', 'title cover_photo description category_id').exec();

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

const chaptersBymangas = async (req, res, next) => {
    try {
        let manga_id = req.params._id;
        let chapter = await Chapter.find({manga_id:manga_id}).populate('manga_id', 'title cover_photo description category_id').exec();
        

        
        return res.status(200).json({
            response: chapter


        })
    } catch (error) {
        next(error);
    }
}

export { allChapters, chaptersById , chaptersBymangas}