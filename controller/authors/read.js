import Author from "../../models/Author.js"

let allAuthors = async (req, res, next) => {
    try {
        const query = req.query.search
            ? { name: { $regex: req.query.search, $options: 'i' } }
            : {};

        let all = await Author.find(query)

        return res.status(200).json({
            response: all
        })

    } catch (error) {
        next(error)
    }
}

let authorsById = async (req, res, next) => {
    try {
        let authorsQuery = req.params.id
        let all = await Author.findById(authorsQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)

    }
}


export { allAuthors, authorsById }


