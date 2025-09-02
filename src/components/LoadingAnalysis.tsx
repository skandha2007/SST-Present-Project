import React from 'react';
import { Brain, FileText, Users, Calendar, DollarSign, Shield } from 'lucide-react';

interface LoadingAnalysisProps {
  fileName: string;
}

const LoadingAnalysis: React.FC<LoadingAnalysisProps> = ({ fileName }) => {
  const steps = [
    { icon: FileText, label: 'Document Processing', description: 'Extracting text and structure' },
    { icon: Brain, label: 'AI Analysis', description: 'IBM Watson & Granite processing' },
    { icon: Users, label: 'Entity Recognition', description: 'Identifying parties and terms' },
    { icon: Calendar, label: 'Clause Extraction', description: 'Breaking down clauses' },
    { icon: DollarSign, label: 'Risk Assessment', description: 'Evaluating obligations' },
    { icon: Shield, label: 'Final Review', description: 'Compiling results' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 p-4 rounded-full animate-pulse">
              <Brain className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Analyzing Document
          </h2>
          <p className="text-gray-600">
            Processing <span className="font-medium">{fileName}</span> with AI
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center p-4 rounded-lg border border-gray-100 bg-gray-50">
              <div className={`p-2 rounded-full mr-4 ${
                index <= 2 ? 'bg-blue-600' : 'bg-gray-300'
              } transition-colors duration-500`}>
                <step.icon className={`w-5 h-5 ${
                  index <= 2 ? 'text-white' : 'text-gray-500'
                }`} />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{step.label}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
              <div className={`w-3 h-3 rounded-full ${
                index <= 2 ? 'bg-green-500' : 'bg-gray-300'
              } transition-colors duration-500`} />
            </div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-3"></div>
            <p className="text-blue-800 font-medium">
              AI models are processing your document... This may take a few moments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnalysis;