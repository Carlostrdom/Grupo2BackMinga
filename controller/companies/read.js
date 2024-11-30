import Company from "../../models/Company.js";

let allCompanies = async (req, res, next) => {
    try {
        const query = req.query.search ? {name: {$regex: req.query.search, $options:'i'}}:{}
        const companies = await Company.find(query)
        return res.status(201).json({
            companies: companies,
            length: companies.length
    
        });
    } catch (error) {
        next(error);
    }
};

const idAllCompanies = async (req, res, next) => {
    
    try {
        const companiesId = req.params._id; 
        const company = await Company.findById(companiesId);
        return res.status(200).json({
            response: company
        });

    } catch (error) {
        next(error);
    }
};

export {allCompanies, idAllCompanies} 