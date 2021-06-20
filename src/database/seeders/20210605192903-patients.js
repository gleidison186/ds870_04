"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Patients",
      [
        {
          name: "Julio",
          email: "julio@hotmail.com",
          phone: "123412345",
        },
        {
          name: "José",
          email: "jose@hotmail.com",
          phone: "123412345",
        },
        {
          name: "Franciele",
          email: "franciele@hotmail.com",
          phone: "123412345",
        },
        {
          name: "Mario",
          email: "mario@hotmail.com",
          phone: "123412345",
        },
        {
          name: "Rosangela",
          email: "rosangela@hotmail.com",
          phone: "123412345",
        },
        {
          name: "Valentina",
          email: "valentina@hotmail.com",
          phone: "123412345",
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      "Patients", null, {}
    )
  }
};
