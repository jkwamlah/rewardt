// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

contract ClassReward is ERC1155, ERC1155Supply {

    struct Submission {
        string submissionUrl;
        uint256 timestamp;
        bool graded;
    }

    struct Task {
        uint256 id;
        string name;
        string criteria;
        uint256 score;
        uint category;
    }

    struct Program {
        uint256 id;
        string externalId;
        string name;
        address owner;
        string description;
        uint timestamp;
        string status;
    }

    struct Student {
        string name;
        address account;
    }

    modifier onlyProgramOwner(uint256 programId) {
        require(msg.sender == programs[programId].owner, "You are not authorized to view this data!");
        _;
    }

    modifier onlyProgramParticipants(uint256 programId) {
        Program memory _program = programs[programId];
        require(_program.id != 0, "Program does not exist");

        bool callerExist = false;
        Student[] memory _students = programStudents[programId];
        for (uint256 i = 0; i < _students.length; i++) {
            if (_students[i].account == msg.sender) {
                callerExist = true;
            }
        }

        require(callerExist, "Only program participants can perform this action");
        _;
    }

    modifier studentSubmissionExist(uint256 programId, uint256 taskId) {
        Submission storage submission = programTaskSubmissions[programId][taskId][msg.sender];
        require(submission.timestamp > 0, "No submission found for the student");
        _;
    }

    mapping(address => Program[]) public createdPrograms;
    mapping(uint256 => Program) public programs;
    mapping(string => Program) public programsByExternalId;
    mapping(uint256 => Student[]) public programStudents;
    mapping(address => Program[]) public joinedPrograms;
    mapping(address => Student) public students;
    mapping(uint => Task[]) public tasks;
    mapping(uint256 => mapping(uint256 => mapping(address => Submission))) public programTaskSubmissions;
    mapping(uint256 => mapping(uint256 => mapping(address => uint256))) public studentScores;
    mapping(address => mapping(uint256 => uint256)) public balances;

    event ProgramCreated(uint256 indexed id, string externalId, string name, address indexed owner, string description, uint256 indexed timestamp, string status);
    event ProgramJoined(uint256 indexed programId, address indexed student);
    event SubmissionMade(uint256 indexed programId, uint256 indexed taskId, address indexed student, string submissionUrl, uint256 timestamp);
    event SubmissionGraded(uint256 indexed programId, uint256 indexed taskId, address indexed student, uint256 score);
    event TaskCreated(uint256 indexed programId, uint256 indexed taskId, string name, string criteria, uint256 category);
    event StudentRegistered(uint256 indexed programId, address indexed student);

    constructor() ERC1155("") {
        createProgram(
            '64e7dc8fd0c22',
            'Getting Started on Rewardt',
            'This program offers some hands on education on how Rewardt works. Join to earn some rewards along the way'
        );

        createTask(1, "Create a simple task", "Should be able to create a simple task", 1);
        createTask(1, "Create another program", "Should be able to create a new program", 1);
    }

    function getBlockTimestamp() internal view returns (uint256) {
        return block.timestamp;
    }

    function createProgram(string memory _externalId, string memory _name, string memory _description) public returns (
        uint256 id,
        string memory externalId,
        string memory name,
        address owner,
        string memory description,
        uint256 timestamp,
        string memory status
    ){
        require(bytes(_externalId).length > 0, "Program Id cannot be empty");
        require(bytes(_name).length > 0, "Name cannot be empty");
        require(bytes(_description).length > 0, "Description cannot be empty");

        Program[] storage userPrograms = createdPrograms[msg.sender];
        for (uint256 i = 0; i < userPrograms.length; i++) {
            require(
                keccak256(bytes(userPrograms[i].name)) != keccak256(bytes(_name)), "Program with the same name already exists"
            );

            require(
                keccak256(bytes(userPrograms[i].externalId)) != keccak256(bytes(_externalId)), "Program with the same program Id already exists"
            );
        }

        uint256 programSize = userPrograms.length;
        uint256 programId = programSize + 1;
        timestamp = getBlockTimestamp();
        Program memory _program = Program(programId, _externalId, _name, msg.sender, _description, timestamp, "active");
        userPrograms.push(_program);

        programs[programId] = _program;
        programsByExternalId[_externalId] = _program;

        emit ProgramCreated(programId, _program.externalId, _program.name, msg.sender, _program.description, timestamp, _program.status);
        return (_program.id, _program.externalId, _program.name, _program.owner, _program.description, _program.timestamp, _program.status);
    }

    function getProgramTasks(uint256 _programId) public view onlyProgramOwner(_programId) returns (uint256 id, Task[] memory programTasks){
        Program storage _program = programs[_programId];
        require(_program.id != 0, "Program does not exist");
        Task[] storage _programTasks = tasks[_programId];

        return (_program.id, _programTasks);
    }

    function getProgramStudents(uint256 _programId) public view onlyProgramOwner(_programId) returns (Student[] memory _programStudents){
        Program storage _program = programs[_programId];
        require(_program.id != 0, "Program does not exist");
        Student[] storage _programStudents = programStudents[_programId];
        return _programStudents;
    }

    function join(string memory _programExternalId, string memory _name) public {
        Program storage _program = programsByExternalId[_programExternalId];
        require(_program.id != 0, "Program does not exist");
        require(_program.owner != msg.sender, "You cannot join as a participant!");
        require(bytes(_name).length > 0, "Legal name cannot be empty");

        bool isEnrolled = false;
        for (uint256 i = 0; i < programStudents[_program.id].length; i++) {
            if (programStudents[_program.id][i].account == msg.sender) {
                isEnrolled = true;
                break;
            }
        }
        require(!isEnrolled, "You are already enrolled in this program");

        joinedPrograms[msg.sender].push(_program);
        Student memory student = students[msg.sender];

        if (student.account != msg.sender) {
            Student memory _student = Student(_name, msg.sender);
            programStudents[_program.id].push(_student);
            students[msg.sender] = _student;
        } else {
            programStudents[_program.id].push(student);
            students[msg.sender] = student;
        }

        emit StudentRegistered(_program.id, msg.sender);
    }

    function createTask(uint256 _programId, string memory _name, string memory _criteria, uint256 _category) public onlyProgramOwner(_programId)
    returns (uint256 id, string memory name, string memory criteria, uint256 category)
    {
        Program memory _program = programs[_programId];
        require(_program.id != 0, "Program does not exist");
        Task[] storage programTasks = tasks[_programId];
        for (uint256 i = 0; i < programTasks.length; i++) {
            require(
                keccak256(bytes(programTasks[i].name)) != keccak256(bytes(_name)), "Task with the same name already exists"
            );
        }

        uint256 taskSize = tasks[_programId].length;
        uint256 taskId = taskSize + 1;

        Task memory _task = Task(taskId, _name, _criteria, 100, _category);
        tasks[_programId].push(_task);
        emit TaskCreated(_programId, taskId, _name, _criteria, _category);
        return (_task.id, _task.name, _task.criteria, _category);
    }

    function submitTask(uint256 _programId, uint256 taskId, string memory submissionUrl) public onlyProgramParticipants(_programId) {
        require(bytes(submissionUrl).length > 0, "Submission URL cannot be empty");

        programTaskSubmissions[_programId][taskId][msg.sender] = Submission(submissionUrl, getBlockTimestamp(), false);
        emit SubmissionMade(_programId, taskId, msg.sender, submissionUrl, getBlockTimestamp());
    }

    function getSubmission(uint256 programId, uint256 taskId) public studentSubmissionExist(programId, taskId) view returns (string memory, uint256) {
        Submission storage submission = programTaskSubmissions[programId][taskId][msg.sender];
        return (submission.submissionUrl, submission.timestamp);
    }

    function gradeSubmission(uint256 programId, uint256 taskId, address studentAddress, uint256 score) public onlyProgramOwner(programId) {
        require(tasks[programId].length > taskId, "Task does not exist");
        require(studentScores[programId][taskId][studentAddress] == 0, "Student has already been graded for this task");

        studentScores[programId][taskId][studentAddress] = score;

        if (score > 0) {
            _mint(studentAddress, 1, 100, "");
            balances[studentAddress][1] += score;
        }

        emit SubmissionGraded(programId, taskId, studentAddress, score);
    }

    function transferTokens(address to, uint256 tokenId, uint256 amount) public {
        require(to != address(0), "Invalid recipient address");
        require(bytes(students[msg.sender].name).length > 0, "Recipient account is not a student");
        require(balances[msg.sender][tokenId] >= amount, "Insufficient token balance");

        _safeTransferFrom(msg.sender, to, tokenId, amount, "");

        balances[msg.sender][tokenId] -= amount;
        balances[to][tokenId] += amount;
    }

    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
    internal
    override(ERC1155, ERC1155Supply)
    {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC1155) returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}