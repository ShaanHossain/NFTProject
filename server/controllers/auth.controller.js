const config = require("../config/auth.config");

const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL

const jwt = require("jsonwebtoken");
const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(ALCHEMY_API_URL)

exports.signin = (req, res) => {

  try {
    var token = jwt.sign({ walletId: req.walletId }, config.secret, {
      expiresIn: 60 // 24 hours
    });

    if (!web3.utils.isAddress(address)){
      return res.status(400).send({
        accessToken: null,
        message: "Invalid Address"
      });
    }

    res.status(200).send({
      walletId: req.walletId,
      accessToken: token
    });
  } catch (exception) {
    res.status(500).send({ message: err.message });
  }

  // User.findOne({
  //   where: {
  //     username: req.body.username
  //   }
  // })
  //   .then(user => {
  //     if (!user) {
  //       return res.status(404).send({ message: "User Not found." });
  //     }
  //
  //     var passwordIsValid = bcrypt.compareSync(
  //       req.body.password,
  //       user.password
  //     );
  //
  //     if (!passwordIsValid) {
  //       return res.status(401).send({
  //         accessToken: null,
  //         message: "Invalid Password!"
  //       });
  //     }
  //
  //     var token = jwt.sign({ id: user.id }, config.secret, {
  //       expiresIn: 86400 // 24 hours
  //     });
  //
  //     var authorities = [];
  //     user.getRoles().then(roles => {
  //       for (let i = 0; i < roles.length; i++) {
  //         authorities.push("ROLE_" + roles[i].name.toUpperCase());
  //       }
  //     });
  //   })
  //   .catch(err => {
  //     res.status(500).send({ message: err.message });
  //   });
};
