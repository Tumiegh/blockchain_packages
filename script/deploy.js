const hre = require("hardhat");

async function main() {
  console.log("Deploying <CONTRACT_DISPLAY_NAME> contract..."); 
  // 🔁 CHANGE <CONTRACT_DISPLAY_NAME> to something readable for logs

  // ================================
  // 🔁 CHANGE THIS TO YOUR CONTRACT NAME
  // Must match the Solidity contract name exactly
  // ================================
  const CONTRACT_NAME = "<YOUR_CONTRACT_NAME>"; 

  const ContractFactory = await hre.ethers.getContractFactory(CONTRACT_NAME);
  
  // ================================
  // 🔁 IF YOUR CONTRACT HAS CONSTRUCTOR ARGUMENTS,
  // put them inside deploy(...) below
  // Example: deploy(arg1, arg2)
  // ================================
  const deployedContract = await ContractFactory.deploy(/* <CONSTRUCTOR_ARGS> */);
  
  await deployedContract.waitForDeployment();
  
  const address = await deployedContract.getAddress();

  console.log(`<CONTRACT_DISPLAY_NAME> deployed to: ${address}`);
  // 🔁 Optional: log constructor values here if needed
  
  return address;
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
  });