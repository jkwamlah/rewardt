# Rewardt: ERC-1155 Student Rewards System

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Requirements](#requirements)
4. [Quickstart](#quickstart)
5. [Documentation](#usage)
7. [Contributing](#contributing)
8. [License](#license)

## Introduction
Rewardt is a student reward system built on Ethereum using ERC-1155 tokens. It enables facilitators/administrators to distribute rewards to students and allows students to manage their rewards. This README provides an overview of the project, its features, and instructions for getting started. To learn more about the project and its development approach, please follow the iterative approach [here](APPROACH.md).

## Features
- **ERC-1155 Tokens**: Manage fungible and non-fungible rewards using a single contract.
- **User Authentication**: Distinguish between facilitators/administrators and students.
- **Reward Distribution**: Facilitators/administrators can distribute rewards to students.
- **Token Balances**: Students can view their token balances for different reward types.
- **Token Transfers**: Students can transfer tokens to other students.
- **Access Control**: Ensure that only authorized users can perform specific actions.
- **Events and Notifications**: Emit events for reward distribution and transfers; implement notifications.
- **Security**: Follow best practices to secure smart contracts and user data.
- **Testing**: Use testing frameworks to ensure the reliability of the system.

## Requirements
- [Node (v18 LTS)](https://nodejs.org/en/download) or Higher
- Ethereum Wallet (Eg. [MetaMask](https://metamask.io/) or [RainbowKit](https://www.rainbowkit.com/docs/introduction) )
- Solidity Development Environment ([Truffle](https://trufflesuite.com/docs/truffle) or [Hardhat](https://hardhat.org/hardhat-runner/docs/getting-started#overview))
- [Yarn](https://yarnpkg.com/getting-started/install)
- [Git](https://git-scm.com/downloads)

## Quickstart
To get started with **Rewardt**, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/jkwamlah/rewardt.git
cd rewardt
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the contract component or the example ui in the frontend. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.


Run smart contract test with: 
```
yarn hardhat:test
```

Run smart contract coverage with: 
```
yarn hardhat:coverage --network hardhat
```

- Edit your smart contract `YourContract.sol` in `packages/hardhat/contracts`
- Edit your frontend in `packages/nextjs/pages`
- Edit your deployment scripts in `packages/hardhat/deploy`

## Documentation

This project is built on the **Scaffoldeth-2.** Visit the [docs](https://docs.scaffoldeth.io) to learn how to start building with Scaffold-ETH 2.

To know more about its features, check out our [website](https://scaffoldeth.io).

## Contributing to Scaffold-ETH 2

We welcome contributions to Scaffold-ETH 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-ETH 2.

## License
This project is licensed under the [MIT License](LICENSE).