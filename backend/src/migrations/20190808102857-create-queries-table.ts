import { QueryInterface, SequelizeStatic } from "sequelize";
import { UpdateWalletTypes } from "../enums/subscription-types.enum";
import { Helpers } from "../util/helpers.util";

export = {
  up: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    return queryInterface.createTable("queries", {
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
      animal_id         : {
        type      : Sequelize.BIGINT,
        allowNull : false,
        references: {
          model: "animals",
          key  : "id"
        },
        onDelete  : "cascade"
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
