const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Type",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name_types: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
