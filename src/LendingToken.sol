// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.21;

import {ERC20} from "openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract LendingToken is ERC20 {
    constructor() ERC20("LendingToken", "LTKN") {}

    function mint(address to, uint256 _amount) public {
        _mint(to, _amount);
    }
}
