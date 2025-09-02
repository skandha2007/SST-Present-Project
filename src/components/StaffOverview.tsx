import React from 'react';
import { Brain, FileText, Users, Target, Lightbulb } from 'lucide-react';

const StaffOverview: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white p-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold mb-4">
            Introducing ClauseWise: Our AI Legal Document Analyzer
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Revolutionizing how we handle legal document analysis with IBM Watson and Granite AI technology
          </p>
          <div className="flex items-center space-x-4 text-blue-100">
            <div className="flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              <span>Multi-Format Support</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>Team Collaboration</span>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-center mb-6">
          <Target className="w-8 h-8 text-red-500 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">The Challenge We're Solving</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Pain Points:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Manual review of legal documents takes 2-4 hours per contract</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Complex legal language creates confusion and delays</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Risk of missing critical clauses or obligations</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Inconsistent document classification and filing</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">ClauseWise Solution:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Automated analysis reduces review time to 15-30 minutes</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Plain English translations of complex clauses</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>AI highlights all critical terms and obligations</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Automatic document categorization and risk assessment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-center mb-6">
          <Lightbulb className="w-8 h-8 text-yellow-500 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">Core Features Your Team Will Use</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Clause Simplification</h3>
            <p className="text-gray-600 text-sm">
              Converts "legalese" into plain English that anyone on the team can understand quickly.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Entity Detection</h3>
            <p className="text-gray-600 text-sm">
              Automatically finds and highlights important names, dates, money amounts, and key terms.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Document Classification</h3>
            <p className="text-gray-600 text-sm">
              Instantly identifies document types (NDA, contract, agreement) with confidence scores.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="bg-orange-100 p-3 rounded-full w-fit mb-4">
              <Shield className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Risk Assessment</h3>
            <p className="text-gray-600 text-sm">
              Evaluates potential risks and flags important obligations that need attention.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="bg-red-100 p-3 rounded-full w-fit mb-4">
              <Calendar className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Deadline Tracking</h3>
            <p className="text-gray-600 text-sm">
              Extracts all important dates and deadlines so nothing falls through the cracks.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="bg-yellow-100 p-3 rounded-full w-fit mb-4">
              <DollarSign className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Financial Impact</h3>
            <p className="text-gray-600 text-sm">
              Identifies all monetary values, penalties, and financial obligations in contracts.
            </p>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Technology Behind ClauseWise</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">AI & Machine Learning</h3>
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-800"><strong>IBM Watson:</strong> Natural language processing and understanding</span>
              </div>
              <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-800"><strong>Granite Models:</strong> Advanced text analysis and entity recognition</span>
              </div>
              <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-800"><strong>HuggingFace:</strong> Pre-trained legal document models</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Development Stack</h3>
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-green-50 rounded-lg">
                <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                <span className="text-gray-800"><strong>Python:</strong> Backend processing and AI integration</span>
              </div>
              <div className="flex items-center p-3 bg-green-50 rounded-lg">
                <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                <span className="text-gray-800"><strong>React/TypeScript:</strong> Modern, responsive user interface</span>
              </div>
              <div className="flex items-center p-3 bg-green-50 rounded-lg">
                <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                <span className="text-gray-800"><strong>Cloud Infrastructure:</strong> Scalable and secure deployment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Impact */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl text-white p-8">
        <h2 className="text-2xl font-bold mb-6">Impact on Your Daily Work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-white bg-opacity-20 p-4 rounded-full w-fit mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Save 75% Time</h3>
            <p className="text-green-100">
              Reduce document review from hours to minutes with automated analysis
            </p>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-20 p-4 rounded-full w-fit mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Increase Accuracy</h3>
            <p className="text-green-100">
              AI never misses important clauses or deadlines that humans might overlook
            </p>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-20 p-4 rounded-full w-fit mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Boost Productivity</h3>
            <p className="text-green-100">
              Handle more contracts and focus on high-value strategic work
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffOverview;