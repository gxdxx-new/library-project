const Sequelize = require("sequelize");

module.exports = class Recommend extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        count: {
          type: Sequelize.INTEGER.UNSIGNED,
          defaultValue: 0,
          allowNull: false,
        },
        title: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        author: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        publisher: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        publicationYear: {
          type: Sequelize.INTEGER.UNSIGNED,
          defaultValue: 0,
          allowNull: false,
        },
        page: {
          type: Sequelize.STRING(40),
          defaultValue: 0,
          allowNull: false,
        },
        price: {
          type: Sequelize.INTEGER.UNSIGNED,
          defaultValue: 0,
          allowNull: false,
        },
        img: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
      },

      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "Recommend",
        tableName: "recommends",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.Recommend.hasMany(db.Book);
  }
};
