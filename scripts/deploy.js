const { Provider, types, Wallet, ContractFactory } = require("zksync-ethers");
const PaymasterJson = require("../artifacts/Paymaster.json");

const { abi, bin: bytecode } =
  PaymasterJson.contracts["contracts/Paymaster.sol:Paymaster"];

const provider = Provider.getDefaultProvider(types.Network.Sepolia);

// private key generated using node -> require('crypto').randomBytes(32).toString('hex')
const wallet = new Wallet(
  "c850f1f3addd7ae8bcbb38910ea5180ef7b8b9c183008257b591b4bc76cfaa64", 
  provider
);

console.log(wallet.address);

(async () => {
  const cf = new ContractFactory(abi, bytecode, wallet);
  const result = await cf.deploy();
  const contract = await result.waitForDeployment();
  console.log(await contract.getAddress());
})();