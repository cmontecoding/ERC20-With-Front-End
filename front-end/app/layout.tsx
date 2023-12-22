import { useEffect, useState } from "react";
import Web3 from "web3";
import { Contract } from "web3-eth-contract";

const [contract, setContract] = useState<any>(null);

declare global {
  interface Window {
    ethereum: any;
  }
}
// Define the AbiItem type
type AbiItem = {
  constant?: boolean;
  inputs: { name: string; type: string }[];
  name: string;
  outputs?: any[];
  payable?: boolean;
  stateMutability?: "nonpayable" | "payable" | "pure" | "view";
  type: string;
  anonymous?: boolean;
};

// Replace with your contract's ABI
const contractAbi: AbiItem[] = [
  {
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    stateMutability: "nonpayable",
    type: "function",
  },
];

// Replace with your contract's address
const contractAddress = "0xee392627cB20Cc3fA91A02D1117105e6C4d4bdf6";

export default function MintPage() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.ethereum) {
      const web3 = new Web3(window.ethereum);
      web3.eth.getAccounts().then((accounts) => {
        setAccount(accounts[0]);
      });

      const contractInstance = new web3.eth.Contract(
        contractAbi,
        contractAddress
      );
      setContract(contractInstance);
    }
  }, []);

  const mintTokens = async () => {
    if (contract) {
      // Replace with the amount of tokens you want to mint
      const amount = web3.utils.toWei("1", "ether");

      await contract.methods.mint(account, amount).send({ from: account });
    }
  };

  return (
    <div>
      <button onClick={mintTokens}>Mint Tokens</button>
    </div>
  );
}
