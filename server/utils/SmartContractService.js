const { ethers } = require('ethers');

class SmartContractService {
  constructor() {
    this.provider = new ethers.JsonRpcProvider(process.env.OPNET_RPC_URL);
    this.wallet = null;
    this.factoryContract = null;
    this.launchpadContract = null;
  }

  async initialize(privateKey) {
    try {
      this.wallet = new ethers.Wallet(privateKey, this.provider);
      console.log('✓ Wallet initialized:', this.wallet.address);
      await this.setupContracts();
    } catch (error) {
      throw new Error(`Failed to initialize wallet: ${error.message}`);
    }
  }

  async setupContracts() {
    const factoryABI = require('./abis/LaunchpadFactory.json');
    const launchpadABI = require('./abis/Launchpad.json');

    this.factoryContract = new ethers.Contract(
      process.env.FACTORY_CONTRACT_ADDRESS,
      factoryABI,
      this.wallet
    );

    this.launchpadContract = new ethers.Contract(
      process.env.LAUNCHPAD_CONTRACT_ADDRESS,
      launchpadABI,
      this.wallet
    );
  }

  async deployTokenLaunchpad(tokenConfig) {
    try {
      const tx = await this.factoryContract.createLaunchpad(
        tokenConfig.name,
        tokenConfig.symbol,
        tokenConfig.totalSupply,
        tokenConfig.presaleAmount,
        tokenConfig.presalePrice,
        tokenConfig.softcap,
        tokenConfig.hardcap,
        tokenConfig.presaleStartTime,
        tokenConfig.presaleEndTime,
        tokenConfig.listingRate,
        tokenConfig.listingTime,
        tokenConfig.liquidityPercent,
        tokenConfig.ownerAddress
      );

      const receipt = await tx.wait();
      const launchpadAddress = receipt.events[0].args.launchpadAddress;

      return {
        success: true,
        launchpadAddress,
        transactionHash: receipt.transactionHash,
        blockNumber: receipt.blockNumber
      };
    } catch (error) {
      throw new Error(`Failed to deploy launchpad: ${error.message}`);
    }
  }

  async contributeToPresale(launchpadAddress, amountBTC) {
    try {
      const launchpad = new ethers.Contract(
        launchpadAddress,
        require('./abis/Launchpad.json'),
        this.wallet
      );

      const tx = await launchpad.contribute({
        value: ethers.parseEther(amountBTC)
      });

      const receipt = await tx.wait();
      return {
        success: true,
        transactionHash: receipt.transactionHash,
        blockNumber: receipt.blockNumber
      };
    } catch (error) {
      throw new Error(`Failed to contribute: ${error.message}`);
    }
  }

  async claimTokens(launchpadAddress, userAddress) {
    try {
      const launchpad = new ethers.Contract(
        launchpadAddress,
        require('./abis/Launchpad.json'),
        this.wallet
      );

      const tx = await launchpad.claimTokens(userAddress);
      const receipt = await tx.wait();

      return {
        success: true,
        transactionHash: receipt.transactionHash,
        claimedAmount: receipt.events[0].args.amount
      };
    } catch (error) {
      throw new Error(`Failed to claim tokens: ${error.message}`);
    }
  }

  async getLaunchpadStatus(launchpadAddress) {
    try {
      const launchpad = new ethers.Contract(
        launchpadAddress,
        require('./abis/Launchpad.json'),
        this.provider
      );

      const status = await launchpad.getStatus();
      return {
        isActive: status.isActive,
        totalRaised: ethers.formatEther(status.totalRaised),
        contributors: status.contributorCount.toString(),
        hardcap: ethers.formatEther(status.hardcap),
        softcap: ethers.formatEther(status.softcap),
        presaleEndTime: status.presaleEndTime.toString()
      };
    } catch (error) {
      throw new Error(`Failed to get launchpad status: ${error.message}`);
    }
  }

  async getUserContribution(launchpadAddress, userAddress) {
    try {
      const launchpad = new ethers.Contract(
        launchpadAddress,
        require('./abis/Launchpad.json'),
        this.provider
      );

      const contribution = await launchpad.getUserContribution(userAddress);
      return {
        amount: ethers.formatEther(contribution.amount),
        tokensClaimed: ethers.formatEther(contribution.tokensClaimed),
        claimable: ethers.formatEther(contribution.claimableTokens)
      };
    } catch (error) {
      throw new Error(`Failed to get user contribution: ${error.message}`);
    }
  }
}

module.exports = SmartContractService;
