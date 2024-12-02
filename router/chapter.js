import { Router } from "express";
import { allChapters, chaptersById } from "../controller/chapter/read.js";
import { createChapteries } from "../controller/chapter/create.js";
import { updateChapter } from "../controller/chapter/update.js";
import { deleteChapter } from "../controller/chapter/delete.js";


const routerChapter = Router()

routerChapter.get('/all', allChapters)
routerChapter.get("/chapterId/:_id", chaptersById)
routerChapter.post("/createChapter",createChapteries)
routerChapter.put("/updateChapter", updateChapter)
routerChapter.delete("/deleteChapter/:_id", deleteChapter)

export default routerChapter;

