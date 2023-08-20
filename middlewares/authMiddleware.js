const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { rawListeners } = require("../app");

module.exports = async (req, res, next) => {
  const payload = {
    userId: req.user._id,
    username: req.user.username,
  };

  const secretKey = "the_jet_secret_key";
  const expiresIn = "1h";

  const token = jwt.sign(payload, secretKey, { expiresIn });

  if (!token) {
    return res.status(401).json({ message: "Authorization token missing" });
  }

  try {
    const decoded = jwt.verify(token, "the_jwt_secret_key");
    const user = await User.findById(decoded.userId);

    if (!user) {
      throw new Error();
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
