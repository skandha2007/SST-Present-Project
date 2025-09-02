import React from 'react';
import { Scale, Presentation } from 'lucide-react';

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
              <p className="text-xs text-gray-500">Staff Training & Overview</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Presentation className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Project Briefing</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;