# 🚀 Bitmeme - Bitcoin Meme Coin Launchpad

A simple, user-friendly, and secure platform for launching and investing in Bitcoin meme coins on the Opnet BtC L1 network.

## ✨ Features

### For Launchpad Creators
- **Easy Launch Setup**: Create a launchpad in minutes with an intuitive wizard
- **Configurable Parameters**: Set presale rates, hardcap, softcap, and liquidity percentages
- **Smart Contract Integration**: Automated token deployment on Opnet BtC L1
- **Project Management**: Update launchpad details and manage contributors
- **Social Links**: Add website, Twitter, Telegram, and Discord links

### For Investors
- **Browse Launchpads**: Discover active and upcoming token launches
- **Simple Contribution**: Contribute to presales with minimal friction
- **Portfolio Tracking**: Monitor your investments and token holdings
- **Claim Tokens**: Automated token claiming after presale ends
- **Real-time Updates**: Live progress tracking and status updates

### Platform Security
- **Audited Smart Contracts**: Secure token deployment mechanisms
- **Liquidity Locking**: Funds locked to prevent rugpulls
- **Anti-Fraud Protection**: Verified creators and transparent mechanics
- **KYC-Free**: Privacy-focused investment experience

## 🛠️ Tech Stack

### Frontend
- **React** 18 - UI framework
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Axios** - HTTP client
- **Ethers.js** - Web3 interactions
- **Lucide React** - Icons
- **React Hot Toast** - Notifications

### Backend
- **Node.js + Express** - Server framework
- **Ethers.js** - Smart contract interactions
- **MongoDB** - Database (optional)
- **JWT** - Authentication
- **Bcrypt** - Password hashing

### Blockchain
- **Opnet BtC L1** - Smart contract platform
- **Bitcoin Network** - Native currency

## 📋 Prerequisites

- Node.js 16+
- npm or yarn
- Bitcoin wallet (MetaMask/Unisat/Xverse)
- Opnet BtC L1 testnet funds

## 🚀 Quick Start

### 1. Clone and Install

```bash
cd Bitmeme
npm install
npm run install-all
```

### 2. Environment Variables

Create `.env` file in root directory:

```env
PORT=5000
NODE_ENV=development

# Blockchain
OPNET_RPC_URL=https://opnet-rpc-url.com
OPNET_NETWORK_ID=1
OPNET_CHAIN_ID=1

# Smart Contracts
FACTORY_CONTRACT_ADDRESS=0x...
ROUTER_CONTRACT_ADDRESS=0x...
LAUNCHPAD_CONTRACT_ADDRESS=0x...

# Database
MONGODB_URI=mongodb://localhost:27017/bitmeme

# Auth
JWT_SECRET=your_secret_key_here
JWT_EXPIRY=7d

# Web3
WEB3_PROVIDER_URL=https://opnet-rpc-url.com
PRIVATE_KEY=your_private_key_here
```

Create `.env.local` in client directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_NETWORK_ID=1
```

### 3. Start Development Server

```bash
# Root directory
npm run dev

# Or run separately:
npm run server    # Terminal 1 - Backend on http://localhost:5000
npm run client    # Terminal 2 - Frontend on http://localhost:3000
```

### 4. Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
Bitmeme/
├── server/
│   ├── routes/
│   │   ├── auth.js           # Authentication
│   │   ├── launchpad.js      # Launchpad CRUD
│   │   ├── smartContract.js  # Token interactions
│   │   ├── presale.js        # Presale management
│   │   └── user.js           # User profile
│   ├── utils/
│   │   ├── SmartContractService.js
│   │   ├── AuthService.js
│   │   └── ValidationService.js
│   ├── middleware/
│   │   └── auth.js            # JWT validation
│   └── models/                # Database models
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── HomePage.js
│   │   │   ├── LaunchpadsPage.js
│   │   │   ├── LaunchpadDetailsPage.js
│   │   │   ├── CreateLaunchpadPage.js
│   │   │   ├── LoginPage.js
│   │   │   ├── RegisterPage.js
│   │   │   └── DashboardPage.js
│   │   ├── components/
│   │   │   ├── Navigation.js
│   │   │   ├── Card.js
│   │   │   └── Common.js
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   ├── utils/
│   │   │   ├── api.js
│   │   │   └── helpers.js
│   │   ├── styles/
│   │   │   └── index.css
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   │   ├── logo.svg           # Bitmeme logo
│   │   └── index.html
│   └── package.json
├── server.js
├── package.json
├── .env.example
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/verify` - Verify token
- `POST /api/auth/logout` - Logout

### Launchpads
- `GET /api/launchpad` - Get all launchpads
- `GET /api/launchpad/:id` - Get launchpad details
- `POST /api/launchpad/create` - Create new launchpad
- `PUT /api/launchpad/:id` - Update launchpad

### Smart Contracts
- `POST /api/smartcontract/contribute` - Contribute to presale
- `POST /api/smartcontract/claim` - Claim tokens
- `GET /api/smartcontract/status/:address` - Get launchpad status
- `GET /api/smartcontract/contribution/:address` - Get user contribution

### Presales
- `GET /api/presale` - List all presales
- `GET /api/presale/:id` - Get presale details
- `POST /api/presale/participate` - Participate in presale
- `GET /api/presale/history/user` - Get participation history

### User
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update profile
- `GET /api/user/portfolio` - Get portfolio
- `GET /api/user/notifications` - Get notifications
- `POST /api/user/connect-wallet` - Connect wallet

## 🎨 UI/UX Features

### Intuitive Design
- Clean, modern interface with gradient backgrounds
- Easy navigation with sticky header
- Mobile-responsive layout (works on all devices)
- Smooth animations and transitions

### User Experience
- Real-time progress tracking with progress bars
- Clear status indicators (Active, Upcoming, Ended)
- Detailed project information cards
- One-click contribution workflow
- Portfolio dashboard with investment tracking

### Analytics
- Live fundraising metrics
- ROI calculations
- Contribution history
- Token value tracking

## 🔐 Security Features

1. **JWT Authentication**: Secure token-based auth
2. **Password Hashing**: Bcrypt for secure password storage
3. **Input Validation**: Server-side validation for all inputs
4. **CORS Protection**: Configured CORS headers
5. **Smart Contract Auditing**: Recommended contract audit
6. **Rate Limiting**: (Recommended implementation)
7. **2FA Support**: (Ready to integrate)

## 📱 Pages

### Public Pages
- **Home** - Landing page with features
- **Launchpads** - Browse all active launchpads
- **Launchpad Details** - Detailed view with contribution form
- **Login** - User authentication
- **Register** - New user signup

### Protected Pages
- **Dashboard** - User profile and portfolio
- **Create Launchpad** - Wizard for new launchpad
- **Portfolio** - Investment tracking

## 🚦 Running Tests

```bash
# Backend tests
npm test

# Frontend tests
cd client && npm test
```

## 📦 Deployment

### Deploy Backend (Heroku)

```bash
heroku create bitmeme-server
heroku config:set NODE_ENV=production MONGODB_URI=...
git push heroku main
```

### Deploy Frontend (Vercel)

```bash
cd client
vercel deploy
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

### MongoDB Connection Error
- Ensure MongoDB is running locally or connection string is correct
- Check `.env` file for correct URI

### Smart Contract Interaction Issues
- Verify contract addresses in `.env`
- Check Opnet network RPC URL
- Ensure wallet has BTC for gas fees

## 📚 Documentation

### Smart Contracts
- Need Opnet BtC L1 smart contract ABIs in `server/utils/abis/`
- Create `LaunchpadFactory.json` and `Launchpad.json` files

### API Documentation
See individual route files in `server/routes/` for detailed endpoint documentation

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## ⚠️ Disclaimer

This is a launchpad platform for educational purposes. Users are responsible for conducting their own due diligence on tokens and projects. The platform is not responsible for individual investment decisions or losses.

## 🎯 Roadmap

- [ ] Multi-chain support (Ethereum, BSC, Polygon)
- [ ] Advanced KYC/AML features
- [ ] DAO governance for platform decisions
- [ ] Mobile app (React Native)
- [ ] Enhanced analytics dashboard
- [ ] Automated market maker (AMM) integration
- [ ] Token swap functionality
- [ ] Community voting on launchpad approvals

## 📞 Support

For questions and support:
- GitHub Issues: Open an issue on the repository
- Email: support@bitmeme.io
- Discord: Join our community server
- Twitter: @BitmemenMeme

---

**Made with ❤️ for the Bitcoin meme coin community**

**Bitmeme - Launch Your Dreams! 🚀**
