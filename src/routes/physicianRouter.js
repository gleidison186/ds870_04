const express = require("express");
const physicianRouter = express.Router();
const physicianController = require("../controllers/physicianController");
const auth = require("../middlewares/auth")

physicianRouter.post("/authentication", physicianController.authentication)

physicianRouter.post("/newPhysician", auth, physicianController.newPhysician);

physicianRouter.get("/listAllPhysician", auth, physicianController.listAllPhysician);

physicianRouter.put("/updatePhysician", auth, physicianController.updatePhysician);

physicianRouter.delete("/deletePhysician/:id", auth, physicianController.deletePhysician);

module.exports = physicianRouter;
