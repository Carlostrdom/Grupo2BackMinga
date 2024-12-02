import { Router } from "express";
import routerAuthor from "./author.js";
import companyRouter from "./companies.js";
import routerCategory from "./category.js";
import routerChapter from "./chapter.js";
import routerManga from "./manga.js";




const router = Router();

router.use('/author',routerAuthor)
router.use('/company', companyRouter )
router.use('/category', routerCategory)
router.use("/chapter", routerChapter)
router.use("/manga", routerManga)



export default router;