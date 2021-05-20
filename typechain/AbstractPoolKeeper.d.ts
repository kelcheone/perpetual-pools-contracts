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

interface AbstractPoolKeeperInterface extends ethers.utils.Interface {
  functions: {
    "createMarket(string,address)": FunctionFragment;
    "createPool(string,string,uint32,uint32,uint16,uint16,address,address)": FunctionFragment;
    "oracleWrapper()": FunctionFragment;
    "pools(string)": FunctionFragment;
    "triggerPriceUpdate(string,string[])": FunctionFragment;
    "updateOracleWrapper(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createMarket",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createPool",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "oracleWrapper",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pools", values: [string]): string;
  encodeFunctionData(
    functionFragment: "triggerPriceUpdate",
    values: [string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "updateOracleWrapper",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "createMarket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "createPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "oracleWrapper",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pools", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "triggerPriceUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateOracleWrapper",
    data: BytesLike
  ): Result;

  events: {};
}

export class AbstractPoolKeeper extends BaseContract {
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

  interface: AbstractPoolKeeperInterface;

  functions: {
    createMarket(
      marketCode: string,
      oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createPool(
      marketCode: string,
      poolCode: string,
      updateInterval: BigNumberish,
      frontRunningInterval: BigNumberish,
      fee: BigNumberish,
      leverageAmount: BigNumberish,
      feeAddress: string,
      quoteToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    oracleWrapper(overrides?: CallOverrides): Promise<[string]>;

    pools(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    triggerPriceUpdate(
      marketCode: string,
      poolCodes: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateOracleWrapper(
      oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  createMarket(
    marketCode: string,
    oracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createPool(
    marketCode: string,
    poolCode: string,
    updateInterval: BigNumberish,
    frontRunningInterval: BigNumberish,
    fee: BigNumberish,
    leverageAmount: BigNumberish,
    feeAddress: string,
    quoteToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  oracleWrapper(overrides?: CallOverrides): Promise<string>;

  pools(arg0: string, overrides?: CallOverrides): Promise<string>;

  triggerPriceUpdate(
    marketCode: string,
    poolCodes: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateOracleWrapper(
    oracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createMarket(
      marketCode: string,
      oracle: string,
      overrides?: CallOverrides
    ): Promise<void>;

    createPool(
      marketCode: string,
      poolCode: string,
      updateInterval: BigNumberish,
      frontRunningInterval: BigNumberish,
      fee: BigNumberish,
      leverageAmount: BigNumberish,
      feeAddress: string,
      quoteToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    oracleWrapper(overrides?: CallOverrides): Promise<string>;

    pools(arg0: string, overrides?: CallOverrides): Promise<string>;

    triggerPriceUpdate(
      marketCode: string,
      poolCodes: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    updateOracleWrapper(
      oracle: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    createMarket(
      marketCode: string,
      oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createPool(
      marketCode: string,
      poolCode: string,
      updateInterval: BigNumberish,
      frontRunningInterval: BigNumberish,
      fee: BigNumberish,
      leverageAmount: BigNumberish,
      feeAddress: string,
      quoteToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    oracleWrapper(overrides?: CallOverrides): Promise<BigNumber>;

    pools(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    triggerPriceUpdate(
      marketCode: string,
      poolCodes: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateOracleWrapper(
      oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createMarket(
      marketCode: string,
      oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createPool(
      marketCode: string,
      poolCode: string,
      updateInterval: BigNumberish,
      frontRunningInterval: BigNumberish,
      fee: BigNumberish,
      leverageAmount: BigNumberish,
      feeAddress: string,
      quoteToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    oracleWrapper(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pools(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    triggerPriceUpdate(
      marketCode: string,
      poolCodes: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateOracleWrapper(
      oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
