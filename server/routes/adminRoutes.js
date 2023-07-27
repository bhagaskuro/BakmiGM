const AdminCon = require("../controllers/AdminCon");
const router = require("express").Router();

//Admin Routes
router.post("/register", AdminCon.register);

//CUISINES KURANG
router.get("/cuisines", AdminCon.getCuisines);
router.post("/cuisines", AdminCon.createCuisine);
router.put("/cuisines/:id", AdminCon.updateCuisineById);
router.delete("/cuisines/:id", AdminCon.deleteCuisineById);

//router categories
router.post("/categories", AdminCon.createCategory);
router.get("/categories", AdminCon.getCategory);
router.put("categories/:id", AdminCon.updateCategory);
router.delete("/categories/:id", AdminCon.deleteCategoryById);

//Ingredients
router.post("/ingredient", AdminCon.createIngredient);
router.get("/ingredient", AdminCon.getIngredient);
router.put("ingredient/:id", AdminCon.updateIngredient);
router.delete("/ingredient/:id", AdminCon.deleteIngredientById);

module.exports = router;
