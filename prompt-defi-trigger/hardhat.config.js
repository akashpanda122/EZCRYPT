require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const INFURA_API_KEY = process.env.INFURA_API_KEY;
const MUMBAI_PRIVATE_KEY = process.env.MUMBAI_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [MUMBAI_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
