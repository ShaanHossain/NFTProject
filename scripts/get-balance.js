//index.js

require("dotenv").config()

const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL
const META_MASK_PUBLIC_KEY = process.env.META_MASK_PUBLIC_KEY

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(ALCHEMY_API_URL)

const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json")
// console.log(JSON.stringify(contract.abi))
const contractAddress = process.env.CONTRACT_ADDRESS;
const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

async function getBalance(walletId) {
  return nftContract.methods.balanceOf(walletId).call();
}

module.exports = { getBalance };
