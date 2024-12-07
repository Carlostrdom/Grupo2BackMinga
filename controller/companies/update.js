import Company from "../../models/Company.js";

let updateCompany = async (req, res, next) => {
  try {

    let company = req.body
    const updCompany = await Company.updateOne(
        {name:company.name},
        company
       
    );
  

    return res.status(200).json({
        success: true,
        response: updCompany
    });
} catch (error) {
    next(error); 
}
}

export default updateCompany