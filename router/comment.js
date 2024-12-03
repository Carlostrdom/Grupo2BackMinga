import { Router } from "express";
import { allComments, commentsById } from "../controller/comments/read.js";
import create from "../controller/comments/create.js";
import updateComment from "../controller/comments/update.js";
import deleteCo from "../controller/comments/delete.js";




const routerComment = Router()


routerComment.get('/allComments', allComments)
routerComment.get('/idComment/:_id', commentsById)
routerComment.post('/create', create)
routerComment.put('/update', updateComment)
routerComment.delete("/deleteCo/:_id", deleteCo)




export default routerComment