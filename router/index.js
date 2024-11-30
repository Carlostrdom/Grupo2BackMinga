import { Router } from "express";
import companyRouter from "./companies.js";



const router = Router();

router.use('/company', companyRouter )


export default router;