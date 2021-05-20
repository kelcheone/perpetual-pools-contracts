/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  AbstractOracleWrapper,
  AbstractOracleWrapperInterface,
} from "../AbstractOracleWrapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "assetOracles",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "MarketCode",
        type: "string",
      },
    ],
    name: "getPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "marketCode",
        type: "string",
      },
      {
        internalType: "address",
        name: "oracle",
        type: "address",
      },
    ],
    name: "setOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class AbstractOracleWrapper__factory {
  static readonly abi = _abi;
  static createInterface(): AbstractOracleWrapperInterface {
    return new utils.Interface(_abi) as AbstractOracleWrapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AbstractOracleWrapper {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AbstractOracleWrapper;
  }
}
