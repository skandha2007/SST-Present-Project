import React from 'react';
import { DollarSign, Clock, Shield, Users, TrendingUp, CheckCircle } from 'lucide-react';

const BusinessBenefits: React.FC = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Reduce legal review costs by 60-80%",
      details: [
        "Less time spent on routine document analysis",
        "Fewer external legal consultations needed",
        "Reduced risk of costly contract oversights"
      ],
      color: "green"
    },
    {
      icon: Clock,
      title: "Time Efficiency",
      description: "Process documents 10x faster",
      details: [
        "Instant document classification and summary",
        "Automated clause extraction and simplification",
        "Quick identification of key terms and obligations"
      ],
      color: "blue"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Identify potential issues before they become problems",
      details: [
        "Automated risk assessment for all contracts",
        "Highlight unfavorable terms and conditions",
        "Track compliance obligations and deadlines"
      ],
      color: "red"
    },
    {
      icon: Users,
      title: "Team Empowerment",
      description: "Enable non-legal staff to understand contracts",
      details: [
        "Plain English translations of legal jargon",
        "Clear visualization of document structure",
        "Accessible insights for all team members"
      ],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: "bg-green-100 text-green-600",
      blue: "bg-blue-100 text-blue-600",
      red: "bg-red-100 text-red-600",
      purple: "bg-purple-100 text-purple-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Business Benefits & ROI</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          ClauseWise delivers measurable value across multiple dimensions of our business operations
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center mb-4">
              <div className={`p-3 rounded-full ${getColorClasses(benefit.color)}`}>
                <benefit.icon className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
            <ul className="space-y-2">
              {benefit.details.map((detail, detailIndex) => (
                <li key={detailIndex} className="flex items-start text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ROI Projection */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl text-white p-8">
        <h2 className="text-2xl font-bold mb-6">Projected Return on Investment</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">75%</div>
            <div className="text-yellow-100">Time Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">$50K+</div>
            <div className="text-yellow-100">Annual Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">3x</div>
            <div className="text-yellow-100">Document Throughput</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">90%</div>
            <div className="text-yellow-100">Accuracy Improvement</div>
          </div>
        </div>
      </div>

      {/* Competitive Advantage */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Competitive Advantage</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <TrendingUp className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                <span className="text-gray-700">Faster turnaround times for contract reviews</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                <span className="text-gray-700">More transparent and understandable legal advice</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                <span className="text-gray-700">Competitive pricing due to efficiency gains</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Internal Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <TrendingUp className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                <span className="text-gray-700">Higher job satisfaction through meaningful work</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                <span className="text-gray-700">Skill development in AI-assisted legal work</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                <span className="text-gray-700">Position as industry innovation leaders</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessBenefits;