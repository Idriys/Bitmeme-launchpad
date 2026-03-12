# Bitmeme Setup Guide

## 🎯 Complete Setup Instructions

### Step 1: Initial Setup (5 minutes)

```bash
# Navigate to project directory
cd Bob-MCP-Workspace

# Install all dependencies
npm install
npm run install-all
```

### Step 2: Environment Configuration (5 minutes)

#### Backend Setup (.env)
```bash
# Create .env file in root directory
cp .env.example .env

# Edit and configure:
PORT=5000
NODE_ENV=development
OPNET_RPC_URL=https://opnet-rpc-url.com
OPNET_NETWORK_ID=1
OPNET_CHAIN_ID=1
FACTORY_CONTRACT_ADDRESS=0x...
ROUTER_CONTRACT_ADDRESS=0x...
LAUNCHPAD_CONTRACT_ADDRESS=0x...
MONGODB_URI=mongodb://localhost:27017/bitmeme
JWT_SECRET=generate_a_random_secret_key_here
JWT_EXPIRY=7d
WEB3_PROVIDER_URL=https://opnet-rpc-url.com
PRIVATE_KEY=your_deployer_private_key
```

#### Frontend Setup (.env.local)
```bash
# Create file: client/.env.local
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_NETWORK_ID=1
```

### Step 3: Database Setup (Optional but Recommended)

```bash
# Install MongoDB locally or use MongoDB Atlas
# For local installation on Windows:
# Download from: https://www.mongodb.com/try/download/community

# Start MongoDB service
mongod

# Or use MongoDB Atlas (cloud):
# 1. Create account at https://www.mongodb.com/cloud/atlas
# 2. Create cluster and get connection string
# 3. Update MONGODB_URI in .env
```

### Step 4: Smart Contract Deployment

1. **Deploy on Opnet BtC L1**:
   - Update contract ABIs in `server/utils/abis/`
   - Set contract addresses in `.env`
   - Ensure wallet has sufficient BTC for gas

2. **Contract ABI Configuration**:
   - Place `LaunchpadFactory.json` in `server/utils/abis/`
   - Place `Launchpad.json` in `server/utils/abis/`
   - Update contract addresses after deployment

### Step 5: Start Development Servers

**Option A: Run Both (Root Directory)**
```bash
npm run dev
```
- Backend: http://localhost:5000
- Frontend: http://localhost:3000

**Option B: Run Separately**

Terminal 1 - Backend:
```bash
npm run server
```

Terminal 2 - Frontend:
```bash
npm run client
```

### Step 6: Verify Installation

1. **Backend Health Check**:
   ```bash
   curl http://localhost:5000/api/health
   ```
   Expected response: `{"status":"Server is running","timestamp":"..."}`

2. **Frontend Access**:
   - Open http://localhost:3000 in browser
   - Should see Bitmeme homepage with logo

3. **Test API Endpoints**:
   ```bash
   # Get launchpads
   curl http://localhost:5000/api/launchpad

   # Get presales
   curl http://localhost:5000/api/presale
   ```

## 🔧 Configuration Details

### Smart Contract Addresses
Update in `.env`:
```env
FACTORY_CONTRACT_ADDRESS=0x[Your Factory Address]
ROUTER_CONTRACT_ADDRESS=0x[Your Router Address]
LAUNCHPAD_CONTRACT_ADDRESS=0x[Your Launchpad Address]
```

### Database Configuration
```env
# Local MongoDB
MONGODB_URI=mongodb://localhost:27017/bitmeme

# MongoDB Atlas (Cloud)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bitmeme
```

### Security Keys
```bash
# Generate JWT Secret (use strong random string):
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## 📦 Project Build

### Development Build
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

Output:
- Frontend: `client/build/`
- Backend: Ready for deployment

### Start Production Server
```bash
NODE_ENV=production npm run server
```

## 🧪 Testing

### Backend Tests
```bash
npm test
```

### Frontend Tests
```bash
cd client
npm test
```

### Manual Testing Workflow

1. **User Registration**
   - Visit http://localhost:3000/register
   - Fill form with test data
   - wallet: 0x742d35Cc6634C0532925a3b844Bc9e7595f42bA1

2. **Login**
   - Visit http://localhost:3000/login
   - Use registered credentials

3. **Browse Launchpads**
   - Navigate to /launchpads
   - View existing launchpad projects

4. **Create Launchpad**
   - Login required
   - Fill all required fields
   - Submit to create

5. **Contribute to Presale**
   - Select a launchpad
   - Enter BTC amount
   - Confirm transaction

## 🚀 Deployment

### Deploy to Heroku

```bash
# Backend
heroku login
heroku create bitmeme-backend
heroku config:set NODE_ENV=production
heroku config:set MONGODB_URI=...
heroku config:set JWT_SECRET=...
git push heroku main
```

### Deploy to Vercel

```bash
# Frontend
cd client
npm install -g vercel
vercel
# Follow prompts
```

### Docker Deployment

```bash
# Build Docker image
docker build -t bitmeme .

# Run container
docker run -p 5000:5000 bitmeme
```

## 🐛 Troubleshooting

### Common Issues

**1. Port 5000 Already in Use**
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9
```

**2. MongoDB Connection Error**
- Verify MongoDB is running: `mongod`
- Check connection string in .env
- Ensure correct username/password for Atlas

**3. Smart Contract ABI Error**
- Verify ABI files exist in `server/utils/abis/`
- Check JSON file syntax
- Match contract function names

**4. CORS Error**
- Backend CORS is configured
- Check API URL in client .env
- Ensure frontend and backend URLs match

**5. Token/Auth Issues**
- Clear localStorage: DevTools → Storage → Clear
- Check JWT_SECRET is set
- Verify token in Authorization header

### Environment Variable Issues

```bash
# Reload environment variables
# Close and restart terminal/server

# Verify variables are loaded
node -e "console.log(process.env.PORT)"
```

## 📱 Account Recovery

### Reset User Password
1. Database: Delete user document
2. Or: Create password reset endpoint (recommended)

### Clear All Data
```bash
# MongoDB
db.users.deleteMany({})
db.launchpads.deleteMany({})

# Local Storage
localStorage.clear()
```

## 📊 Monitoring

### Logs
```bash
# Backend logs are printed to console
# Frontend errors in DevTools → Console

# Save logs to file
npm run server > server.log 2>&1
```

### Health Checks
```bash
# Check server status
curl http://localhost:5000/api/health

# Check frontend
curl http://localhost:3000
```

## 🔒 Security Checklist

- [ ] JWT_SECRET is strong and unique
- [ ] Private keys stored in .env (not in code)
- [ ] CORS origins configured correctly
- [ ] Input validation enabled on all endpoints
- [ ] Rate limiting configured (recommended)
- [ ] Smart contracts audited
- [ ] Database backups enabled
- [ ] HTTPS enforced in production
- [ ] Environment variables secured
- [ ] API keys rotated regularly

## 📞 Getting Help

1. **Check Logs**: Look for errors in console output
2. **Read README.md**: Full documentation
3. **Check .env.example**: Correct configuration format
4. **Test Endpoints**: Use curl or Postman
5. **Browser DevTools**: Check network/console tabs

## ✅ Quick Checklist

- [ ] Node.js 16+ installed
- [ ] Dependencies installed (`npm install`)
- [ ] `.env` file configured
- [ ] MongoDB running (optional)
- [ ] Smart contracts deployed
- [ ] Opnet network configured
- [ ] npm run dev working
- [ ] http://localhost:3000 loads
- [ ] Can register and login
- [ ] Can view launchpads

---

**You're all set! Start building on Bitmeme! 🚀**
