import Itinerary from "../models/Itinerary.js";
const itineraryExists = async (req, res, next) => {
    try {
        const Itine = await Itinerary.findOne({ activity: req.body.activity });
        if (Itine) {
            return res.status(400).json({
                success: false,
                code: 400,
                message: "this itinerary already exists.",

            });
        }
        next();
    } catch (error) {
        next(error);
    }
};

export default itineraryExists;