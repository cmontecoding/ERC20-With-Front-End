// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.21;

import {Test, console2} from "forge-std/Test.sol";
import {LendingToken} from "../src/LendingToken.sol";

contract StakingTokenTest is Test {
    LendingToken token;
    address user1;
    address user2;

    function setUp() public {
        user1 = address(0x1);
        user2 = address(0x2);
        token = new LendingToken();
    }

    function testMint() public {
        token.mint(user1, 10);
        assertEq(token.balanceOf(user1), 10);
    }

}