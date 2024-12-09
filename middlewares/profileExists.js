import Author from "../models/Author.js";
import Company from "../models/Company.js";


const AutrorExists = async (req, res, next) => {
    try {
        const AuthorRew = await Author.findOne({ name: req.body.name });
        if (AuthorRew) {
            return res.status(400).json({
                success: false,
                code: 400,
                message: "this Author already exists.",

            });
        }
        next();
    } catch (error) {
        next(error);
    }
};

const CompanyExists = async (req, res, next) => {
    try {
        const CompanyRew = await Company.findOne({ name: req.body.name });
        if (CompanyRew) {
            return res.status(400).json({
                success: false,
                code: 400,
                message: "this company already exists.",

            });
        }
        next();
    } catch (error) {
        next(error);
    }
};

export {AutrorExists,CompanyExists};