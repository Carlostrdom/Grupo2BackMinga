import { Router } from "express";
import routerAuthor from "./author.js";



const router = Router();

router.use('/author',routerAuthor)


export default router;