import Company from "../../models/Company.js";


let create = async (req, res, next) => {
    try {
        let companies = req.body
        let all = await Company.create(companies)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export default create