import Company from "../../models/Company.js";

let updateCompany = async (req, res, next) => {
    try {
        let company = req.body; 

        if (!company._id || !company.name) {
            return res.status(400).json({
                success: false,
                message: "Required fields missing (_id, name)."
            });
        }

        const result = await Company.updateOne(
            { _id: company._id },
            { name: company.name }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "Company not found."
            });
        }

        return res.status(200).json({
            success: true,
            response: company
        });

    } catch (error) {
        next(error)
    }

}

export default updateCompany