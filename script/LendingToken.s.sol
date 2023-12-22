// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.21;

import {Script} from "../lib/forge-std/src/Script.sol";
import {LendingToken} from "../src/LendingToken.sol";

/**
 *
 * TESTNET DEPLOYMENT: Ethereum Goerli
 *
 */

contract LendingTokenScript is Script {
    // contract(s) being deployed
    LendingToken token;

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        // deploy contract
        token = new LendingToken();

        vm.stopBroadcast();
    }
}

/**
 * TO DEPLOY:
 *
 * To load the variables in the .env file
 * > source .env
 *
 * To deploy and verify our contract
 * > forge script script/LendingToken.s.sol:LendingTokenScript --rpc-url $ETHEREUM_GOERLI_RPC_URL --broadcast -vvvv
 */
