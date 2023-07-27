const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { User } = require("../models");

class Controller {
  //static async login
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email) throw { name: "reqEmailPassword" };
      if (!password) throw { name: "reqEmailPassword" };

      const user = await User.findOne({ where: { email } });
      if (!user) throw { name: "emailpassword" };

      const pass = comparePassword(password, user.password);
      if (!pass) throw { name: "emailpassword" };

      const payload = {
        id: user.id,
      };
      const acces_token = signToken(payload);

      res.status(200).json({
        id: user.id,
        email: user.email,
        access_token: acces_token,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
