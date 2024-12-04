import { Router } from "express";
import { allComments, commentsById } from "../controller/comments/read.js";
import create from "../controller/comments/create.js";
import updateComment from "../controller/comments/update.js";
import deleteCo from "../controller/comments/delete.js";
import validator from "../middlewares/validator.js"
import createSchemaComment from "../schemas/comments/create.js";
import updateSchemaComment from "../schemas/comments/update.js";



const routerComment = Router()


routerComment.get('/allComments', allComments)
routerComment.get('/idComment/:_id', commentsById)
routerComment.post('/create',validator(createSchemaComment), create)
routerComment.put('/update',validator(updateSchemaComment), updateComment)
routerComment.delete("/deleteCo/:_id", deleteCo)




export default routerComment