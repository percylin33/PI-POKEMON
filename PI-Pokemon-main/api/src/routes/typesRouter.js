const getAllTypesHandler =  require("../handlers/getAllTypesHandler");

const {Router} = require("express");

const typesRouter = Router();

typesRouter.get("/", getAllTypesHandler)

module. exports = typesRouter;