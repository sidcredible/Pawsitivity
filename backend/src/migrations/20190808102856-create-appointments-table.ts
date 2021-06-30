import { QueryInterface, SequelizeStatic } from "sequelize";
import { UpdateWalletTypes } from "../enums/subscription-types.enum";
import { Helpers } from "../util/helpers.util";

export = {
  up: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    return queryInterface.createTable("appointments", {
      id        : {
        allowNull    : false,
        primaryKey   : true,
        autoIncrement: true,
        type         : Sequelize.BIGINT
      },
      name: {
        allowNull: false,
        type     : Sequelize.STRING
      },
      email  : {
        allowNull: false,
        type     : Sequelize.STRING
      },
      phone  : {
        allowNull: false,
        type     : Sequelize.STRING
      },
      datetime  : {
        allowNull: false,
        type     : Sequelize.STRING
      },
      category  : {
        allowNull: false,
        type     : Sequelize.STRING
      },
      service_type   : {
        allowNull: false,
        type     : Sequelize.STRING
      },
      comments  : {
        allowNull: false,
        type     : Sequelize.STRING
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
      queryInterface.dropTable("appointments"),
    ]);
  }
};
