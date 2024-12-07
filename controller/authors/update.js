import Author from "../../models/Author.js";

const updateAuthor = async (req, res, next) => {
    try {
        let authors = req.body;
      
        const updatedresult = await Author.updateOne(
            { name: user.name },authors

        );

        return res.status(200).json({
            success: true,
            response: updatedresult
        });
    } catch (error) {
        next(error);
    }
};

export { updateAuthor };
