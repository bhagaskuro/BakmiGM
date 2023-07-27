"use strict";
const { Model } = require("sequelize");
const ingredientcuisine = require("./ingredientcuisine");

module.exports = (sequelize, DataTypes) => {
  class Cuisine extends Model {
    static associate(models) {
      this.belongsTo(models.Category, {
        foreignKey: "categoryId",
      });
      this.belongsTo(models.User, {
        foreignKey: "authorId",
      });
      this.belongsToMany(models.Ingredient, {
        through: "IngredientCuisine",
        foreignKey: "cuisineId",
      });
    }

    //CUISINE TRANSACTION
    static async insertCuisine(data) {
      const t = await sequelize.transaction();

      try {
        //insert data into table cuisine
        const cus = await Cuisine.create(
          {
            name: data.name,
            description: data.description,
            price: data.price,
            imgUrl: data.imgUrl,
            authorId: data.authorId,
            categoryId: data.categoryId,
          },
          { transaction: t }
        );

        //create data for insert into ingredientCuisine
        const ingredientId = JSON.parse(data.ingredient);
        const ingredient = [];
        ingredientId.forEach((el) => {
          ingredient.push({ cuisineId: cus.id, ingredientId: el });
        });

        //insert data into table IngredientCuisine
        await IngredientCuisine.bulkCreate(ingredient, { transaction: t });

        await t.commit();
      } catch (error) {
        await t.rollback();
      }
    }
  }

  Cuisine.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Name cannot be null",
          },
          notEmpty: {
            msg: "Name cannot be Empty",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Description cannot be null",
          },
          notEmpty: {
            msg: "Description cannot be Empty",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Price cannot be null",
          },
          notEmpty: {
            msg: "Price cannot be Empty",
          },
          min: {
            args: [5000],
            msg: "Price minimum must be Rp. 5000",
          },
        },
      },
      imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Image URL cannot be null",
          },
          notEmpty: {
            msg: "Image URL cannot be Empty",
          },
        },
      },
      authorId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cuisine",
    }
  );
  return Cuisine;
};
