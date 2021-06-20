const express = require("express");
const appointmentRouter = express.Router();
const appointmentController = require("../controllers/appointmentController");
const auth = require("../middlewares/auth")

appointmentRouter.get(
  "/searchAppointmentByPatientId/:patientId",
  auth,
  appointmentController.searchAppointmentByPatientId
);

appointmentRouter.get(
  "/searchAppointmentByPhysicianId/:physicianId",
  auth,
  appointmentController.searchAppointmentByPhysicianId
);

appointmentRouter.post("/newAppointment", auth, appointmentController.newAppointment);
appointmentRouter.delete(
  "/deleteAppointment/:appointmentId",
  auth,
  appointmentController.deleteAppointment
);

module.exports = appointmentRouter;
