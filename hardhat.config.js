require("@nomiclabs/hardhat-waffle");
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()

const projectId = "428b4e1d12f745ba8c70958eed7d25c7"
const mainnetId = "428b4e1d12f745ba8c70958eed7d25c7"
module.exports = {
  networks: {
      hardhat: {
        chainId: 1337
      },
      mumbai: {
        url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
        accounts: [privateKey]
      },
      mainnet: {
        url: `https://polygon-mainnet.infura.io/v3/${mainnetId}`,
        accounts: [privateKey]
      }
  },
  solidity: "0.8.4",
};
