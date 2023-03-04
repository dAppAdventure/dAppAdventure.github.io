const {
    time,
    loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");

const { expect } = require('chai');
const { BigNumber } = require('ethers');

describe('CrowdFund', function () {
    async function deployFixture() {
        var initialHolder;
        var anotherAccount;
        var contract;

        [initialHolder, recipient, anotherAccount] = await ethers.getSigners();
        const CrowdFund = await ethers.getContractFactory("CrowdFund");
        contract = await CrowdFund.deploy();

        const NEINTY_DAYS = 90 * 24 * 60 * 60;
        const ONE_GWEI = 1_000_000_000;
        const goal = BigNumber.from(ONE_GWEI);
        var startTime = await time.latest() + 60;
        var endTime = startTime + NEINTY_DAYS;
        const id = BigNumber.from(1);
        await time.setNextBlockTimestamp(startTime);

        return { contract, initialHolder, anotherAccount, goal, id, startTime, endTime };
    }

    describe("Launch", function () {
        it('Should emit event', async function () {
            var { contract, initialHolder, anotherAccount, goal, id, startTime, endTime } = await loadFixture(deployFixture);
            await expect(contract.launch(goal, startTime, endTime))
                .to
                .emit(contract, 'Launch')
                .withArgs(
                    id,
                    initialHolder.address,
                    goal,
                    startTime,
                    endTime
                );
        });
    });

    describe("Pledge", function () {
        it('Should emit event', async function () {
            var { contract, initialHolder, anotherAccount, goal, id, startTime, endTime } = await loadFixture(deployFixture);
            await contract.launch(goal, startTime, endTime);

            await expect(contract.connect(anotherAccount)
                .pledge(id, { value: goal }))
                .to
                .emit(contract, 'Pledge')
                .withArgs(id, anotherAccount.address, goal);
        });
    });

    describe("Unpledge", function () {
        it('Should emit event', async function () {
            var { contract, initialHolder, anotherAccount, goal, id, startTime, endTime } = await loadFixture(deployFixture);
            await contract.launch(goal, startTime, endTime);
            await expect(contract.connect(anotherAccount).pledge(id, { value: goal }));
            await expect(contract.connect(anotherAccount)
                .unpledge(id, goal))
                .to
                .emit(contract, 'Unpledge')
                .withArgs(id, anotherAccount.address, goal);
        });
    });

    describe("Claim", function () {
        it('Should emit event', async function () {
            var { contract, initialHolder, anotherAccount, goal, id, startTime, endTime } = await loadFixture(deployFixture);
            await contract.launch(goal, startTime, endTime);
            await expect(contract.connect(anotherAccount).pledge(id, { value: goal }));
            await time.setNextBlockTimestamp(endTime);
            await expect(contract.claim(id))
                .to
                .emit(contract, 'Claim')
                .withArgs(id);
        });
    });

    describe("Refund", function () {
        it('Should emit event', async function () {
            var { contract, initialHolder, anotherAccount, goal, id, startTime, endTime } = await loadFixture(deployFixture);
            await contract.launch(goal, startTime, endTime);
            await expect(contract.connect(anotherAccount).pledge(id, { value: goal-1 }));
            await time.setNextBlockTimestamp(endTime);
            await expect(contract.connect(anotherAccount)
                .refund(id))
                .to
                .emit(contract, 'Refund')
                .withArgs(id, anotherAccount.address, goal-1);
        });
    });

    describe("Cancel", function () {
        it('Should emit event', async function () {
            var { contract, initialHolder, anotherAccount, goal, id, startTime, endTime } = await loadFixture(deployFixture);
            await contract.launch(goal, startTime+100, endTime);
            await expect(contract.cancel(id))
                .to
                .emit(contract, 'Cancel')
                .withArgs(id);
        });
    });
});
