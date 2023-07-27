const {
  User,
  Cuisine,
  Ingredient,
  IngredientCuisine,
  Category,
  sequelize,
} = require("../models");

class AdminCon {
  //static async for register new user
  static async register(req, res, next) {
    try {
      console.log("masuk");
      const newData = {
        email: req.body.email,
        password: req.body.password,
      };

      let createData = await User.create(newData);
      let { id, email } = createData;
      console.log(createData, "<<<< createData");
      res.status(201).json({ id, email });
    } catch (error) {
      next(error);
    }
  }

  //static async for insert new cuisine
  static async createCuisine(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const data = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        imgUrl: req.body.imgUrl,
        categoryId: req.body.categoryId,
        authorId: req.user.id,
        ingredient: req.body.ingredient,
      };

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

      res.status(201).json({ msg: "Cuisine has been saved" });
      await t.commit();
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }

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

  //static async methot for update cuisine by Id
  static async updateCuisineById(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { id } = req.params;
      const data = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        imgUrl: req.body.imgUrl,
        categoryId: req.body.categoryId,
        ingredient: req.body.ingredient,
      };

      //insert data into table cuisine
      const cus = await Cuisine.update(
        {
          name: data.name,
          description: data.description,
          price: data.price,
          imgUrl: data.imgUrl,
          categoryId: data.categoryId,
        },
        {
          where: {
            id,
          },
          transaction: t,
        }
      );

      //create data for insert into ingredientCuisine
      const ingredientId = JSON.parse(data.ingredient);
      const ingredient = [];
      ingredientId.forEach((el) => {
        ingredient.push({ cuisineId: id, ingredientId: el });
      });

      //delete existing ingredient
      await IngredientCuisine.destroy({
        where: {
          cuisineId: id,
        },
        transaction: t,
      });

      //insert data into table IngredientCuisine
      await IngredientCuisine.bulkCreate(ingredient, { transaction: t });

      res.status(200).json({ message: `Data with id ${id} updated` });
      await t.commit();
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }

  //static async method for delete cuisine by Id
  static async deleteCuisineById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Cuisine.findByPk(id);

      if (!data) throw { name: "NotFound" };
      await Cuisine.destroy({
        where: {
          id: id,
        },
      });
      res.status(200).json({ message: `${data.name} success to delete` });
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

  //static async for insert new category
  static async createCategory(req, res, next) {
    try {
      const newData = {
        name: req.body.name,
      };

      let createData = await Category.create(newData);
      res.status(201).json(createData);
    } catch (error) {
      next(error);
    }
  }

  //static async for update category
  static async updateCategory(req, res, next) {
    try {
      const { id } = req.params;
      const newData = {
        name: req.body.name,
      };

      await Category.update(newData, {
        where: {
          id: id,
        },
      });

      res.status(200).json({ message: `Data with id ${id} updated` });
    } catch (error) {
      next(error);
    }
  }

  //static async method for delete category by Id
  static async deleteCategoryById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Category.findByPk(id);
      await Category.destroy({
        where: {
          id: id,
        },
      });
      res.status(200).json({ message: `${data.name} success to delete` });
    } catch (error) {
      next(error);
    }
  }

  //static async get all ingredient
  static async getIngredient(req, res, next) {
    try {
      const category = await Ingredient.findAll({
        order: [["id", "desc"]],
      });

      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }

  //static async for insert new ingredient
  static async createIngredient(req, res, next) {
    try {
      const newData = {
        name: req.body.name,
      };

      let createData = await Ingredient.create(newData);
      res.status(201).json(createData);
    } catch (error) {
      next(error);
    }
  }

  //static async for update ingredient
  static async updateIngredient(req, res, next) {
    try {
      const { id } = req.params;
      const newData = {
        name: req.body.name,
      };

      await Ingredient.update(newData, {
        where: {
          id: id,
        },
      });

      res.status(200).json({ message: `Data with id ${id} updated` });
    } catch (error) {
      next(error);
    }
  }

  //static async method for delete ingredient by Id
  static async deleteIngredientById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Ingredient.findByPk(id);
      await Ingredient.destroy({
        where: {
          id: id,
        },
      });
      res.status(200).json({ message: `${data.name} success to delete` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AdminCon;
