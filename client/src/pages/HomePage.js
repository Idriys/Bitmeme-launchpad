import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, TrendingUp, Shield, Zap, ArrowRight } from 'lucide-react';
import { StatCard } from '../components/Card';

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Launch Your Bitcoin Meme Coin
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Bitmeme is the simplest, safest, and most user-friendly launchpad for Bitcoin meme coins. Get your token to the moon! 🚀
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/launchpads" className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:shadow-lg transition flex items-center justify-center gap-2">
                  Explore Launchpads <ArrowRight size={20} />
                </Link>
                <Link to="/create" className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg transition flex items-center justify-center gap-2">
                  Create Launchpad <Rocket size={20} />
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/logo.svg" alt="Bitmeme Logo" className="w-80 h-80 drop-shadow-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Bitmeme?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={Rocket} label="Fast Deployment" value="< 5 mins" color="blue" />
          <StatCard icon={Shield} label="Secure Contracts" value="100% Safe" color="green" />
          <StatCard icon={TrendingUp} label="Active Launchpads" value="150+" color="purple" />
          <StatCard icon={Zap} label="Total Raised" value="2500 BTC" color="orange" />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Amazing Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Simple UI', description: 'Intuitive interface designed for everyone. No crypto expertise needed!' },
              { title: 'Smart Contracts', description: 'Audited and secure smart contracts on Bitcoin network.' },
              { title: 'Fair Launch', description: 'Transparent presale mechanics to prevent rugpulls.' },
              { title: 'Community Driven', description: 'Built by the community, for the community.' },
              { title: 'Real-time Updates', description: 'Live tracking of your investments and token value.' },
              { title: '24/7 Support', description: 'Our team is always here to help you succeed.' }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Launch?</h2>
          <p className="text-xl text-blue-100 mb-8">Join hundreds of successful meme coin projects on Bitmeme</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:shadow-lg transition">
              Create Account
            </Link>
            <Link to="/launchpads" className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg transition">
              View Launchpads
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">Bitmeme</h3>
              <p className="text-sm">The ultimate Bitcoin meme coin launchpad platform.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white transition">Launchpads</a></li>
                <li><a href="#" className="hover:text-white transition">Create</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white transition">Docs</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Community</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">Discord</a></li>
                <li><a href="#" className="hover:text-white transition">Telegram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 Bitmeme. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
