import { QueryInterface, SequelizeStatic } from "sequelize";
import { UpdateWalletTypes } from "../enums/subscription-types.enum";
import { Helpers } from "../util/helpers.util";

export = {
  up: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    return queryInterface.createTable("animals", {
      id        : {
        allowNull    : false,
        primaryKey   : true,
        autoIncrement: true,
        type         : Sequelize.BIGINT
      },
      title: {
        allowNull: false,
        type     : Sequelize.STRING
      },
      email: {
        allowNull: false,
        type     : Sequelize.STRING
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING
      },
      name: {
        allowNull: false,
        type     : Sequelize.STRING
      },
      gender: {
        allowNull: false,
        type     : Sequelize.STRING
      },
      type: {
        allowNull: false,
        type     : Sequelize.STRING
      },
      color  : {
        allowNull: true,
        type     : Sequelize.STRING
      },
      age  : {
        allowNull: false,
        type     : Sequelize.STRING
      },
      description  : {
        allowNull: true,
        type     : Sequelize.STRING
      },
      breed  : {
        allowNull: true,
        type     : Sequelize.STRING
      },
      size  : {
        allowNull: false,
        type     : Sequelize.STRING
      },
      is_adopted : {
        allowNull   : false,
        type        : Sequelize.BOOLEAN,
        defaultValue: true
      },
      is_vaccinated : {
        allowNull   : false,
        type        : Sequelize.BOOLEAN,
        defaultValue: true
      },
      image_url: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      createdAt : {
        allowNull: true,
        type     : Sequelize.DATE
      },
      updatedAt : {
        allowNull: true,
        type     : Sequelize.DATE
      }
    });
  },

  down: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    return Promise.all([
      queryInterface.dropTable("animals"),
    ]);
  }
};
