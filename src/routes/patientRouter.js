const express = require("express");
const patientRouter = express.Router();
const patientController = require("../controllers/patientController");

patientRouter.post("/newPatient", patientController.newPatient);

patientRouter.post("/searchPatientByName/:patientName", patientController.searchPatientByName);

patientRouter.put("/updatePatient", patientController.updatePatient);

patientRouter.get("/searchPatientByPhysicianId/:physicianId", patientController.searchPatientByPhysicianId);

module.exports = patientRouter;
