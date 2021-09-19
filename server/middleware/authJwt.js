const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

const balance = require("../../scripts/get-balance.js")

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.walletId = decoded.walletId;
    if (!(balance.getBalance(req.walletId) > 0)) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    next();
  });
};

module.exports = { verifyToken }
