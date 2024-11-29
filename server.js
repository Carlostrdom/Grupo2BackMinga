import express from "express";
import 'dotenv/config.js';
import "./config/database.js";
import cors from "cors";
import morgan from "morgan";
import error_handler from "./middlewares/error_handler.js";
import not_found_handler from "./middlewares/not_found_handler.js";
import clientErrorHandler from "./middlewares/clientErrorHandler.js";
import indexRouter from "./router/index.js";
const server = express();
const PORT = process.env.PORT || 8080;

const ready = () => console.log(`Server listening on port ${PORT}`);


server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cors())
server.use(morgan('dev'))

//router

server.use('/api', indexRouter)

//middlewares

server.use(clientErrorHandler);
server.use(not_found_handler);
server.use(error_handler);


server.listen(PORT, ready);


