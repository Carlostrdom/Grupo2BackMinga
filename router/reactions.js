import { Router } from "express";
import { allReactions, reactionById } from "../controller/reaction/read.js";
import createReaction from "../controller/reaction/create.js";
import updateReaction from "../controller/reaction/update.js";
import deleteReaction from "../controller/reaction/delete.js";



const routerReaction = Router()

routerReaction.get('/all', allReactions)
routerReaction.get('/reactionid/:_id', reactionById)
routerReaction.post('/create', createReaction)
routerReaction.put('/updateReaction', updateReaction)
routerReaction.delete('/delete/:_id', deleteReaction)

export default routerReaction;
