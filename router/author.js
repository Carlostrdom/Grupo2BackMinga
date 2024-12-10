import { Router } from "express";
import {  allAuthors, AuthorByUser, authorsById } from "../controller/authors/read.js";
import  { createAuthors }  from "../controller/authors/create.js";
import { updateAuthor} from "../controller/authors/update.js";
import { deleteI} from "../controller/authors/delete.js"
import validorschema from "../middlewares/validator.js";
import createAuthorSchema from "../schemas/author/create.js";
import updateAuthorSchema from "../schemas/author/update.js";



const routerAuthor = Router()

routerAuthor.get('/all',allAuthors)
routerAuthor.get('/id/:_id',authorsById)
routerAuthor.get('/user/:_id',AuthorByUser)
routerAuthor.post('/create',validorschema(createAuthorSchema),createAuthors)
routerAuthor.put('/update',validorschema(updateAuthorSchema),updateAuthor)
routerAuthor.delete('/deleteI',deleteI)

export default routerAuthor