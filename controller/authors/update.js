import Author from "../../models/Author.js";

const updateAuthor = async (req, res, next) => {
    try {
        let author = req.body; 

        if (!author._id || !author.name) {
            return res.status(400).json({
                success: false,
                message: "Required fields missing (_id, name)."
            });
        }

        const result = await Author.updateOne(
            { _id: author._id },
            { name: author.name }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "Author not found."
            });
        }

        return res.status(200).json({
            success: true,
            response: author
        });
    } catch (error) {
        next(error); 
    }
};

export { updateAuthor };
