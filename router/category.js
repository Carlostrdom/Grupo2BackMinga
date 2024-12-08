import { Router } from "express";
import { allCategories, categoriesById } from "../controller/category/read.js";
import  { createCategories }  from "../controller/category/create.js";
import { updateCategory} from "../controller/category/update.js";
import { deleteI} from "../controller/category/delete.js"
import createSchemaCategory from "../schemas/category/create.js";
import updateSchemaCategory from "../schemas/category/update.js";
import validorschema from "../middlewares/validator.js";


const routerCategory = Router()

routerCategory.get('/all',allCategories)
routerCategory.get('/categoryId/:_id',categoriesById)
routerCategory.post('/create',validorschema(createSchemaCategory),createCategories)
routerCategory.put('/update',validorschema(updateSchemaCategory),updateCategory)
routerCategory.delete('/deleteId/:_id',deleteI)

export default routerCategory