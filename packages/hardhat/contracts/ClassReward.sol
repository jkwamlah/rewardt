// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

contract ClassReward is ERC1155, AccessControl, ERC1155Supply {
    bytes32 public constant URI_SETTER_ROLE = keccak256("URI_SETTER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    struct Task {
        uint256 id;
        string name;
        string criteria;
        uint256 timestamp;
    }

    struct Program {
        uint256 id;
        string name;
        address owner;
        string description;
        uint256 timestamp;
    }

    mapping(uint => Task[]) public tasks;
    mapping(address => Program[]) public programs;

    event ProgramCreated(uint256 indexed id, string name, address indexed owner, string description, uint256 indexed timestamp, Task[] tasks);
    event TaskCreated(uint256 indexed programId, uint256 indexed taskId, string name, string criteria, uint256 indexed timestamp);


    constructor() ERC1155("") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(URI_SETTER_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
    }

    function setURI(string memory newUri) public onlyRole(URI_SETTER_ROLE) {
        _setURI(newUri);
    }

    function createProgram(string memory _name, string memory _description) public {
        require(bytes(_name).length > 0 && bytes(_description).length > 0, "Name and description must not be empty");
        Program[] storage userPrograms = programs[msg.sender];
        for (uint256 i = 0; i < userPrograms.length; i++) {
            require(
                keccak256(bytes(userPrograms[i].name)) != keccak256(bytes(_name)),
                "Program with the same name already exists"
            );
        }

        uint256 programSize = userPrograms.length;
        uint256 programId = programSize + 1;
        uint256 timestamp = block.timestamp;
        Program memory _program = Program(programId, _name, msg.sender, _description, timestamp);
        userPrograms.push(_program);

        emit ProgramCreated(programId, _name, msg.sender, _description, timestamp, tasks[programId]);
    }

    function createTask(uint256 _programId, string memory _name, string memory _criteria) public {
        require(_programId < programs[msg.sender].length, "Program does not exist");
        uint256 taskId = tasks[_programId].length;
        uint256 timestamp = block.timestamp;

        Task memory _task = Task(taskId, _name, _criteria, timestamp);
        tasks[_programId].push(_task);
        emit TaskCreated(_programId, taskId, _name, _criteria, timestamp);
    }

    // Function to get the total number of programs
    function getProgramCount() public view returns (uint256) {
        return programs[msg.sender].length;
    }

    // Function to get program details by ID
    function getProgram(uint256 _programId) public view returns (
        uint256 id,
        string memory name,
        address owner,
        string memory description,
        uint256 timestamp,
        Task[] memory programTasks
    ){
        Program[] storage userPrograms = programs[msg.sender];
        require(_programId < userPrograms.length, "Program does not exist");
        Program storage program = userPrograms[_programId];
        Task[] storage _programTasks = tasks[_programId];

        return (program.id, program.name, program.owner, program.description, program.timestamp, _programTasks);
    }

    function getTask(uint256 _programId, uint256 _taskId) public view
    returns (uint256 id, string memory name, string memory criteria, uint256 timestamp)
    {
        require(_programId < programs[msg.sender].length, "Program does not exist");
        require(_taskId < tasks[_programId].length, "Task does not exist");
        Task storage _task = tasks[_programId][_taskId];
        return (_task.id, _task.name, _task.criteria, _task.timestamp);
    }

    function mint(address account, uint256 id, uint256 amount, bytes memory data) public onlyRole(MINTER_ROLE)
    {
        _mint(account, id, amount, data);
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data) public
    onlyRole(MINTER_ROLE)
    {
        _mintBatch(to, ids, amounts, data);
    }


    // The following functions are overrides required by Solidity.
    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
    internal
    override(ERC1155, ERC1155Supply)
    {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC1155, AccessControl) returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}