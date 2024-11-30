import { Router } from "express";
import create from "../controller/companies/create.js";
import deleteCompany from "../controller/companies/delete.js";
import updateCompany from "../controller/companies/update.js";
import { allCompanies, idAllCompanies } from "../controller/companies/read.js";





const routerCompany = Router()


routerCompany.get('/allCompanies', allCompanies)
routerCompany.get('/idCompanies/:_id', idAllCompanies)
routerCompany.post('/create',create)
routerCompany.delete('/delete',deleteCompany)
routerCompany.put('/update',updateCompany)

export default routerCompany