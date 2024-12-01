import { Router } from "express";
import routerAuthor from "./author.js";
import companyRouter from "./companies.js";
import routerCategory from "./category.js";




const router = Router();

router.use('/author',routerAuthor)
router.use('/company', companyRouter )
router.use('/category', routerCategory)



export default router;