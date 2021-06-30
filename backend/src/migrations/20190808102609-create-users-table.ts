import { QueryInterface, SequelizeStatic } from "sequelize";

export = {
  up: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    return queryInterface.createTable("users", {
      id                 : {
        allowNull    : false,
        primaryKey   : true,
        autoIncrement: true,
        type         : Sequelize.BIGINT
      },
      name               : {
        type     : Sequelize.STRING,
        allowNull: true
      },
      email              : {
        type     : Sequelize.STRING,
        unique   : true,
        allowNull: true
      },
      mobile_no          : {
        type     : Sequelize.STRING,
        allowNull: false,
        unique   : true,
      },
      alternate_no       : {
        type     : Sequelize.STRING,
        allowNull: true,
        unique   : true,
      },
      wallet             : {
        type        : Sequelize.FLOAT,
        allowNull   : false,
        defaultValue: 0
      },
      secondary_wallet   : {
        type        : Sequelize.FLOAT,
        allowNull   : false,
        defaultValue: 0
      },
      subscription_wallet: {
        type        : Sequelize.FLOAT,
        allowNull   : false,
        defaultValue: 0
      },
      address            : {
        allowNull: true,
        type     : Sequelize.STRING
      },
      landmark           : {
        allowNull: true,
        type     : Sequelize.STRING
      },
      state              : {
        allowNull: true,
        type     : Sequelize.STRING
      },
      area_id            : {
        allowNull : true,
        type      : Sequelize.BIGINT,
        references: {
          model: "areas",
          key  : "id"
        },
        onDelete  : "set null"
      },
      location_id        : {
        allowNull : true,
        type      : Sequelize.BIGINT,
        references: {
          model: "locations",
          key  : "id"
        },
        onDelete  : "set null"
      },
      city_id            : {
        allowNull : true,
        type      : Sequelize.BIGINT,
        references: {
          model: "cities",
          key  : "id"
        },
        onDelete  : "set null"
      },
      pincode            : {
        allowNull: true,
        type     : Sequelize.STRING
      },
      is_active          : {
        allowNull: false,
        type     : Sequelize.BOOLEAN
      },
      earned_referral    : {
        allowNull   : false,
        type        : Sequelize.BOOLEAN,
        defaultValue: 0
      },
      referral_code      : {
        allowNull: false,
        type     : Sequelize.STRING,
        unique   : true
      },
      referred_by        : {
        allowNull : true,
        type      : Sequelize.BIGINT,
        references: {
          model: "users",
          key  : "id"
        },
        onDelete  : "set null"
      },
      createdAt          : {
        allowNull: true,
        type     : Sequelize.DATE
      },
      updatedAt          : {
        allowNull: true,
        type     : Sequelize.DATE
      },
      deletedAt          : {
        allowNull: true,
        type     : Sequelize.DATE
      }
    });
  },

  down: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
    return Promise.all([
      queryInterface.dropTable("users"),
    ]);
  }
};
