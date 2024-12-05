import { Router } from "express";
import passport from "../middlewares/passport.js";
import  createHash  from "../middlewares/createHash.js";
import  accountExists  from "../middlewares/accountExists.js";
import validatorId from "../middlewares/validatorId.js";
import validorUser from "../middlewares/Validator.js";
import { allUser, idAllUsers } from "../controller/users/read.js";
import createUser from "../controller/users/create.js";
import updateUser from "../controller/users/update.js";
import deleteUser from "../controller/users/delete.js";
import user_schema from "../schemas/users/create.js";
import user_schema_update from "../schemas/users/update.js";
import user_schema_delete from "../schemas/users/delete.js";
import generateToken from "../middlewares/generateToken.js";
import validorschema from "../middlewares/Validator.js";
const router = Router();


router.get('/all',passport.authenticate('jwt',{session:false}),allUser);
router.get('/user/:_id',passport.authenticate('jwt',{session:false}),idAllUsers)
router.post('/register',validorschema(user_schema),accountExists,createHash,generateToken,createUser)
router.put("/update",passport.authenticate('jwt',{session:false}),validorUser(user_schema_update), updateUser);
router.delete("/delete/:_id",passport.authenticate('jwt',{session:false}),validatorId(user_schema_delete), deleteUser);


export default router;