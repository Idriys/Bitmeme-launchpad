import React, { useState } from 'react';
import { Alert } from '../components/Common';

export const CreateLaunchpadPage = () => {
  const [formData, setFormData] = useState({
    tokenName: '',
    tokenSymbol: '',
    totalSupply: '',
    presaleAmount: '',
    presalePrice: '',
    softcap: '',
    hardcap: '',
    listingRate: '',
    liquidityPercent: 51,
    presaleStartTime: '',
    presaleEndTime: '',
    description: '',
    website: '',
    twitter: '',
    telegram: '',
    discord: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      // Validation
      if (!formData.tokenName || !formData.tokenSymbol) {
        setError('Token name and symbol are required');
        setLoading(false);
        return;
      }

      // API call would go here
      console.log('Form Data:', formData);
      
      setSuccess('Launchpad created successfully! Redirecting...');
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 2000);
    } catch (err) {
      setError('Failed to create launchpad');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Create New Launchpad</h1>
          <p className="text-blue-100">Set up your Bitcoin meme coin launchpad in minutes</p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {error && <Alert type="error" message={error} onClose={() => setError('')} />}
          {success && <Alert type="success" message={success} />}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Token Details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Token Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Token Name *</label>
                  <input
                    type="text"
                    name="tokenName"
                    value={formData.tokenName}
                    onChange={handleChange}
                    placeholder="e.g., FLOKI Coin"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Token Symbol *</label>
                  <input
                    type="text"
                    name="tokenSymbol"
                    value={formData.tokenSymbol}
                    onChange={handleChange}
                    placeholder="e.g., FLOKI"
                    maxLength="10"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Total Supply *</label>
                  <input
                    type="number"
                    name="totalSupply"
                    value={formData.totalSupply}
                    onChange={handleChange}
                    placeholder="e.g., 1000000000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Presale Amount *</label>
                  <input
                    type="number"
                    name="presaleAmount"
                    value={formData.presaleAmount}
                    onChange={handleChange}
                    placeholder="e.g., 500000000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Pricing</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Presale Price (BTC) *</label>
                  <input
                    type="number"
                    step="0.00000001"
                    name="presalePrice"
                    value={formData.presalePrice}
                    onChange={handleChange}
                    placeholder="e.g., 0.00001"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Listing Price (BTC) *</label>
                  <input
                    type="number"
                    step="0.00000001"
                    name="listingRate"
                    value={formData.listingRate}
                    onChange={handleChange}
                    placeholder="e.g., 0.00002"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Caps */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Fundraising Targets</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Softcap (BTC) *</label>
                  <input
                    type="number"
                    name="softcap"
                    value={formData.softcap}
                    onChange={handleChange}
                    placeholder="e.g., 10"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Hardcap (BTC) *</label>
                  <input
                    type="number"
                    name="hardcap"
                    value={formData.hardcap}
                    onChange={handleChange}
                    placeholder="e.g., 100"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Timeline</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Presale Start Time *</label>
                  <input
                    type="datetime-local"
                    name="presaleStartTime"
                    value={formData.presaleStartTime}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Presale End Time *</label>
                  <input
                    type="datetime-local"
                    name="presaleEndTime"
                    value={formData.presaleEndTime}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Liquidity */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Liquidity Percentage: {formData.liquidityPercent}%</label>
              <input
                type="range"
                name="liquidityPercent"
                min="0"
                max="100"
                value={formData.liquidityPercent}
                onChange={handleChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Project Links */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Project Links</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Website</label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Twitter</label>
                  <input
                    type="url"
                    name="twitter"
                    value={formData.twitter}
                    onChange={handleChange}
                    placeholder="https://twitter.com/your_project"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Telegram</label>
                  <input
                    type="url"
                    name="telegram"
                    value={formData.telegram}
                    onChange={handleChange}
                    placeholder="https://t.me/your_group"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Discord</label>
                  <input
                    type="url"
                    name="discord"
                    value={formData.discord}
                    onChange={handleChange}
                    placeholder="https://discord.gg/your_server"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Project Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 rounded-lg hover:shadow-lg transition disabled:opacity-50"
              >
                {loading ? 'Creating Launchpad...' : 'Create Launchpad'}
              </button>
              <button
                type="button"
                onClick={() => window.history.back()}
                className="px-8 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 rounded-lg transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateLaunchpadPage;
