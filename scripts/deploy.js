const { Provider, types, Wallet, ContractFactory } = require("zksync-ethers");
const PaymasterJson = require("../artifacts/Paymaster.json");

const { abi, bin: bytecode } =
  PaymasterJson.contracts["contracts/Paymaster.sol:Paymaster"];

const provider = Provider.getDefaultProvider(types.Network.Sepolia);

// private key generated using node -> require('crypto').randomBytes(32).toString('hex')
const wallet = new Wallet(
  "c95f63fa4c87df6a177620847cd193b52733391d0792dce9972c855ec885b1fa", 
  provider
);

console.log(wallet.address);

(async () => {
  const cf = new ContractFactory(abi, bytecode, wallet);
  const result = await cf.deploy();
  const contract = await result.waitForDeployment();
  console.log(await contract.getAddress());
})();