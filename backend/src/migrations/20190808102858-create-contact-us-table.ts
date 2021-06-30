import { QueryInterface, SequelizeStatic } from "sequelize";
import { UpdateWalletTypes } from "../enums/subscription-types.enum";
import { Helpers } from "../util/helpers.util";

export = {
  up: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    return queryInterface.createTable("contact_us", {
      id        : {
        allowNull    : false,
        primaryKey   : true,
        autoIncrement: true,
        type         : Sequelize.BIGINT
      },
      subject: {
        allowNull: false,
        type     : Sequelize.STRING
      },
      email  : {
        allowNull: false,
        type     : Sequelize.STRING
      },
      phone  : {
        allowNull: true,
        type     : Sequelize.STRING
      },
      message         : {
        type      : Sequelize.STRING,
        allowNull : false,
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
      queryInterface.dropTable("queries"),
    ]);
  }
};
