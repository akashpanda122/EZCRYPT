const hre = require("hardhat");
const networkConfig = require("../configNetwork.js");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const delay = 1000 * 20; //5s


async function main() {
  console.log(1);
  const [deployer] = await hre.ethers.getSigners();
  console.log(2);
  let factoryConfigs = networkConfig[hre.network.name];
  const SimpleTriggerFactory = await hre.ethers.getContractFactory(
    "SimpleTriggerFactory"
  );
  console.log(3)
  const simpleTriggerFactory = await SimpleTriggerFactory.deploy(factoryConfigs.link, factoryConfigs.registrar, factoryConfigs.uniswapRouter);
  console.log(3.5)
  await simpleTriggerFactory.waitForDeployment();
    console.log(4)
  console.log("SimpleTriggerFactory deployed to:", simpleTriggerFactory.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
