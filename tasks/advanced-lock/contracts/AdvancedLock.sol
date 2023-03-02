// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

// 

contract AdvancedLock {
    event Lock(address indexed owner, address[] authorized, uint amount);
    event Withdrawal(address authorized, uint amount);
    event Ping(address indexed owner, uint32 time);

    uint public unlockTimeGap;

    constructor(uint _unlockTimeGap) {
        unlockTimeGap = _unlockTimeGap;
    }

    function lockForAuthorized(address[] memory _authorized) external payable {
        //emit Lock(msg.sender, _authorized, msg.value);
    }

    function ping() external {
        //emit Ping(msg.sender, uint32(funds.unlockTime));
    }

    function withdraw(address _stored) external {
        //emit Withdrawal(msg.sender, amount);
    }
}
