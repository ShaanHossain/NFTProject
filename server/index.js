// server/index.js

const minter = require("../scripts/mint-nft.js");

const express = require("express");

const PORT = process.env.PORT || 3001;

const path = require('path');
const app = express();


// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.post("/api/nft", (req, res) => {
  //let resp = minter.mintNFT("https://gateway.pinata.cloud/ipfs/Qmd1vsn5NVpwWsxWgnbRDadWCm5HykfS77XgWg7jyeBmCE");
  //console.log(resp);
  res.json({ message: "hello" });
});

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
