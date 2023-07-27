const ClientCon = require("../controllers/ClientCon");
const router = require("express").Router();

//Client Routes
router.get("/cuisines", ClientCon.getCuisines);
router.get("/cuisines/:id", ClientCon.getCuisineById);
router.get("/categories", ClientCon.getCategory);

module.exports = router;
