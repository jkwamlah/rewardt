// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Reward is ERC1155, Ownable {
    // Mapping to track the type of rewards (fungible/non-fungible) associated with each token ID
    mapping(uint256 => bool) private isNonFungible;

    // Mapping to store token balances of students
    mapping(address => mapping(uint256 => uint256)) private balances;

    // Events for reward distribution and transfers
    event RewardDistributed(address indexed facilitator, address indexed student, uint256 indexed tokenId, uint256 amount);
    event TokensTransferred(address indexed from, address indexed to, uint256 indexed tokenId, uint256 amount);

    constructor() ERC1155("URI") {
        // Initialize contract with a base URI for token metadata
    }

    // Function to mint both fungible and non-fungible tokens
    function mint(
        address account,
        uint256 tokenId,
        uint256 amount,
        bytes memory data
    ) external onlyOwner {
        // Mint fungible tokens
        if (!isNonFungible[tokenId]) {
            _mint(account, tokenId, amount, data);
        }
        // Mint non-fungible tokens
        else {
            _mint(account, tokenId, 1, data);
        }
    }

    // Function to set the base URI for token metadata
    function setBaseURI(string memory newBaseURI) external onlyOwner {
        _setURI(newBaseURI);
    }

    // Function to mark a token as non-fungible
    function setNonFungible(uint256 tokenId) external onlyOwner {
        isNonFungible[tokenId] = true;
    }

    // Function to distribute rewards to students
    function distributeReward(
        address student,
        uint256 tokenId,
        uint256 amount
    ) external onlyOwner {
        require(balances[student][tokenId] > 0, "Student does not own this token");
        safeTransferFrom(owner(), student, tokenId, amount, "");
        emit RewardDistributed(owner(), student, tokenId, amount);
    }

    // Function to get the balance of a student for a specific reward type
    function getBalance(address student, uint256 tokenId) external view returns (uint256) {
        return balances[student][tokenId];
    }

    // Function to allow students to transfer tokens to other students
    function transferTokens(
        address to,
        uint256 tokenId,
        uint256 amount
    ) external {
        require(to != address(0), "Invalid recipient address");
        require(balances[msg.sender][tokenId] >= amount, "Insufficient balance");
        safeTransferFrom(msg.sender, to, tokenId, amount, "");
        emit TokensTransferred(msg.sender, to, tokenId, amount);
    }
}
