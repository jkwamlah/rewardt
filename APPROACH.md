# RewardX: ERC-1155 Student Rewards System

## Approach

This section describes the approach that the developer [jkwamlah](https://github.com/jkwamlah) will follow to execute the project. It will also serve as a spec documentation for later reference.

## Table of Contents
1. [Getting Started](#getting-started)
   - [Smart Contracts](#smart-contracts)
   - [Frontend](#frontend)
2. [Usage](#usage)
   - [Teachers/Administrators](#teachersadministrators)
   - [Students](#students)
3. [Development and Testing](#development-and-testing)
4. [README](#readme)
5. [License](#license)


## Getting Started
### Smart Contracts
1. Deploy the ERC-1155 token contract on an Ethereum network.
2. Implement access control and configure authorized users (facilitators/administrators).
3. Define reward types and quantities.

### Frontend
1. Set up the React frontend.
2. Implement user authentication and differentiate between facilitator and student views.
3. Create dashboards for facilitators/administrators and students.
4. Integrate with the deployed ERC-1155 contract to:
   - Distribute rewards (facilitators/administrators).
   - Display token balances.
   - Allow token transfers.

## Usage
### Facilitators/Administrators
- Log in with your Ethereum wallet.
- Access the facilitator/administrator dashboard.
- Distribute rewards to students by specifying token type and quantity.
- View a list of students and their token balances.

### Students
- Log in with your Ethereum wallet.
- Access the student dashboard.
- View your token balances for different reward types.
- Transfer tokens to other students.

## Development and Testing
- Use Hardhat or other tools for smart contract development and testing.
- Ensure security best practices are followed in both contracts and frontend components.

### Optional
- Employ Jest, React Testing Library, or similar tools for frontend testing.

## README
Go to [README.md](README.md)