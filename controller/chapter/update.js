import Chapter from "../../models/Chapter.js";

const updateChapter = async (req, res, next) => {
    try {
        let chapter = req.body; 

        if (!chapter._id || !chapter.name) {
            return res.status(400).json({
                success: false,
                message: "Required fields missing (_id, name)."
            });
        }

        const result = await Chapter.updateOne(   
            { _id: chapter._id },
            { name: chapter.name }
        );

        if (result.matchedCount === 0) {   // (matchedCount) Comprueba si el documento no fue encontrado y actualizado 
            return res.status(404).json({
                success: false,
                message: "Chapter not found."
            });
        }

        return res.status(200).json({
            success: true,
            response: chapter
        });
    } catch (error) {
        next(error); 
    }
};

export { updateChapter };