import { Router } from "express";
import {  allAuthors, authorsById } from "../controller/authors/read.js";
import  { createAuthors }  from "../controller/authors/create.js";
import { updateAuthor} from "../controller/authors/update.js";
import { deleteI} from "../controller/authors/delete.js"
import validator from "../middlewares/Validator.js"
import createAuthorSchema from "../schemas/author/create.js";
import updateAuthorSchema from "../schemas/author/update.js";



const routerAuthor = Router()

routerAuthor.get('/all',allAuthors)
routerAuthor.get('/id/:id',authorsById)

routerAuthor.post('/create',validator(createAuthorSchema),createAuthors)
routerAuthor.put('/update',validator(updateAuthorSchema),updateAuthor)
routerAuthor.delete('/deleteI/:_id',deleteI)

export default routerAuthor