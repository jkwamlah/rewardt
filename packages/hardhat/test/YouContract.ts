import { expect } from "chai";
import { ethers } from "hardhat";
import { ClassReward } from "../typechain-types";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { getCurrentTimestamp } from "hardhat/internal/hardhat-network/provider/utils/getCurrentTimestamp";

describe("ClassReward", function () {
  // We define a fixture to reuse the same setup in every test.

  async function deployClassRewardFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner] = await ethers.getSigners();

    const ClassReward = await ethers.getContractFactory("ClassReward");
    const classReward = await ClassReward.deploy();

    return { classReward, owner };
  }

  describe("Deployment", () => {
    it("Should have owner address equal to signer address", async function () {
      const { classReward, owner } = await loadFixture(deployClassRewardFixture);
      expect(await classReward.signer.getAddress()).to.equal(owner.address);
    });

    it("Should have an empty list of programs", async function () {
      const { classReward } = await loadFixture(deployClassRewardFixture);
      const countPrograms = classReward.programs.length;
      expect(countPrograms).to.equal(0);
    });

    it("Should have an empty list of tasks", async function () {
      const { classReward } = await loadFixture(deployClassRewardFixture);
      const countTasks = classReward.tasks.length;
      expect(countTasks).to.equal(0);
    });
  });

  describe("Functions", () => {
    it("Should create a program and emit the ProgramCreated event", async function () {
      const { classReward, owner } = await loadFixture(deployClassRewardFixture);
      expect(await classReward.connect(owner).createProgram("Computer Science", "A very nice description"))
        .to.emit(classReward, "ProgramCreated")
        .withArgs(1, "Computer Science", owner.address, "A very nice description", getCurrentTimestamp(), []);
    });

    it("Should create a task and emit the TaskCreated event", async function () {
      const { classReward, owner } = await loadFixture(deployClassRewardFixture);

      const _program = await classReward.connect(owner).createProgram("Computer Science", "A very nice description");
      const tx = await classReward
        .connect(owner)
        .createTask(_program.id, "Build a new hardhat project", "Should build a new hardhat project");

      const taskCreatedEvent = (await tx.wait()).events.find((event: { event: string; }) => event.event === "TaskCreated");
      expect(taskCreatedEvent).to.exist;

      expect(taskCreatedEvent.args.programId).to.equal(0);
      expect(taskCreatedEvent.args.taskId).to.equal(1);
      expect(taskCreatedEvent.args.creator).to.equal(owner.address);
      expect(taskCreatedEvent.args.title).to.equal("Build a new hardhat project");
      expect(taskCreatedEvent.args.description).to.equal("Should build a new hardhat project");
    });
  });

  describe("Events", () => {
    it("Should have owner address equal to signer address", async function () {
      const { classReward, owner } = await loadFixture(deployClassRewardFixture);
      expect(await classReward.signer.getAddress()).to.equal(owner.address);
    });

    it("Should have an empty list of programs", async function () {
      const { classReward } = await loadFixture(deployClassRewardFixture);
      const countPrograms = classReward.programs.length;
      expect(countPrograms).to.equal(0);
    });

    it("Should have an empty list of tasks", async function () {
      const { classReward } = await loadFixture(deployClassRewardFixture);
      const countTasks = classReward.tasks.length;
      expect(countTasks).to.equal(0);
    });
  });
});
