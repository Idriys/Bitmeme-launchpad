import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Rocket, Wallet, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-white font-bold text-xl hover:text-blue-200">
            <Rocket size={28} />
            <span>BitMeme LaunchPad</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-blue-200 transition">Home</Link>
            <Link to="/launchpads" className="text-white hover:text-blue-200 transition">Launchpads</Link>
            <Link to="/create" className="text-white hover:text-blue-200 transition">Create</Link>
            <Link to="/faq" className="text-white hover:text-blue-200 transition">FAQ</Link>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/dashboard" className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded text-white transition">
                  <Wallet size={18} />
                  <span>Dashboard</span>
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center space-x-2 bg-red-500 hover:bg-red-700 px-4 py-2 rounded text-white transition"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-white hover:text-blue-200 transition">Login</Link>
                <Link to="/register" className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded text-white transition">Register</Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block text-white hover:text-blue-200 py-2">Home</Link>
            <Link to="/launchpads" className="block text-white hover:text-blue-200 py-2">Launchpads</Link>
            <Link to="/create" className="block text-white hover:text-blue-200 py-2">Create</Link>
            <Link to="/faq" className="block text-white hover:text-blue-200 py-2">FAQ</Link>
            {user ? (
              <>
                <Link to="/dashboard" className="block text-white hover:text-blue-200 py-2">Dashboard</Link>
                <button onClick={logout} className="block text-white hover:text-blue-200 py-2 w-full text-left">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="block text-white hover:text-blue-200 py-2">Login</Link>
                <Link to="/register" className="block text-white hover:text-blue-200 py-2">Register</Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
