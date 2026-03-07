# Blockchain
## Hardhat Workflow (Ethers v6)

### 1. Initialize project
```bash
npx hardhat --init
```

Notes:
- Use `npx hardhat` for interactive project setup.
- Then install dependencies with `npm install`.

### 2. Compile contracts
```bash
npx hardhat compile
```

### 3. Run tests
```bash
npx hardhat test
```

### 4. Start local blockchain
```bash
npx hardhat node
```

Keep this running in Terminal 1.

### 5. Deploy to localhost
```bash
npx hardhat run script/deploy.js --network localhost
```

### 6. Open console on localhost
```bash
npx hardhat console --network localhost
```

Example interaction:
```js
const MyContract = await ethers.getContractFactory("MyContract");
const contract = await MyContract.attach("<DEPLOYED_ADDRESS>");
await contract.someFunction();
```

### 7. Check chain state
```js
await ethers.provider.getBlockNumber();
await ethers.provider.getBlock("latest");
await ethers.provider.getBlock(1, true);
await ethers.provider.getTransaction("TX_HASH");
await ethers.provider.getTransactionReceipt("TX_HASH");
await ethers.provider.getStorage(await contract.getAddress(), 0);
```

### 8. Get signers
```js
const [owner, user] = await ethers.getSigners();
```

### 9. Check addresses
```js
owner.address;
user.address;
```

### 10. Check balance (wei)
```js
await ethers.provider.getBalance(owner.address);
```

## Ethers v6 notes (important)

- Use `await contract.getAddress()` instead of `contract.address`.
- Many numeric values are now `bigint`.
- Format wei values with:
```js
ethers.formatEther(balance);
```
- In deploy scripts, prefer:
```js
await contract.waitForDeployment();
```

## OpenZeppelin upgradeable packages

Install:
```bash
npm install @openzeppelin/contracts-upgradeable
npm install --save-dev @openzeppelin/hardhat-upgrades
```

Why `contracts-upgradeable`:
- Upgradeable contracts use initializer functions instead of constructors.
