"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class IngredientCuisine extends Model {
    static associate(models) {}
  }
  IngredientCuisine.init(
    {
      cuisineId: DataTypes.INTEGER,
      ingredientId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "IngredientCuisine",
    }
  );
  return IngredientCuisine;
};
