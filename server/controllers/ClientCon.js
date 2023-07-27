const { User, Cuisine, Category, Ingredient } = require("../models");

class ClientCon {
  //static async for read all cuisines data
  static async getCuisines(req, res, next) {
    try {
      const cuisines = await Cuisine.findAll({
        include: [
          {
            model: User,
            attributes: ["email"],
          },
          {
            model: Category,
            attributes: ["name"],
          },
        ],
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        order: [["id", "desc"]],
      });
      res.status(200).json(cuisines);
    } catch (error) {
      next(error);
    }
  }

  //static async for read post by Id
  static async getCuisineById(req, res, next) {
    try {
      const cuisine = await Cuisine.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ["email"],
          },
          {
            model: Category,
            attributes: ["id", "name"],
          },
          {
            model: Ingredient,
            attributes: ["name"],
          },
        ],
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      if (!cuisine) throw { name: "NotFound" };
      res.status(200).json(cuisine);
    } catch (error) {
      next(error);
    }
  }

  //static async get all category
  static async getCategory(req, res, next) {
    try {
      const category = await Category.findAll({
        order: [["id", "desc"]],
      });

      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ClientCon;
