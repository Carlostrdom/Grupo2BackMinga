import Company from "../../models/Company.js";

    const updateCompany = async (req, res,next) => {
        try {
            const { _id, ...updateFields } = req.body;
    
        const updatedResult = await Company.findOneAndUpdate(
            { _id: _id },
            updateFields,
            { new: true }
        );
    console.log(updatedResult);
    
        return res.status(200).json({
            success: true,
            message: "Autor actualizado con éxito.",
            response: updatedResult
        });
        } catch (error) {
            console.log(error);
            
            next(error);
        }
        
    }; 

export default updateCompany