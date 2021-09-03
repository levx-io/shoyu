/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DutchAuction, DutchAuctionInterface } from "../DutchAuction";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0x5cc2c82b",
        type: "bytes32",
      },
    ],
    name: "c_0x5cc2c82b",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "canBid",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "bidPrice",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "canClaim",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610b15806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80635c5c0141146100465780635f11a72b146100625780636511995114610092575b600080fd5b610060600480360381019061005b9190610614565b6100c2565b005b61007c6004803603810190610077919061063d565b6100c5565b6040516100899190610797565b60405180910390f35b6100ac60048036038101906100a7919061063d565b61015a565b6040516100b99190610797565b60405180910390f35b50565b60006100f37f2118e5233f9272470c2a0ba0dd7eaef1af0fddd7e5c17e7ecb035284a7ba11d360001b6100c2565b61011f7f8096d7949b9433c0ed5c7b8216f0a2321b22a1a45131dd077ddbf7dacdeeb9fb60001b6100c2565b61014b7ff96a2a80afa2a565ea9c4c476573f6d8b1b612b07f6b46092a23e5bf18ce285760001b6100c2565b60009050979650505050505050565b60006101887f7b53802ec93fc16e6bacbdc3df5d64fffa9e574ba8b3aec498c549e3b27cebf860001b6100c2565b6101b47fb05554981769f985aa9e9a1bd69562a275d2e1a101af735d893987d01a4d3d4b60001b6100c2565b6101e07fa30ef9c5a1b8a0b5b89fe62f995d7c6cda52a88f3990bb0ce664373ed504ef1260001b6100c2565b6000806000898060200190518101906101f991906106f3565b92509250925061022b7f2ad8272df2bc236dac24154893d6f91ad557ce4302b0a4012f626cb6dbcf27ce60001b6100c2565b6102577fa105a2df79ab688b606ac0ba3958486ba4e9f55dcf13276c7d5ba100faed1ad260001b6100c2565b6102837faf95c77fdc46a0b992be0b9df355da3bdcf4aeb9dcf2dd58bd6d0f762d72aad160001b6100c2565b8183116102c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102bc906107d2565b60405180910390fd5b6102f07e3f0680a5e0c9b900c5d6bcc1c4c799bac1d4716dfd04a9498c898b8d7040e860001b6100c2565b61031c7fd3d06738fa95f03f1c656eb36c5fe3528c04246420834de8f1f46fa405e3723060001b6100c2565b6103487f15f1ee943b08ea7ed28b77be25eea7a4228440b5a71ea89fb49d6d2b0fe1298460001b6100c2565b6103747f74a441660637755571b2771921c11bd70d3d5c4decd708535931212766e470b160001b6100c2565b8a81106103b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ad906107b2565b60405180910390fd5b6103e27f5f33d95d3b290952ba772b7def3f7c651386c18a942af682a8b24d5ce7b6dc7860001b6100c2565b61040e7fb33e65e6ec89993a24049340d819238a3ee67d4d78d7aea58c3e66aed9523c2a60001b6100c2565b61043a7f23545e494832c1aaf1ff987d6b1d78be13137b795fa4b69d2b1601980040b6a860001b6100c2565b6000818c61044891906108e4565b838561045491906108e4565b61045e9190610859565b905061048c7f6efab9779b9013530e44ed0d2e4fcd961fbd1947d187efcfb201e0a411855e6360001b6100c2565b6104b87f2d16d57610045d41d1ae4763dc898e20cb11d51507fd03a2fbd94e266d1c975d60001b6100c2565b60008183436104c791906108e4565b6104d1919061088a565b856104dc91906108e4565b905061050a7f6979b87320bfd6a3c6b4289ac39851d5690d2e6a133575fcc555a12832878f2460001b6100c2565b6105367ff457eb30a32566ce3f183273eee3ec5879c20e400f996a792a1ec6188d66b72d60001b6100c2565b8c43111580156105465750808a10155b95505050505050979650505050505050565b600061056b61056684610817565b6107f2565b90508281526020810184848401111561058357600080fd5b61058e84828561096a565b509392505050565b6000813590506105a581610a9a565b92915050565b6000813590506105ba81610ab1565b92915050565b600082601f8301126105d157600080fd5b81356105e1848260208601610558565b91505092915050565b6000813590506105f981610ac8565b92915050565b60008151905061060e81610ac8565b92915050565b60006020828403121561062657600080fd5b6000610634848285016105ab565b91505092915050565b600080600080600080600060e0888a03121561065857600080fd5b60006106668a828b016105ea565b975050602088013567ffffffffffffffff81111561068357600080fd5b61068f8a828b016105c0565b96505060406106a08a828b01610596565b95505060606106b18a828b016105ea565b94505060806106c28a828b01610596565b93505060a06106d38a828b016105ea565b92505060c06106e48a828b016105ea565b91505092959891949750929550565b60008060006060848603121561070857600080fd5b6000610716868287016105ff565b9350506020610727868287016105ff565b9250506040610738868287016105ff565b9150509250925092565b61074b8161092a565b82525050565b600061075e601a83610848565b915061076982610a48565b602082019050919050565b6000610781601a83610848565b915061078c82610a71565b602082019050919050565b60006020820190506107ac6000830184610742565b92915050565b600060208201905081810360008301526107cb81610751565b9050919050565b600060208201905081810360008301526107eb81610774565b9050919050565b60006107fc61080d565b90506108088282610979565b919050565b6000604051905090565b600067ffffffffffffffff82111561083257610831610a08565b5b61083b82610a37565b9050602081019050919050565b600082825260208201905092915050565b600061086482610960565b915061086f83610960565b92508261087f5761087e6109d9565b5b828204905092915050565b600061089582610960565b91506108a083610960565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156108d9576108d86109aa565b5b828202905092915050565b60006108ef82610960565b91506108fa83610960565b92508282101561090d5761090c6109aa565b5b828203905092915050565b600061092382610940565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b61098282610a37565b810181811067ffffffffffffffff821117156109a1576109a0610a08565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f53484f59553a20494e56414c49445f53544152545f424c4f434b000000000000600082015250565b7f53484f59553a20494e56414c49445f50524943455f52414e4745000000000000600082015250565b610aa381610918565b8114610aae57600080fd5b50565b610aba81610936565b8114610ac557600080fd5b50565b610ad181610960565b8114610adc57600080fd5b5056fea264697066735822122087361f6399df89ea8947c1279e05bd9a10843383b2e96a363c2303ea9d9c464764736f6c63430008030033";

export class DutchAuction__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DutchAuction> {
    return super.deploy(overrides || {}) as Promise<DutchAuction>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DutchAuction {
    return super.attach(address) as DutchAuction;
  }
  connect(signer: Signer): DutchAuction__factory {
    return super.connect(signer) as DutchAuction__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DutchAuctionInterface {
    return new utils.Interface(_abi) as DutchAuctionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DutchAuction {
    return new Contract(address, _abi, signerOrProvider) as DutchAuction;
  }
}
