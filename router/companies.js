import { Router } from "express";
import create from "../controller/companies/create.js";
import deleteCompany from "../controller/companies/delete.js";
import updateCompany from "../controller/companies/update.js";
import { allCompanies, idAllCompanies } from "../controller/companies/read.js";
import validator from "../middlewares/validator.js"
import companySchema from "../schemas/companies/create.js";
import updateCompanySchema from "../schemas/companies/update.js";






const routerCompany = Router()


routerCompany.get('/allCompanies', allCompanies)
routerCompany.get('/idCompanies/:_id', idAllCompanies)
routerCompany.post('/create',validator(companySchema),create)
routerCompany.delete('/delete',deleteCompany)
routerCompany.put('/update',validator(updateCompanySchema),updateCompany)

export default routerCompany