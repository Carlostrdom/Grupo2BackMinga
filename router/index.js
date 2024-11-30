import { Router } from "express";
import routerAuthor from "./author.js";
import companyRouter from "./companies.js";




const router = Router();

router.use('/author',routerAuthor)
router.use('/company', companyRouter )



export default router;