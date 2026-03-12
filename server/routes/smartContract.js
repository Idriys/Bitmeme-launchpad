const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');
const SmartContractService = require('../utils/SmartContractService');

class SmartContractController {
  static async contributeToPresale(req, res) {
    try {
      const { launchpadAddress, amountBTC } = req.body;

      if (!launchpadAddress || !amountBTC) {
        return res.status(400).json({ error: 'Launchpad address and amount are required' });
      }

      const contractService = new SmartContractService();
      await contractService.initialize(process.env.PRIVATE_KEY);

      const result = await contractService.contributeToPresale(launchpadAddress, amountBTC);

      res.json({
        success: true,
        contribution: result,
        message: 'Contribution successful'
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async claimTokens(req, res) {
    try {
      const { launchpadAddress } = req.body;
      const userAddress = req.user.walletAddress;

      if (!launchpadAddress || !userAddress) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const contractService = new SmartContractService();
      await contractService.initialize(process.env.PRIVATE_KEY);

      const result = await contractService.claimTokens(launchpadAddress, userAddress);

      res.json({
        success: true,
        claim: result,
        message: 'Tokens claimed successfully'
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getLaunchpadStatus(req, res) {
    try {
      const { launchpadAddress } = req.params;

      const contractService = new SmartContractService();
      const status = await contractService.getLaunchpadStatus(launchpadAddress);

      res.json({ success: true, status });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getUserContribution(req, res) {
    try {
      const { launchpadAddress } = req.params;
      const userAddress = req.user.walletAddress;

      const contractService = new SmartContractService();
      const contribution = await contractService.getUserContribution(launchpadAddress, userAddress);

      res.json({ success: true, contribution });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

// Routes
router.post('/contribute', authMiddleware, SmartContractController.contributeToPresale);
router.post('/claim', authMiddleware, SmartContractController.claimTokens);
router.get('/status/:launchpadAddress', SmartContractController.getLaunchpadStatus);
router.get('/contribution/:launchpadAddress', authMiddleware, SmartContractController.getUserContribution);

module.exports = router;
