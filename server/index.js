// server/index.js

const minter = require("../scripts/mint-nft.js");
const balance = require("../scripts/get-balance.js");

const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const path = require('path');
const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

if(process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https')
      res.redirect(`https://${req.header('host')}${req.url}`)
    else
      next()
  })
}

require('../server/routes/auth.routes')(app);
require('../server/routes/user.routes')(app);

// Handle GET requests to /api route
app.get("/api/mint", async (req, res) => {
  //let resp = minter.mintNFT("https://gateway.pinata.cloud/ipfs/Qmd1vsn5NVpwWsxWgnbRDadWCm5HykfS77XgWg7jyeBmCE");
  //console.log(resp);
  res.json({ message: "hello" });

});

// Handle GET requests to /api route
app.get("/api/nft", async (req, res) => {

  const val = await balance.getBalance()

  res.json({ message: val });

});

// // Handle GET requests to /api route
// app.get("/api/nft", (req, res) => {
//   resp = balance.getBalance()
//   console.log(resp)
//   res.json({ message: resp });
//
// });

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
