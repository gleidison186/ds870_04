"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Todas as senhas são: 1234abcd
    return queryInterface.bulkInsert(
      "Physicians",
      [
        {
          name: "João",
          email: "joao@hotmail.com",
          password: "$2a$12$HP9/GxtOrNuK4M5GG3v3gejq7ISjDdzrpr/TFHmMt9PUGMy9bkYnm",
        },
        {
          name: "Ana",
          email: "ana@hotmail.com",
          password: "$2a$12$HP9/GxtOrNuK4M5GG3v3gejq7ISjDdzrpr/TFHmMt9PUGMy9bkYnm",
        },
        {
          name: "Maria",
          email: "maria@hotmail.com",
          password: "$2a$12$HP9/GxtOrNuK4M5GG3v3gejq7ISjDdzrpr/TFHmMt9PUGMy9bkYnm",
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      "Physicians", null, {}
    )
  }
};
