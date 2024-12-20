import { Router } from "express";
import { allManga, getMangaAuthor, mangaById } from "../controller/manga/read.js";
import { createManga } from "../controller/manga/create.js";
import { updateManga } from "../controller/manga/update.js";
import { deleteManga } from "../controller/manga/delete.js";
import validator from "../middlewares/validator.js"
import createSchemaManga from "../schemas/manga/create.js";
import updateSchemaManga from "../schemas/manga/update.js";
import passport from "../middlewares/passport.js";

const routerManga = Router()

routerManga.get('/all', allManga)
routerManga.get("/mangaId/:_id", mangaById)
routerManga.get("/mangaAuthorOrCompany", getMangaAuthor)
routerManga.post("/createManga", passport.authenticate('jwt', { session: false }),validator(createSchemaManga),createManga)
routerManga.put("/updateManga",validator(updateSchemaManga), updateManga)
routerManga.delete("/deleteManga/:_id", deleteManga)

export default routerManga;