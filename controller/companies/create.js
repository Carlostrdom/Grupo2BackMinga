import Company from "../../models/Company.js";
import User from "../../models/User.js";


let create = async (req, res, next) => {
    
    try {
        await User.findOneAndUpdate(
            {_id: req.body.user_id},{role: 2}
        )
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