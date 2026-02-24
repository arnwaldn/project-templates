import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { parseEther } from "viem";

export default buildModule("DeployModule", (m) => {
  const initialSupply = m.getParameter("initialSupply", parseEther("100000000"));

  const token = m.contract("Token", [
    "{{PROJECT_NAME}} Token",
    "{{TOKEN_SYMBOL}}",
    initialSupply,
  ]);

  const nft = m.contract("NFT", [
    "{{PROJECT_NAME}} NFT",
    "{{NFT_SYMBOL}}",
    "ipfs://hidden/",
    500n, // royalty: 5%
  ]);

  return { token, nft };
});
