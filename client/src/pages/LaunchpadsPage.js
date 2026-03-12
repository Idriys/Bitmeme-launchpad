import React, { useState, useEffect } from 'react';
import { LaunchpadCard } from '../components/Card';
import { LoadingSpinner } from '../components/Common';
import { Search, Filter } from 'lucide-react';

export const LaunchpadsPage = () => {
  const [launchpads, setLaunchpads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchLaunchpads();
  }, []);

  const fetchLaunchpads = async () => {
    try {
      const response = await fetch('/api/launchpad');
      const data = await response.json();
      setLaunchpads(data.launchpads || []);
    } catch (error) {
      console.error('Error fetching launchpads:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredLaunchpads = launchpads.filter(lap => {
    const matchesSearch = lap.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lap.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || lap.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Bitcoin Meme Coin Launchpads</h1>
          <p className="text-blue-100">Discover and invest in the hottest new meme coins</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Search */}
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by name or symbol..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Filter */}
          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-gray-600" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="upcoming">Upcoming</option>
              <option value="ended">Ended</option>
            </select>
          </div>
        </div>

        {/* Launchpads Grid */}
        {loading ? (
          <LoadingSpinner />
        ) : filteredLaunchpads.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLaunchpads.map((launchpad) => (
              <LaunchpadCard key={launchpad.id} launchpad={launchpad} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No launchpads found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LaunchpadsPage;
