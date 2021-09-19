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
    // console.log(err)
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.body.walletId = decoded.walletId;

    console.log(req.body.walletId)

    balance.getBalance(req.body.walletId)
      .then((retrievedBalance) => {
        console.log(retrievedBalance)

        if (retrievedBalance > 0) {
          next()
        } else {
          console.log("No Dolphin, No Entry")
          return res.status(401).send({
            message: "No Dolphin, No Entry"
          });
        }
      })
      .catch((err) => {
        console.log(err)
        console.log("Balance could not be retrieved")
        return res.status(500).send({
          message: "Server side error"
        });
      })
  });
};

module.exports = { verifyToken }
