require("dotenv").config()
const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL
const META_MASK_PUBLIC_KEY = process.env.META_MASK_PUBLIC_KEY;
const META_MASK_PRIVATE_KEY = process.env.META_MASK_PRIVATE_KEY;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(ALCHEMY_API_URL)

const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json")
// console.log(JSON.stringify(contract.abi))
const contractAddress = "0x8987bb7a21f29eada4e415af8a4be0fb23fa26a1"
const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

async function mintNFT(tokenURI) {
    const nonce = await web3.eth.getTransactionCount(META_MASK_PUBLIC_KEY, 'latest'); //get latest nonce

    //the transaction
    const tx = {
        'from': META_MASK_PUBLIC_KEY,
        'to': contractAddress,
        'nonce': nonce,
        'gas': 500000,
        'data': nftContract.methods.mintNFT(META_MASK_PUBLIC_KEY, tokenURI).encodeABI()
    };

    const signPromise = web3.eth.accounts.signTransaction(tx, META_MASK_PRIVATE_KEY);
    signPromise
        .then((signedTx) => {
            web3.eth.sendSignedTransaction(
                signedTx.rawTransaction,
                function (err, hash) {
                    if (!err) {
                        let success = "The hash of your transaction is: " +
                        + hash +
                        "\nCheck Alchemy's Mempool to view the status of your transaction!"
                        console.log(success)
                        return success
                    } else {
                        let error1 = "Something went wrong when submitting your transaction:" + err
                        console.log(error1)
                        return error1
                    }
                }
            )
        })
        .catch((err) => {
            console.log(" Promise failed:", err)
            return " Promise failed: " + err
        });
}

function hello() {
    return "hello"
}

module.exports = { mintNFT, hello };
