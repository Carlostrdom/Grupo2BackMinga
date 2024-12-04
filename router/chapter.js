import { Router } from "express";
import { allChapters, chaptersById } from "../controller/chapter/read.js";
import { createChapteries } from "../controller/chapter/create.js";
import { updateChapter } from "../controller/chapter/update.js";
import { deleteChapter } from "../controller/chapter/delete.js";
import validator from "../middlewares/validator.js"
import schemaChapter from "../schemas/chapter/create.js";
import schemaUpdate from "../schemas/chapter/update.js";

const routerChapter = Router()

routerChapter.get('/all', allChapters)
routerChapter.get("/chapterId/:_id", chaptersById)
routerChapter.post("/createChapter",validator(schemaChapter),createChapteries)
routerChapter.put("/updateChapter",validator(schemaUpdate), updateChapter)
routerChapter.delete("/deleteChapter/:_id", deleteChapter)

export default routerChapter;

