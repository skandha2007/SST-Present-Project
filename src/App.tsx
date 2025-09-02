import React, { useState } from 'react';
import { 
  FileText, Users, Clock, Target, TrendingUp, Shield, 
  CheckCircle, ArrowRight, Briefcase, DollarSign, Zap 
} from 'lucide-react';
import Header from './components/Header';
import StaffOverview from './components/StaffOverview';
import BusinessBenefits from './components/BusinessBenefits';
import WorkflowDemo from './components/WorkflowDemo';
import Implementation from './components/Implementation';

function App() {
  const [activeSection, setActiveSection] = useState<'overview' | 'benefits' | 'workflow' | 'implementation'>('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Navigation */}
          <div className="bg-white rounded-xl shadow-sm mb-8 p-2">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveSection('overview')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeSection === 'overview' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Project Overview
              </button>
              <button
                onClick={() => setActiveSection('benefits')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeSection === 'benefits' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Business Benefits
              </button>
              <button
                onClick={() => setActiveSection('workflow')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeSection === 'workflow' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                How It Works
              </button>
              <button
                onClick={() => setActiveSection('implementation')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeSection === 'implementation' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Implementation Plan
              </button>
            </div>
          </div>

          {/* Content Sections */}
          {activeSection === 'overview' && <StaffOverview />}
          {activeSection === 'benefits' && <BusinessBenefits />}
          {activeSection === 'workflow' && <WorkflowDemo />}
          {activeSection === 'implementation' && <Implementation />}
        </div>
      </main>
    </div>
  );
}

export default App;