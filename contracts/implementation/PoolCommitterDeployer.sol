//SPDX-License-Identifier: CC-BY-NC-ND-4.0
pragma solidity 0.8.7;

import "./PoolCommitter.sol";
import "../interfaces/IPoolCommitterDeployer.sol";

/// @title The deployer of the PoolCommitter contract
contract PoolCommitterDeployer is IPoolCommitterDeployer {
    address public factory;

    constructor(address _factory) {
        require(_factory != address(0), "Factory address cannot be null");
        factory = _factory;
    }

    function deploy(uint128 _minimumCommitSize, uint128 _maximumCommitQueueLength)
        external
        override
        onlyFactory
        returns (address)
    {
        return address(new PoolCommitter(factory, _minimumCommitSize, _maximumCommitQueueLength));
    }

    modifier onlyFactory() {
        require(msg.sender == factory, "msg.sender not factory");
        _;
    }
}
