const { task, types } = require('hardhat/config');

// Example: npx hardhat deploy
// npx hardhat deploy --network goerli
// npx hardhat deploy --network goerli --unlock-time-gap 3600
// npx hardhat verify --network goerli 0xA8B5d443E3443F48D2010348FCa0A768fd4a27De 3600
task('deploy', 'deploy advanced lock contract')
    .addParam("unlockTimeGap", 'Unlock Time Gap', '', types.string)
    .setAction(async ({unlockTimeGap},{ ethers }) => {
        const [signer] = await ethers.getSigners();

        const AdvancedLock = await ethers.getContractFactory("AdvancedLock");
        const contract = await AdvancedLock.deploy(unlockTimeGap);

        console.log("Contract deployed!");
        console.log(contract.address);
    });

module.exports = {};