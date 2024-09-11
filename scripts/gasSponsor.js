const { Provider, types, Wallet } = require("zksync-ethers");
const { getPaymasterParams } = require("zksync-ethers/build/paymaster-utils");

const provider = Provider.getDefaultProvider(types.Network.Sepolia);

const wallet = new Wallet(
  "c95f63fa4c87df6a177620847cd193b52733391d0792dce9972c855ec885b1fa", // <-- this private key does not need gas, as it will be sponsored
  provider
);

console.log(wallet.address);

const PAYMASTER = "0x43dAeFbc2b15d748eC4b215E451d80e5797a515A";

(async () => {
  const paymasterParams = getPaymasterParams(PAYMASTER, {
    type: "General",
    innerInput: new Uint8Array(),
  });

  const tx = await wallet.sendTransaction({
    data: "0x1337",
    to: "0xE41946FE836662a69B7adb7af657a1Db51Ebf193",
    customData: {
      paymasterParams,
    },
  });
  console.log(tx);
})();