import Manga from "../../models/Manga.js"



const allManga = async (req, res, next) => {
    try {
const query = {}
console.log(req.query.search);
if(req.query.search){
    query.title = {$regex: req.query.search, $options:'i'}
}
if(req.query.category !== "" && req.query.category != undefined){
    query.category_id = req.query.category
}
        
        console.log(query);
        
        let all = await Manga.find(query)

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


export { allManga, mangaById }