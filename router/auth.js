import { Router } from "express";
import accountNotExist from "../middlewares/accountNoexists.js";
import generateToken from "../middlewares/generateToken.js";
import validorUser from "../middlewares/Validator.js";
import isValidadPassword from "../middlewares/isValidadPassword.js";
import user_schema_signin from "../schemas/auth/auth.js";
import signIn from "../controller/auth/signin.js";
import signout from "../controller/auth/signout.js";
import passport from "../middlewares/passport.js";
import passportGoogle from "../middlewares/passportGoogle.js";
import { recorToken } from "../controller/users/read.js";
import signinGoogle from "../controller/auth/signinGoogle.js";


const routerAuth = Router();

routerAuth.post("/signIn", validorUser(user_schema_signin), accountNotExist, isValidadPassword, generateToken, signIn);
routerAuth.post("/signout", passport.authenticate('jwt', { session: false }), signout);

routerAuth.get("/token", passport.authenticate('jwt', { session: false }), recorToken);


routerAuth.get(
    '/signIn/google',
    passportGoogle.authenticate('google', { session: false, scope: ['profile', 'email'] })
)
routerAuth.get(
    '/signInGoogle/callback',
    passportGoogle.authenticate('google', { session: false, failureRedirect: '/login' }),
    generateToken,
    signinGoogle

)
export default routerAuth; 