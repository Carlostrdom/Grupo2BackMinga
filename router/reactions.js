import { Router } from "express";
import { allReactions, reactionById } from "../controller/reaction/read.js";
import createReaction from "../controller/reaction/create.js";
import updateReaction from "../controller/reaction/update.js";
import deleteReaction from "../controller/reaction/delete.js";
import validator from "../middlewares/validator.js"
import createSchemaReaction from "../schemas/reaction/create.js";
import updateSchemaReaction from "../schemas/reaction/update.js";



const routerReaction = Router()

routerReaction.get('/all', allReactions)
routerReaction.get('/reactionid/:_id', reactionById)
routerReaction.post('/create',validator(createSchemaReaction), createReaction)
routerReaction.put('/updateReaction',validator(updateSchemaReaction), updateReaction)
routerReaction.delete('/delete/:_id', deleteReaction)

export default routerReaction;
