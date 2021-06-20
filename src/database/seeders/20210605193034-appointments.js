"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Appointments",
      [
        {
          physicianId: 1,
          patientId: 1,
          appointmentDate: Sequelize.literal("CURRENT_TIMESTAMP"),
          description: "Agendamento",
        },
        {
          physicianId: 1,
          patientId: 2,
          appointmentDate: Sequelize.literal("CURRENT_TIMESTAMP"),
          description: "Agendamento",
        },
        {
          physicianId: 2,
          patientId: 3,
          appointmentDate: Sequelize.literal("CURRENT_TIMESTAMP"),
          description: "Agendamento",
        },
        {
          physicianId: 2,
          patientId: 3,
          appointmentDate: Sequelize.literal("CURRENT_TIMESTAMP"),
          description: "Agendamento",
        },
        {
          physicianId: 3,
          patientId: 4,
          appointmentDate: Sequelize.literal("CURRENT_TIMESTAMP"),
          description: "Agendamento",
        },
        {
          physicianId: 3,
          patientId: 5,
          appointmentDate: Sequelize.literal("CURRENT_TIMESTAMP"),
          description: "Agendamento",
        },
        {
          physicianId: 3,
          patientId: 6,
          appointmentDate: Sequelize.literal("CURRENT_TIMESTAMP"),
          description: "Agendamento",
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      "Appointments", null, {}
    )
  }
};
