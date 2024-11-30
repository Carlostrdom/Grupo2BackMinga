import { Router } from "express";
import {  allAuthors, authorsById } from "../controller/authors/read.js";
import  { createAuthors }  from "../controller/authors/create.js";
import { updateAuthor} from "../controller/authors/update.js";
import { deleteI} from "../controller/authors/delete.js"



const routerAuthor = Router()

routerAuthor.get('/all',allAuthors)
routerAuthor.get('/id/:id',authorsById)

routerAuthor.post('/create',createAuthors)
routerAuthor.put('/update',updateAuthor)
routerAuthor.delete('/deleteI/:_id',deleteI)

export default routerAuthor