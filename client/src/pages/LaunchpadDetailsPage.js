import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Alert } from '../components/Common';
import { ExternalLink, Users, Target, Clock, TrendingUp } from 'lucide-react';

export const LaunchpadDetailsPage = () => {
  const { id } = useParams();
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [contributed, setContributed] = useState(false);

  const launchpad = {
    id,
    name: 'FLOKI Token',
    symbol: 'FLOKI',
    description: 'A community-driven meme coin inspired by Floki Inu. Join the revolution!',
    image: 'url',
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
    },
    contributors: 245,
    totalSupply: '1000000000'
  };

  const handleContribute = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // API call would go here
      console.log('Contributing:', amount, 'BTC');
      
      setContributed(true);
      setTimeout(() => {
        setAmount('');
        setContributed(false);
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const progressPercent = (parseFloat(launchpad.raised) / parseFloat(launchpad.target)) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold">{launchpad.symbol}</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold">{launchpad.name}</h1>
              <p className="text-blue-100">{launchpad.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {contributed && (
              <Alert type="success" title="Success!" message="Your contribution has been recorded successfully." />
            )}

            {/* Progress */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Fundraising Progress</h2>
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">Progress</span>
                  <span className="font-semibold text-blue-600">{progressPercent.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full transition-all"
                    style={{ width: `${Math.min(progressPercent, 100)}%` }}
                  ></div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div>
                  <p className="text-gray-600 text-sm">Raised</p>
                  <p className="text-2xl font-bold text-gray-800">{launchpad.raised}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Target</p>
                  <p className="text-2xl font-bold text-gray-800">{launchpad.target}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Contributors</p>
                  <p className="text-2xl font-bold text-gray-800">{launchpad.contributors}</p>
                </div>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pricing */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <TrendingUp size={24} className="text-blue-600" />
                  Pricing
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Presale Price:</span>
                    <span className="font-semibold text-gray-800">{launchpad.tokenPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Listing Price:</span>
                    <span className="font-semibold text-gray-800">{launchpad.listingPrice}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between">
                    <span className="text-gray-600">Expected ROI:</span>
                    <span className="font-bold text-green-600">+100%</span>
                  </div>
                </div>
              </div>

              {/* Limits */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Target size={24} className="text-purple-600" />
                  Limits
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Min Buy:</span>
                    <span className="font-semibold text-gray-800">{launchpad.minBuy}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Max Buy:</span>
                    <span className="font-semibold text-gray-800">{launchpad.maxBuy}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between">
                    <span className="text-gray-600">Softcap:</span>
                    <span className="font-semibold text-gray-800">{launchpad.softcap}</span>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Clock size={24} className="text-orange-600" />
                  Timeline
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-600">Presale Starts</p>
                    <p className="font-semibold text-gray-800">{launchpad.timeline.presaleStart.toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Presale Ends</p>
                    <p className="font-semibold text-gray-800">{launchpad.timeline.presaleEnd.toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Listing Date</p>
                    <p className="font-semibold text-gray-800">{launchpad.timeline.listingDate.toLocaleDateString()}</p>
                  </div>
                </div>
              </div>

              {/* Liquidity */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Liquidity</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">LP Tokens:</span>
                    <span className="font-semibold text-gray-800">{launchpad.liquidity.percent}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lock Time:</span>
                    <span className="font-semibold text-gray-800">{launchpad.liquidity.lockTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Project Links</h3>
              <div className="flex flex-wrap gap-4">
                <a href={launchpad.creator.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition">
                  Website <ExternalLink size={16} />
                </a>
                <a href={launchpad.creator.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition">
                  Twitter <ExternalLink size={16} />
                </a>
                <a href={launchpad.creator.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition">
                  Telegram <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contribution Box */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contribute Now</h2>

              <form onSubmit={handleContribute} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Amount (BTC)</label>
                  <input
                    type="number"
                    step="0.01"
                    min={parseFloat(launchpad.minBuy)}
                    max={parseFloat(launchpad.maxBuy)}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder={`${launchpad.minBuy} - ${launchpad.maxBuy}`}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <p className="text-xs text-gray-600 mt-1">Min: {launchpad.minBuy} | Max: {launchpad.maxBuy}</p>
                </div>

                {amount && (
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-sm text-gray-600 mb-2">You will receive:</p>
                    <p className="text-lg font-bold text-blue-600">
                      {(parseFloat(amount) / parseFloat(launchpad.tokenPrice)).toLocaleString()} {launchpad.symbol}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading || !amount}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 rounded-lg hover:shadow-lg transition disabled:opacity-50"
                >
                  {loading ? 'Processing...' : 'Contribute'}
                </button>
              </form>

              {/* Status Badge */}
              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-semibold text-gray-800">Status: Active</span>
                </div>
                <p className="text-sm text-gray-600">
                  This launchpad is currently accepting contributions. Contribute before the presale ends!
                </p>
              </div>

              {/* Security Info */}
              <div className="mt-6 pt-6 border-t bg-green-50 p-4 rounded-lg">
                <p className="text-xs font-semibold text-green-800 mb-2">✓ Security Features</p>
                <ul className="text-xs text-green-700 space-y-1">
                  <li>✓ Audited Smart Contract</li>
                  <li>✓ Liquidity Locked</li>
                  <li>✓ Verified Creator</li>
                  <li>✓ Anti-Rugpull Protection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchpadDetailsPage;
