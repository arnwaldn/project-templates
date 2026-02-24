import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { network } from "hardhat";
import { parseEther, getAddress } from "viem";

const { viem, networkHelpers } = await network.connect();

describe("Token", function () {
  async function deployTokenFixture() {
    const initialSupply = parseEther("1000000"); // 1M tokens
    const token = await viem.deployContract("Token", [
      "Test Token",
      "TEST",
      initialSupply,
    ]);

    const [owner, user1, user2] = await viem.getWalletClients();
    const publicClient = await viem.getPublicClient();

    return { token, owner, user1, user2, initialSupply, publicClient };
  }

  describe("Deployment", function () {
    it("Should set the right name and symbol", async function () {
      const { token } = await networkHelpers.loadFixture(deployTokenFixture);
      assert.equal(await token.read.name(), "Test Token");
      assert.equal(await token.read.symbol(), "TEST");
    });

    it("Should mint initial supply to owner", async function () {
      const { token, owner, initialSupply } = await networkHelpers.loadFixture(deployTokenFixture);
      const balance = await token.read.balanceOf([owner.account.address]);
      assert.equal(balance, initialSupply);
    });

    it("Should set the right owner", async function () {
      const { token, owner } = await networkHelpers.loadFixture(deployTokenFixture);
      const contractOwner = await token.read.owner();
      assert.equal(
        getAddress(contractOwner),
        getAddress(owner.account.address)
      );
    });
  });

  describe("Minting", function () {
    it("Should allow owner to mint", async function () {
      const { token, user1 } = await networkHelpers.loadFixture(deployTokenFixture);
      const mintAmount = parseEther("1000");

      await token.write.mint([user1.account.address, mintAmount]);
      const balance = await token.read.balanceOf([user1.account.address]);
      assert.equal(balance, mintAmount);
    });

    it("Should revert if non-owner tries to mint", async function () {
      const { token, user1, user2 } = await networkHelpers.loadFixture(deployTokenFixture);
      const mintAmount = parseEther("1000");

      await assert.rejects(
        async () =>
          token.write.mint([user2.account.address, mintAmount], {
            account: user1.account,
          }),
        /OwnableUnauthorizedAccount/
      );
    });
  });

  describe("Transfers", function () {
    it("Should transfer tokens between accounts", async function () {
      const { token, user1 } = await networkHelpers.loadFixture(deployTokenFixture);
      const transferAmount = parseEther("100");

      await token.write.transfer([user1.account.address, transferAmount]);
      const balance = await token.read.balanceOf([user1.account.address]);
      assert.equal(balance, transferAmount);
    });
  });

  describe("Pausing", function () {
    it("Should pause and unpause", async function () {
      const { token, user1 } = await networkHelpers.loadFixture(deployTokenFixture);

      await token.write.pause();
      assert.equal(await token.read.paused(), true);

      await assert.rejects(
        async () =>
          token.write.transfer([user1.account.address, parseEther("100")]),
        /EnforcedPause/
      );

      await token.write.unpause();
      assert.equal(await token.read.paused(), false);
    });
  });
});
