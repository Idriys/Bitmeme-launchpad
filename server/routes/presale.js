const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');

class PresaleController {
  static async getPresaleList(req, res) {
    try {
      const presales = [
        {
          id: '1',
          name: 'FLOKI Token Presale',
          symbol: 'FLOKI',
          status: 'active',
          progress: 80,
          raised: '80 BTC',
          target: '100 BTC',
          timeRemaining: '5 days',
          tokenPrice: '0.00001 BTC'
        },
        {
          id: '2',
          name: 'PEPE Resurrection',
          symbol: 'PEPE',
          status: 'active',
          progress: 45,
          raised: '45 BTC',
          target: '100 BTC',
          timeRemaining: '10 days',
          tokenPrice: '0.000015 BTC'
        }
      ];

      res.json({ success: true, presales });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getPresaleDetails(req, res) {
    try {
      const { id } = req.params;

      const presale = {
        id,
        name: 'FLOKI Token Presale',
        symbol: 'FLOKI',
        description: 'A community-driven meme coin',
        totalSupply: '1000000000',
        decimals: 18,
        status: 'active',
        progress: 80,
        raised: '80 BTC',
        target: '100 BTC',
        softcap: '20 BTC',
        hardcap: '100 BTC',
        minBuy: '0.1 BTC',
        maxBuy: '10 BTC',
        tokenPrice: '0.00001 BTC',
        listingPrice: '0.00002 BTC',
        liquidity: {
          percent: 51,
          lockTime: '180 days'
        },
        timeline: {
          presaleStart: new Date(),
          presaleEnd: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
          listingDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        },
        creator: {
          name: 'FLOKI Team',
          wallet: '0x...',
          verified: true,
          website: 'https://floki.example.com',
          twitter: 'https://twitter.com/floki',
          telegram: 'https://t.me/floki'
        }
      };

      res.json({ success: true, presale });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async participateInPresale(req, res) {
    try {
      const { presaleId, amount } = req.body;
      const userId = req.user.userId;

      const participation = {
        userId,
        presaleId,
        amount,
        timestamp: new Date(),
        tokensToReceive: (amount / 0.00001).toString(),
        status: 'confirmed'
      };

      res.status(201).json({
        success: true,
        participation,
        message: 'Participation recorded successfully'
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getParticipationHistory(req, res) {
    try {
      const userId = req.user.userId;

      const history = [
        {
          presaleId: '1',
          presaleName: 'FLOKI',
          amount: '5 BTC',
          tokensToReceive: '500000000',
          status: 'claimed',
          timestamp: new Date()
        }
      ];

      res.json({ success: true, history });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

// Routes
router.get('/', PresaleController.getPresaleList);
router.get('/:id', PresaleController.getPresaleDetails);
router.post('/participate', authMiddleware, PresaleController.participateInPresale);
router.get('/history/user', authMiddleware, PresaleController.getParticipationHistory);

module.exports = router;
