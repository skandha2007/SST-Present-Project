import React, { useState } from 'react';
import { Upload, Brain, FileText, Users, CheckCircle, ArrowRight, Play } from 'lucide-react';

const WorkflowDemo: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = [
    {
      icon: Upload,
      title: "1. Document Upload",
      description: "Staff member uploads contract (PDF, DOCX, or TXT)",
      details: "Simply drag and drop or click to upload. System accepts all common legal document formats.",
      color: "blue"
    },
    {
      icon: Brain,
      title: "2. AI Processing",
      description: "IBM Watson & Granite analyze the document",
      details: "Advanced AI models process the text, understanding context and legal terminology.",
      color: "purple"
    },
    {
      icon: FileText,
      title: "3. Clause Breakdown",
      description: "Complex clauses are simplified into plain English",
      details: "Each clause is rewritten in clear, understandable language while preserving legal meaning.",
      color: "green"
    },
    {
      icon: Users,
      title: "4. Entity Extraction",
      description: "Key information is automatically identified",
      details: "Names, dates, obligations, and monetary values are highlighted and categorized.",
      color: "orange"
    },
    {
      icon: CheckCircle,
      title: "5. Results & Export",
      description: "Comprehensive analysis report is generated",
      details: "Team receives detailed insights, risk assessment, and exportable summary report.",
      color: "green"
    }
  ];

  const playDemo = () => {
    setIsPlaying(true);
    setCurrentStep(0);
    
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);
  };

  const getStepColor = (color: string) => {
    const colors = {
      blue: "bg-blue-600",
      purple: "bg-purple-600",
      green: "bg-green-600",
      orange: "bg-orange-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">How ClauseWise Works</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          A step-by-step walkthrough of the document analysis process your team will use daily
        </p>
        <button
          onClick={playDemo}
          disabled={isPlaying}
          className="flex items-center mx-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          <Play className="w-5 h-5 mr-2" />
          {isPlaying ? 'Demo Running...' : 'Play Workflow Demo'}
        </button>
      </div>

      {/* Workflow Steps */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className={`flex items-start p-6 rounded-lg border-2 transition-all duration-500 ${
              isPlaying && currentStep >= index 
                ? 'border-blue-500 bg-blue-50 shadow-md' 
                : 'border-gray-200 bg-gray-50'
            }`}>
              <div className={`p-3 rounded-full mr-6 transition-all duration-500 ${
                isPlaying && currentStep >= index 
                  ? getStepColor(step.color)
                  : 'bg-gray-300'
              }`}>
                <step.icon className={`w-6 h-6 ${
                  isPlaying && currentStep >= index ? 'text-white' : 'text-gray-500'
                }`} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-700 mb-3">{step.description}</p>
                <p className="text-sm text-gray-600">{step.details}</p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className={`w-6 h-6 ml-4 transition-colors duration-500 ${
                  isPlaying && currentStep > index ? 'text-blue-600' : 'text-gray-300'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Before vs After */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Before ClauseWise</h3>
          <ul className="space-y-3 text-red-700">
            <li>• Manual reading of entire 50-page contracts</li>
            <li>• 3-4 hours per document review</li>
            <li>• Risk of missing critical clauses</li>
            <li>• Difficulty explaining terms to clients</li>
            <li>• Inconsistent analysis quality</li>
            <li>• High dependency on senior legal staff</li>
          </ul>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-green-800 mb-4">After ClauseWise</h3>
          <ul className="space-y-3 text-green-700">
            <li>• AI provides instant document summary</li>
            <li>• 15-30 minutes for comprehensive analysis</li>
            <li>• Guaranteed identification of all key clauses</li>
            <li>• Plain English explanations ready for clients</li>
            <li>• Consistent, high-quality analysis every time</li>
            <li>• Junior staff can handle complex documents</li>
          </ul>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Success Metrics We'll Track</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">Document Processing Time</div>
            <div className="text-sm text-gray-600">Target: 75% reduction</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-2">Client Satisfaction</div>
            <div className="text-sm text-gray-600">Target: 95% positive feedback</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-2">Team Productivity</div>
            <div className="text-sm text-gray-600">Target: 3x more documents</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-2xl font-bold text-orange-600 mb-2">Error Reduction</div>
            <div className="text-sm text-gray-600">Target: 90% fewer oversights</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowDemo;