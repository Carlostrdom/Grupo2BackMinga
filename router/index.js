import { Router } from "express";
import routerAuthor from "./author.js";
import companyRouter from "./companies.js";
import routerCategory from "./category.js";
import routerChapter from "./chapter.js";
import routerManga from "./manga.js";
import usersRouter from "./users.js";
import authRouter from "./auth.js";
import routerComment from "./comment.js";




const router = Router();

router.use('/author',routerAuthor)
router.use('/company', companyRouter )
router.use('/category', routerCategory)
router.use("/chapter", routerChapter)
router.use("/manga", routerManga)
router.use('/users', usersRouter);
router.use('/auth',authRouter);


router.use('/comment', routerComment)



export default router;