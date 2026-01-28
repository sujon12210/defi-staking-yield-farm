# DeFi Staking & Yield Farming

This repository contains a robust Yield Farming contract. Users stake their assets (e.g., LP tokens or stablecoins) to earn a separate Rewards Token.

## Logic
The contract calculates rewards based on:
1. **Time**: How long tokens are staked.
2. **Amount**: The proportion of the pool owned by the user.
3. **Rate**: A fixed reward rate per second set by the owner.

## Features
- **Stake**: Deposit tokens into the contract.
- **Withdraw**: Remove staked tokens.
- **Get Reward**: Claim accumulated rewards without withdrawing stake.
- **Exit**: Withdraw stake and claim rewards in one transaction.

## Setup
1. Clone the repo.
2. Install dependencies:
   ```bash
   npm install
