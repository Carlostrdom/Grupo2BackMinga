import { Router } from "express";
import { allManga, mangaById } from "../controller/manga/read.js";
import { createManga } from "../controller/manga/create.js";
import { updateManga } from "../controller/manga/update.js";
import { deleteManga } from "../controller/manga/delete.js";


const routerManga = Router()

routerManga.get('/all', allManga)
routerManga.get("/mangaId/:_id", mangaById)
routerManga.post("/createManga",createManga)
routerManga.put("/updateManga", updateManga)
routerManga.delete("/deleteManga/:_id", deleteManga)

export default routerManga;