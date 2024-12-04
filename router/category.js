import { Router } from "express";
import { allCategories, categoriesById } from "../controller/category/read.js";
import  { createCategories }  from "../controller/category/create.js";
import { updateCategory} from "../controller/category/update.js";
import { deleteI} from "../controller/category/delete.js"
import validator from "../middlewares/validator.js"
import createSchemaCategory from "../schemas/category/create.js";
import updateSchemaCategory from "../schemas/category/update.js";


const routerCategory = Router()

routerCategory.get('/all',allCategories)
routerCategory.get('/categoryId/:_id',categoriesById)
routerCategory.post('/create',validator(createSchemaCategory),createCategories)
routerCategory.put('/update',validator(updateSchemaCategory),updateCategory)
routerCategory.delete('/deleteId/:_id',deleteI)

export default routerCategory