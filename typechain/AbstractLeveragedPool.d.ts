/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface AbstractLeveragedPoolInterface extends ethers.utils.Interface {
  functions: {
    "commit(bytes2,uint256,uint256)": FunctionFragment;
    "commits(uint256)": FunctionFragment;
    "executeCommitment(uint256[])": FunctionFragment;
    "executePriceChange(uint256)": FunctionFragment;
    "fee()": FunctionFragment;
    "feeAddress()": FunctionFragment;
    "frontRunningInterval()": FunctionFragment;
    "lastPrice()": FunctionFragment;
    "lastPriceTimestamp()": FunctionFragment;
    "leverageAmount()": FunctionFragment;
    "longBalance()": FunctionFragment;
    "quoteToken()": FunctionFragment;
    "shadowLongBalance()": FunctionFragment;
    "shadowShortBalance()": FunctionFragment;
    "shortBalance()": FunctionFragment;
    "tokens(uint256)": FunctionFragment;
    "uncommit(uint256)": FunctionFragment;
    "updateFeeAddress(address)": FunctionFragment;
    "updateInterval()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "commit",
    values: [BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "commits",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executeCommitment",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "executePriceChange",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "frontRunningInterval",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "lastPrice", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lastPriceTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "leverageAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "longBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "quoteToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "shadowLongBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "shadowShortBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "shortBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "uncommit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateFeeAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateInterval",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "commit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "commits", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeCommitment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executePriceChange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeAddress", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "frontRunningInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lastPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastPriceTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "leverageAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "longBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "quoteToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "shadowLongBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shadowShortBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shortBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokens", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "uncommit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateFeeAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateInterval",
    data: BytesLike
  ): Result;

  events: {};
}

export class AbstractLeveragedPool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: AbstractLeveragedPoolInterface;

  functions: {
    commit(
      commitType: BytesLike,
      maxImbalance: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    commits(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, string] & {
        created: BigNumber;
        amount: BigNumber;
        maxImbalance: BigNumber;
        owner: string;
        commitType: string;
      }
    >;

    executeCommitment(
      commitID: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executePriceChange(
      endPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fee(overrides?: CallOverrides): Promise<[number]>;

    feeAddress(overrides?: CallOverrides): Promise<[string]>;

    frontRunningInterval(overrides?: CallOverrides): Promise<[number]>;

    lastPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastPriceTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    leverageAmount(overrides?: CallOverrides): Promise<[number]>;

    longBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    quoteToken(overrides?: CallOverrides): Promise<[string]>;

    shadowLongBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    shadowShortBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    shortBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    tokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    uncommit(
      commitID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateFeeAddress(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateInterval(overrides?: CallOverrides): Promise<[number]>;
  };

  commit(
    commitType: BytesLike,
    maxImbalance: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  commits(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, string, string] & {
      created: BigNumber;
      amount: BigNumber;
      maxImbalance: BigNumber;
      owner: string;
      commitType: string;
    }
  >;

  executeCommitment(
    commitID: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executePriceChange(
    endPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fee(overrides?: CallOverrides): Promise<number>;

  feeAddress(overrides?: CallOverrides): Promise<string>;

  frontRunningInterval(overrides?: CallOverrides): Promise<number>;

  lastPrice(overrides?: CallOverrides): Promise<BigNumber>;

  lastPriceTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  leverageAmount(overrides?: CallOverrides): Promise<number>;

  longBalance(overrides?: CallOverrides): Promise<BigNumber>;

  quoteToken(overrides?: CallOverrides): Promise<string>;

  shadowLongBalance(overrides?: CallOverrides): Promise<BigNumber>;

  shadowShortBalance(overrides?: CallOverrides): Promise<BigNumber>;

  shortBalance(overrides?: CallOverrides): Promise<BigNumber>;

  tokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  uncommit(
    commitID: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateFeeAddress(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateInterval(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    commit(
      commitType: BytesLike,
      maxImbalance: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    commits(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, string] & {
        created: BigNumber;
        amount: BigNumber;
        maxImbalance: BigNumber;
        owner: string;
        commitType: string;
      }
    >;

    executeCommitment(
      commitID: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    executePriceChange(
      endPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    fee(overrides?: CallOverrides): Promise<number>;

    feeAddress(overrides?: CallOverrides): Promise<string>;

    frontRunningInterval(overrides?: CallOverrides): Promise<number>;

    lastPrice(overrides?: CallOverrides): Promise<BigNumber>;

    lastPriceTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    leverageAmount(overrides?: CallOverrides): Promise<number>;

    longBalance(overrides?: CallOverrides): Promise<BigNumber>;

    quoteToken(overrides?: CallOverrides): Promise<string>;

    shadowLongBalance(overrides?: CallOverrides): Promise<BigNumber>;

    shadowShortBalance(overrides?: CallOverrides): Promise<BigNumber>;

    shortBalance(overrides?: CallOverrides): Promise<BigNumber>;

    tokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    uncommit(commitID: BigNumberish, overrides?: CallOverrides): Promise<void>;

    updateFeeAddress(account: string, overrides?: CallOverrides): Promise<void>;

    updateInterval(overrides?: CallOverrides): Promise<number>;
  };

  filters: {};

  estimateGas: {
    commit(
      commitType: BytesLike,
      maxImbalance: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    commits(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    executeCommitment(
      commitID: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executePriceChange(
      endPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    feeAddress(overrides?: CallOverrides): Promise<BigNumber>;

    frontRunningInterval(overrides?: CallOverrides): Promise<BigNumber>;

    lastPrice(overrides?: CallOverrides): Promise<BigNumber>;

    lastPriceTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    leverageAmount(overrides?: CallOverrides): Promise<BigNumber>;

    longBalance(overrides?: CallOverrides): Promise<BigNumber>;

    quoteToken(overrides?: CallOverrides): Promise<BigNumber>;

    shadowLongBalance(overrides?: CallOverrides): Promise<BigNumber>;

    shadowShortBalance(overrides?: CallOverrides): Promise<BigNumber>;

    shortBalance(overrides?: CallOverrides): Promise<BigNumber>;

    tokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    uncommit(
      commitID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateFeeAddress(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateInterval(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    commit(
      commitType: BytesLike,
      maxImbalance: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    commits(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    executeCommitment(
      commitID: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executePriceChange(
      endPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    frontRunningInterval(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastPriceTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    leverageAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    longBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    quoteToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    shadowLongBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    shadowShortBalance(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    shortBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    uncommit(
      commitID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateFeeAddress(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateInterval(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
