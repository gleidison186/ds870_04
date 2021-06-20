const Appointment = require("../models/Appointment");
const Sequelize = require("sequelize");

module.exports = {
  async searchAppointmentByPatientId(req, res) {
    const patientId = req.params.patientId;
    if (!patientId) {
      return res.status(400).json({
        msg: "Campo paciente vazio.",
      });
    }
    const appointments = await Appointment.findAll({
      where: { patientId },
    }).catch((error) => {
      return res.status(500).json({ msg: "Falha na conexão " + error });
    });
    if (appointments) {
      if (appointments == "") {
        return res
          .status(404)
          .json({ msg: "Não há consultas para este paciente." });
      } else {
        return res.status(200).json({ appointments });
      }
    } else {
      return res
        .status(404)
        .json({ msg: "Não foi possível encontrar consultas." });
    }
  },

  async searchAppointmentByPhysicianId(req, res) {
    const physicianId = req.params.physicianId;
    if (!physicianId) {
      return res.status(400).json({
        msg: "Campo médico vazio.",
      });
    }
    const appointments = await Appointment.findAll({
      where: { physicianId },
    }).catch((error) => {
      return res.status(500).json({ msg: "Falha na conexão " + error });
    });
    if (appointments) {
      if (appointments == "") {
        return res
          .status(404)
          .json({ msg: "Não há consultas para este médico." });
      } else {
        return res.status(200).json({ appointments });
      }
    } else {
      return res
        .status(404)
        .json({ msg: "Não foi possível encontrar consultas." });
    }
  },

  async newAppointment(req, res) {
    const { patientId, physicianId, description } = req.body;
    if (!patientId || !physicianId || !description || description.trim() === "") {
      res.status(400).json({
        msg: "Dados obrigatórios não foram preenchidos.",
      });
    }
    const appointment = await Appointment.create({
        patientId,
        physicianId,
        description
    }).catch((error) => {
        res.status(500).json({ msg: "Não foi possível inserir os dados " + error })
    })
    if (appointment){
        res.status(201).json({ msg: "Nova consulta adicionada" })
    }else{
        res.status(404).json({ msg: "Não foi possível cadastrar nova consulta" })
    }
  },
  async deleteAppointment (req, res) {
      const appointmentId = req.params.appointmentId
      const deleteAppointment = await Appointment.destroy({
          where: {id: appointmentId}
      }).catch((error) => {
        return res.status(500).json({ msg: "Falha na conexão. " + error })
      })
      if (deleteAppointment != 0){
          return res.status(200).json({ msg: "Consulta Excluída com Sucesso" })
      }else{
          return res.status(404).json({ msg: "Consulta não encontrada" })
      }
  }
};
