import Manga from "../../models/Manga.js";

const updateManga = async (req, res, next) => {
    try {
        const updManga = await Manga.findByIdAndUpdate(
            req.body._id,
            req.body,
           
        );
      
    
        return res.status(200).json({
            success: true,
            response: updManga
        });
    } catch (error) {
        next(error); 
    }
    }
export {updateManga} 