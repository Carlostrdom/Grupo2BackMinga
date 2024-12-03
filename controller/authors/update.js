import Author from "../../models/Author.js";

const updateAuthor = async (req, res, next) => {
    try {
            

        const updatedresult = await Author.findByIdAndUpdate(
            req.body._id,
            req.body,
           
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
