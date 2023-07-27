"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    static associate(models) {
      this.belongsToMany(models.Cuisine, {
        through: "IngredientCuisine",
        foreignKey: "ingredientId",
      });
    }
  }
  Ingredient.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Ingredient",
    }
  );
  return Ingredient;
};
