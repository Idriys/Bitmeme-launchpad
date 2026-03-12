import React from 'react';
import { TrendingUp, Users, DollarSign, Zap } from 'lucide-react';

export const LaunchpadCard = ({ launchpad }) => {
  const progressPercent = (parseInt(launchpad.raised) / parseInt(launchpad.hardcap)) * 100;

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-32 flex items-center justify-center">
        <h3 className="text-white text-2xl font-bold">{launchpad.symbol}</h3>
      </div>

      {/* Content */}
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-800 mb-2">{launchpad.name}</h4>
        
        {/* Status Badge */}
        <div className="flex items-center space-x-2 mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
            launchpad.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
          }`}>
            {launchpad.status.toUpperCase()}
          </span>
          <span className="text-sm text-gray-600">{launchpad.timeRemaining}</span>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">Progress</span>
            <span className="text-sm font-semibold text-blue-600">{progressPercent.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all"
              style={{ width: `${Math.min(progressPercent, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-gray-600 text-sm">Raised</p>
            <p className="text-lg font-bold text-gray-800">{launchpad.raised}</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Target</p>
            <p className="text-lg font-bold text-gray-800">{launchpad.hardcap}</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Token Price</p>
            <p className="text-lg font-bold text-gray-800">{launchpad.tokenPrice}</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Contributors</p>
            <p className="text-lg font-bold text-gray-800">{launchpad.contributors}</p>
          </div>
        </div>

        {/* Button */}
        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 rounded-lg hover:shadow-lg transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export const StatCard = ({ icon: Icon, label, value, color = 'blue' }) => {
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500'
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-semibold">{label}</p>
          <p className="text-2xl font-bold text-gray-800 mt-2">{value}</p>
        </div>
        <div className={`${colorClasses[color]} rounded-lg p-3`}>
          <Icon size={28} className="text-white" />
        </div>
      </div>
    </div>
  );
};
