# 🎉 Welcome to Bitmeme!

## 🚀 Quick Start (2 minutes)

```bash
# 1. Install everything
npm install && npm run install-all

# 2. Configure environment
cp .env.example .env
# Edit .env with your settings

# 3. Start development
npm run dev

# Visit:
# Frontend: http://localhost:3000
# Backend:  http://localhost:5000
# API:      http://localhost:5000/api
```

## 📖 Important Files

| File | Purpose |
|------|---------|
| `README.md` | Complete project documentation |
| `SETUP.md` | Detailed setup instructions |
| `PROJECT_SUMMARY.md` | What was built & architecture |
| `DEPLOYMENT_CHECKLIST.md` | Production deployment guide |
| `.env.example` | Environment variables template |
| `Bitmeme_API.postman_collection.json` | API testing collection |

## 🔑 Key Commands

```bash
# Development
npm run dev              # Run both frontend & backend
npm run server          # Backend only
npm run client          # Frontend only

# Production
npm run build           # Build for production
NODE_ENV=production npm run server

# Installation
npm install             # Install root dependencies
npm run install-all     # Install frontend dependencies too
```

## 📱 Application Features

✅ User authentication (register/login)
✅ Browse Bitcoin meme coin launchpads
✅ Create new launchpad projects
✅ Contribute to presales
✅ Claim tokens after presale
✅ Portfolio tracking
✅ Investment history
✅ Real-time progress updates
✅ Responsive mobile design
✅ Smart contract integration (Opnet BtC L1)

## 🎨 Beautiful UI Components

- Landing page with hero section
- Navigation with responsive menu
- Launchpad card grid with progress
- Detailed project pages
- Authentication forms
- Dashboard with analytics
- Portfolio tracker
- Creation wizard

## 🔐 Security Features

- JWT authentication
- Password hashing (bcryptjs)
- Input validation
- Error handling
- CORS protection
- Smart contract auditing support

## 📚 Architecture

```
Frontend (React)  →  Backend (Express)  →  Smart Contracts (Ethers.js)
    ↓                      ↓                          ↓
  Vite              Node.js + Middleware        Opnet BtC L1
Tailwind CSS        MongoDB (optional)         Bitcoin Network
React Router        Validation Services
```

## 🔗 API Base Endpoints

```
/api/auth              → User authentication
/api/launchpad         → Launchpad management
/api/presale           → Presale operations
/api/smartcontract     → Smart contract interactions
/api/user              → User profile & portfolio
```

## 📊 Database Schema Ready

```javascript
// Users
{
  username, email, wallet, password_hash,
  portfolio, createdAt, updatedAt
}

// Launchpads
{
  name, symbol, description, tokenConfig,
  creator, contributors, status, timeline
}

// Investments
{
  userId, launchpadId, amount, tokens,
  status, timestamp, transactionHash
}
```

## 🌐 Environment Variables

Required in `.env`:
```
PORT=5000
OPNET_RPC_URL=https://...
FACTORY_CONTRACT_ADDRESS=0x...
JWT_SECRET=your_secure_key_here
MONGODB_URI=mongodb://localhost:27017/bitmeme
```

## 📱 Pages Created

| Page | Route | Auth Required |
|------|-------|---------------|
| Home | `/` | No |
| Launchpads | `/launchpads` | No |
| Details | `/launchpad/:id` | No |
| Login | `/login` | No |
| Register | `/register` | No |
| Dashboard | `/dashboard` | Yes |
| Create Launchpad | `/create` | Yes |

## 🎯 Next Steps

1. **Verify Installation**
   - Run `npm run dev`
   - Open http://localhost:3000
   - Should see landing page with Bitmeme logo

2. **Configure Settings**
   - Edit `.env` with your values
   - Set smart contract addresses
   - Configure MongoDB URL

3. **Deploy Smart Contracts**
   - Deploy to Opnet BtC L1
   - Get contract addresses
   - Update in `.env`

4. **Test Workflows**
   - Create test account
   - Browse launchpads
   - Create a launchpad
   - Test contribution flow

5. **Deploy to Production**
   - Follow DEPLOYMENT_CHECKLIST.md
   - Use Heroku for backend
   - Use Vercel for frontend

## 🐛 Troubleshooting

**Port already in use:**
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :5000 | grep LISTEN
kill -9 <PID>
```

**Module not found:**
```bash
# Reinstall dependencies
rm -rf node_modules client/node_modules
npm install && npm run install-all
```

**MongoDB connection error:**
```bash
# Start MongoDB
mongod
# Or use MongoDB Atlas (cloud)
```

## 📞 Support Resources

- **Documentation:** README.md
- **Setup Help:** SETUP.md
- **Architecture:** PROJECT_SUMMARY.md
- **Deployment:** DEPLOYMENT_CHECKLIST.md
- **API Testing:** Bitmeme_API.postman_collection.json

## 🎓 Technology Stack

**Frontend:**
- React 18
- Tailwind CSS
- React Router
- Axios
- Ethers.js

**Backend:**
- Node.js
- Express.js
- JWT
- Bcryptjs
- Ethers.js

**Blockchain:**
- Opnet BtC L1
- Smart Contracts (Solidity ready)

## 💡 Pro Tips

1. **Use Postman** for API testing (import collection)
2. **Check browser DevTools** for frontend errors
3. **Monitor server console** for backend errors
4. **Use .env.example** as template for configuration
5. **Read SETUP.md** for detailed instructions
6. **Check README.md** for comprehensive docs

## 🚀 Ready to Launch!

Your Bitcoin meme coin launchpad is ready to go! 

**Start with:**
```bash
npm run dev
```

Then open: http://localhost:3000

Good luck! 🌟

---

**Bitmeme - Launch Your Dreams! 🚀💰**
