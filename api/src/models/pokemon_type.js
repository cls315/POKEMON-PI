const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "pokemon_type",
    {
      pokemonId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "Pokemon",
          key: "id",
        },
      },
      typeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "Type",
          key: "id",
        },
      },
    },
    { timestamps: false }
  );
};
