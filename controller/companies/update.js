import Company from "../../models/Company.js";

let updateCompany = async (req, res, next) => {
  try {
    const updCompany = await Company.findByIdAndUpdate(
        req.body._id,
        req.body,
       
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