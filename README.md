# Installation

- `chmod +x zksolc-macosx-arm64-v1.5.3`
- `./zksolc-macosx-arm64-v1.5.3 --combined-json abi,bin contracts/Paymaster.sol > artifacts/Paymaster.json`

- `node`
- creating random private key
- `require('crypto').randomBytes(32).toString('hex')` 
- parse the private key in deploy.js
- send some ETH to the wallet associated with the private key
- `node scripts/deploy.js`
- parse the paymaster contract address and the user private key in gasSponsor.js
- send some ETH to the paymaster address
- `node scripts/gasSponsor.js`


if the gasSponsor does not work anymore, you must transfer zkSync Sepolia eth to the paymaster address 
