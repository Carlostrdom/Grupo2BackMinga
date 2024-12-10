import Manga from "../../models/Manga.js"
import "../../models/Category.js"
import { populate } from "dotenv";



const allManga = async (req, res, next) => {
    try {
        const query = {}
        console.log(req.query.search);
        if (req.query.search) {
            query.title = { $regex: req.query.search, $options: 'i' }
        }
        if (req.query.category !== "" && req.query.category != undefined) {
            query.category_id = req.query.category
        }

        console.log(query);

        let all = await Manga.find(query).populate('category_id', 'name color shadow description cover_photo character_photo').populate('author_id', 'name last_name photo date user_id')   .exec();

        return res.status(200).json({
            response: all
        })

    } catch (error) {
        next(error)
    }
}


const mangaById = async (req, res, next) => {
    try {
        const mangById = req.params._id;
        const manga = await Manga.findById(mangById);
        return res.status(200).json({
            response: manga


        })
    } catch (error) {
        next(error);
    }
}

let getMangaAuthor = async (req, res, next) => {
    try {
        const query = {}
        if (req.query.author != "" && req.query.author != undefined) {
            query.author_id = req.query.author
        }

        if (req.query.company !== "" && req.query.company != undefined) {
            query.company_id = req.query.company
        }
        
       
        console.log(query);

        let all = await Manga.find(query)

        return res.status(200).json({
            response: all
        })
    } catch (error) {
    }
}




export { allManga, mangaById, getMangaAuthor }