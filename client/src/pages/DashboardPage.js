import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Alert, LoadingSpinner } from '../components/Common';
import { StatCard } from '../components/Card';
import { User, Wallet, TrendingUp, LogOut } from 'lucide-react';

export const DashboardPage = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard icon={Wallet} label="Total Invested" value="25 BTC" color="blue" />
          <StatCard icon={TrendingUp} label="Portfolio Value" value="$1,250,000" color="green" />
          <StatCard icon={User} label="Active Projects" value="5" color="purple" />
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow mb-8 border-b border-gray-200">
          <div className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-4 font-semibold border-b-2 transition ${
                activeTab === 'overview'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('investments')}
              className={`px-4 py-4 font-semibold border-b-2 transition ${
                activeTab === 'investments'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              My Investments
            </button>
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`px-4 py-4 font-semibold border-b-2 transition ${
                activeTab === 'portfolio'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              Portfolio
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <Alert type="success" title="Welcome Back!" message={`You're logged in as ${user?.email}`} />
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Account Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-600 text-sm">Username</p>
                  <p className="text-lg font-semibold text-gray-800">{user?.username || 'User'}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Email</p>
                  <p className="text-lg font-semibold text-gray-800">{user?.email}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Wallet Address</p>
                  <p className="text-lg font-semibold text-gray-800 break-all">{user?.walletAddress || '0x...'}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Account Age</p>
                  <p className="text-lg font-semibold text-gray-800">30 days</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'investments' && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Project</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Amount</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">ROI</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">FLOKI</td>
                  <td className="px-6 py-4">10 BTC</td>
                  <td className="px-6 py-4"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Claimed</span></td>
                  <td className="px-6 py-4 text-green-600 font-semibold">+45%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">PEPE</td>
                  <td className="px-6 py-4">5 BTC</td>
                  <td className="px-6 py-4"><span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Active</span></td>
                  <td className="px-6 py-4 text-red-600 font-semibold">-12%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">DOGE Clone</td>
                  <td className="px-6 py-4">8 BTC</td>
                  <td className="px-6 py-4"><span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">Upcoming</span></td>
                  <td className="px-6 py-4 text-gray-600">--</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">SHIB Clone</td>
                  <td className="px-6 py-4">2 BTC</td>
                  <td className="px-6 py-4"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Claimed</span></td>
                  <td className="px-6 py-4 text-green-600 font-semibold">+120%</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'portfolio' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Token Portfolio</h2>
            <div className="space-y-4">
              {[
                { symbol: 'FLOKI', amount: '500M', value: '$5000', change: '+15%' },
                { symbol: 'PEPE', amount: '1M', value: '$2000', change: '-8%' },
                { symbol: 'SHIB', amount: '250M', value: '$1500', change: '+45%' },
                { symbol: 'DOGE', amount: '100K', value: '$8000', change: '+20%' }
              ].map((token) => (
                <div key={token.symbol} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
                  <div>
                    <p className="font-bold text-gray-800">{token.symbol}</p>
                    <p className="text-sm text-gray-600">{token.amount} tokens</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-800">{token.value}</p>
                    <p className={`text-sm ${token.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {token.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
