import React, { useState } from 'react';
import { 
  FileText, Users, Calendar, DollarSign, AlertTriangle, 
  CheckCircle, Download, ArrowLeft, Eye, EyeOff 
} from 'lucide-react';
import type { DocumentAnalysis } from '../App';

interface AnalysisResultsProps {
  analysis: DocumentAnalysis;
  fileName: string;
  onNewAnalysis: () => void;
}

const AnalysisResults: React.FC<AnalysisResultsProps> = ({ analysis, fileName, onNewAnalysis }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'clauses' | 'entities'>('overview');
  const [showOriginal, setShowOriginal] = useState<Record<string, boolean>>({});

  const toggleClauseView = (clauseId: string) => {
    setShowOriginal(prev => ({
      ...prev,
      [clauseId]: !prev[clauseId]
    }));
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'high': return 'border-red-500 bg-red-50';
      case 'medium': return 'border-yellow-500 bg-yellow-50';
      case 'low': return 'border-green-500 bg-green-50';
      default: return 'border-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg mb-6">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center mb-2">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Analysis Complete</h2>
              </div>
              <p className="text-gray-600">
                <span className="font-medium">{fileName}</span> • 
                {analysis.documentType.type} • 
                {(analysis.documentType.confidence * 100).toFixed(1)}% confidence
              </p>
            </div>
            <div className="flex space-x-3">
              <button 
                onClick={onNewAnalysis}
                className="flex items-center px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                New Analysis
              </button>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </button>
            </div>
          </div>
        </div>

        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'overview' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('clauses')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'clauses' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Clause Analysis
          </button>
          <button
            onClick={() => setActiveTab('entities')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'entities' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Entities & Terms
          </button>
        </div>
      </div>

      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Document Classification</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Document Type:</span>
                  <span className="font-medium text-gray-900">{analysis.documentType.type}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Confidence:</span>
                  <span className="font-medium text-green-600">
                    {(analysis.documentType.confidence * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Risk Level:</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(analysis.riskLevel)}`}>
                    {analysis.riskLevel.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{analysis.clauses.length}</div>
                  <div className="text-sm text-gray-600">Clauses Found</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {analysis.entities.parties.length + analysis.entities.legalTerms.length}
                  </div>
                  <div className="text-sm text-gray-600">Entities Identified</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Summary</h3>
            <p className="text-gray-700 leading-relaxed">{analysis.summary}</p>
          </div>
        </div>
      )}

      {activeTab === 'clauses' && (
        <div className="space-y-4">
          {analysis.clauses.map((clause) => (
            <div key={clause.id} className={`bg-white rounded-xl shadow-sm border-l-4 ${getImportanceColor(clause.importance)}`}>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{clause.category}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      clause.importance === 'high' ? 'bg-red-100 text-red-700' :
                      clause.importance === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {clause.importance.toUpperCase()} IMPORTANCE
                    </span>
                  </div>
                  <button
                    onClick={() => toggleClauseView(clause.id)}
                    className="flex items-center px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    {showOriginal[clause.id] ? (
                      <>
                        <EyeOff className="w-4 h-4 mr-1" />
                        Show Simplified
                      </>
                    ) : (
                      <>
                        <Eye className="w-4 h-4 mr-1" />
                        Show Original
                      </>
                    )}
                  </button>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-800 leading-relaxed">
                    {showOriginal[clause.id] ? clause.original : clause.simplified}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'entities' && (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Parties</h3>
              </div>
              <div className="space-y-2">
                {analysis.entities.parties.map((party, index) => (
                  <div key={index} className="px-3 py-2 bg-blue-50 rounded-lg text-blue-800">
                    {party}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Important Dates</h3>
              </div>
              <div className="space-y-2">
                {analysis.entities.dates.map((date, index) => (
                  <div key={index} className="px-3 py-2 bg-green-50 rounded-lg text-green-800">
                    {date}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center mb-4">
                <DollarSign className="w-6 h-6 text-yellow-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Monetary Values</h3>
              </div>
              <div className="space-y-2">
                {analysis.entities.monetaryValues.map((value, index) => (
                  <div key={index} className="px-3 py-2 bg-yellow-50 rounded-lg text-yellow-800">
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Obligations</h3>
              </div>
              <div className="space-y-2">
                {analysis.entities.obligations.map((obligation, index) => (
                  <div key={index} className="px-3 py-2 bg-purple-50 rounded-lg text-purple-800">
                    {obligation}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-gray-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Legal Terms</h3>
              </div>
              <div className="space-y-2">
                {analysis.entities.legalTerms.map((term, index) => (
                  <div key={index} className="px-3 py-2 bg-gray-50 rounded-lg text-gray-800">
                    {term}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalysisResults;