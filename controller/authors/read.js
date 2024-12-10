import Author from "../../models/Author.js"
import "../../models/User.js"

let allAuthors = async (req, res, next) => {
    try {
        const query = req.query.search
            ? { name: { $regex: req.query.search, $options: 'i' } }
            : {};

        let all = await Author.find(query).populate('user_id','email password role photo').exec();

        return res.status(200).json({
            response: all
        })

    } catch (error) {
        next(error)
    }
}

let authorsById = async (req, res, next) => {
    try {
        let authorsQuery = req.params._id
        let all = await Author.findById(authorsQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)

    }
}
const AuthorByUser = async (req, res, next) => {
    try {
        let user_id = req.params._id?.id || req.params._id;

        
        const authorforUser = await Author.find({user_id:user_id})
            .populate('user_id', 'email password role photo')
            .exec();

        return res.status(200).json({
            success: true,
            response: authorforUser,
        });
    } catch (error) {
        next(error);
    }
};



export { allAuthors, authorsById, AuthorByUser }


