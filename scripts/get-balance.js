//index.js

require("dotenv").config()

const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL
const META_MASK_PUBLIC_KEY = process.env.META_MASK_PUBLIC_KEY

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(ALCHEMY_API_URL)

const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json")
// console.log(JSON.stringify(contract.abi))
const contractAddress = "0x8987bb7a21f29eada4e415af8a4be0fb23fa26a1"
const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

async function getBalance() { // 29803630997051883414242659

  // try {
  //   const result = await nftContract.methods.balanceOf(META_MASK_PUBLIC_KEY).call();
  //   return result
  // } catch (e) {
  //   console.log(e);
  // }

  const result = nftContract.methods.balanceOf(META_MASK_PUBLIC_KEY).call();



  let val = 0
  //
  result
      .then((res) => {
        console.log(res)
        val = res
      })
      .catch((err) => {
          console.log(" Promise failed:", err)
      });

   return val

}

module.exports = { getBalance };
