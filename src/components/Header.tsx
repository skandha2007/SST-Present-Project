import React from 'react';
import { Scale, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ClauseWise</h1>
              <p className="text-xs text-gray-500">Powered by IBM Watson & Granite</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Analyze
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              History
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Sign In
            </button>
          </nav>
          
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;