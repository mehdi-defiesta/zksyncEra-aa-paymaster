const { Provider, types, Wallet } = require("zksync-ethers");
const { getPaymasterParams } = require("zksync-ethers/build/paymaster-utils");

const provider = Provider.getDefaultProvider(types.Network.Sepolia);

const wallet = new Wallet(
  "c850f1f3addd7ae8bcbb38910ea5180ef7b8b9c183008257b591b4bc76cfaa64", // <-- this private key does not need gas, as it will be sponsored
  provider
);

console.log(wallet.address);

const PAYMASTER = "0x789A9b6cbd46EF5aBa007E6EACFc8DC6FE391aD9";

(async () => {
  const paymasterParams = getPaymasterParams(PAYMASTER, {
    type: "General",
    innerInput: new Uint8Array(),
  });

  const tx = await wallet.sendTransaction({
    data: "0x1337",
    to: "0x789A9b6CbD46ef5Aba007E6EAcfc8Dc6FE391aD0",
    customData: {
      paymasterParams,
    },
  });
  console.log(tx);
})();