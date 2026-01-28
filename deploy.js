const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  // 1. Deploy Staking Token (e.g., USDC)
  const MockToken = await hre.ethers.getContractFactory("MockToken");
  const stakingToken = await MockToken.deploy("Staking Token", "STK");
  await stakingToken.waitForDeployment();

  // 2. Deploy Reward Token (e.g., YIELD)
  const rewardToken = await MockToken.deploy("Reward Token", "RWD");
  await rewardToken.waitForDeployment();

  // 3. Deploy Staking Contract
  const Staking = await hre.ethers.getContractFactory("Staking");
  const stakingContract = await Staking.deploy(stakingToken.target, rewardToken.target);
  await stakingContract.waitForDeployment();

  console.log(`Staking Contract deployed to: ${stakingContract.target}`);
  console.log(`Staking Token: ${stakingToken.target}`);
  console.log(`Reward Token: ${rewardToken.target}`);

  // 4. Fund the Staking Contract with Rewards
  const rewardAmount = hre.ethers.parseEther("10000");
  await rewardToken.transfer(stakingContract.target, rewardAmount);
  console.log("Transferred rewards to staking contract");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
