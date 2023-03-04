// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract CrowdFund {
    event Launch(
        uint id,
        address indexed creator,
        uint goal,
        uint32 startAt,
        uint32 endAt
    );
    event Cancel(uint id);
    event Pledge(uint indexed id, address indexed caller, uint amount);
    event Unpledge(uint indexed id, address indexed caller, uint amount);
    event Claim(uint id);
    event Refund(uint id, address indexed caller, uint amount);

    constructor() {
    }

    function launch(uint _goal, uint32 _startAt, uint32 _endAt) external {
        //emit Launch(count, msg.sender, _goal, _startAt, _endAt);
    }

    function cancel(uint _id) external {
       //emit Cancel(_id);
    }

    function pledge(uint _id) external payable {
       //emit Pledge(_id, msg.sender, amount);
    }

    function unpledge(uint _id, uint _amount) external {
        //emit Unpledge(_id, msg.sender, _amount);
    }

    function claim(uint _id) external {
       //emit Claim(_id);
    }

    function refund(uint _id) external {
        //emit Refund(_id, msg.sender, bal);
    }
}