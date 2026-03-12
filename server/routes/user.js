const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');

class UserController {
  static async getUserProfile(req, res) {
    try {
      const userId = req.user.userId;

      const profile = {
        userId,
        username: 'User' + userId,
        email: req.user.email,
        walletAddress: '0x...',
        verified: true,
        createdAt: new Date(),
        investments: [
          { presaleId: '1', amount: '5 BTC', status: 'claimed' }
        ],
        totalInvested: '5 BTC',
        tokensOwned: [
          { symbol: 'FLOKI', amount: '500000000', value: '5000 USD' }
        ]
      };

      res.json({ success: true, profile });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateProfile(req, res) {
    try {
      const userId = req.user.userId;
      const { username, email } = req.body;

      const updated = {
        userId,
        username: username || 'User' + userId,
        email: email || req.user.email,
        message: 'Profile updated successfully'
      };

      res.json({ success: true, ...updated });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getPortfolio(req, res) {
    try {
      const userId = req.user.userId;

      const portfolio = {
        totalValue: '50000 USD',
        tokens: [
          { symbol: 'FLOKI', amount: '500000000', value: '5000 USD', change: '+15%' },
          { symbol: 'PEPE', amount: '1000000', value: '2000 USD', change: '-5%' }
        ],
        investments: [
          { presaleName: 'FLOKI', invested: '5 BTC', status: 'claimed' },
          { presaleName: 'PEPE', invested: '3 BTC', status: 'active' }
        ]
      };

      res.json({ success: true, portfolio });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getNotifications(req, res) {
    try {
      const notifications = [
        { id: '1', title: 'Tokens Claimed', message: 'Your FLOKI tokens have been claimed', read: false, timestamp: new Date() },
        { id: '2', title: 'New Presale', message: 'A new presale PEPE has started', read: false, timestamp: new Date(Date.now() - 3600000) }
      ];

      res.json({ success: true, notifications });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async connectWallet(req, res) {
    try {
      const { walletAddress } = req.body;

      res.json({
        success: true,
        message: 'Wallet connected successfully',
        walletAddress
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

// Routes
router.get('/profile', authMiddleware, UserController.getUserProfile);
router.put('/profile', authMiddleware, UserController.updateProfile);
router.get('/portfolio', authMiddleware, UserController.getPortfolio);
router.get('/notifications', authMiddleware, UserController.getNotifications);
router.post('/connect-wallet', authMiddleware, UserController.connectWallet);

module.exports = router;
