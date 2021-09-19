const config = require("../config/auth.config");

const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL

const jwt = require("jsonwebtoken");
const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(ALCHEMY_API_URL)

exports.signin = (req, res) => {

  try {
    var token = jwt.sign({ walletId: req.body.walletId }, config.secret, {
      expiresIn: 3600 // 24 hours
    });

    if (!web3.utils.isAddress(req.body.walletId)) {
      return res.status(400).send({
        accessToken: null,
        message: "Invalid Address"
      });
    }

    res.status(200).send({
      walletId: req.body.walletId,
      accessToken: token
    });
  } catch (exception) {
    res.status(500).send({ message: exception.message });
  }
};
