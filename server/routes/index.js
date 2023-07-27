const Controller = require("../controllers");
const router = require("express").Router();
const adminRoutes = require("./adminRoutes");
const clientRoutes = require("./clientRoutes");
const { authentication } = require("../middleware/auth");

//main router before auth
router.post("/login", Controller.login);

//modular router
router.use("/admin", authentication, adminRoutes);
router.use("/client", clientRoutes);

module.exports = router;
