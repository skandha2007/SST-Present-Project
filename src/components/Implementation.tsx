import React from 'react';
import { Calendar, Users, BookOpen, Settings, CheckCircle, AlertCircle } from 'lucide-react';

const Implementation: React.FC = () => {
  const phases = [
    {
      phase: "Phase 1: Foundation",
      duration: "Weeks 1-2",
      status: "current",
      tasks: [
        "Set up development environment and AI model integration",
        "Create core document processing pipeline",
        "Implement basic UI and file upload functionality",
        "Initial testing with sample legal documents"
      ]
    },
    {
      phase: "Phase 2: Core Features",
      duration: "Weeks 3-4",
      status: "upcoming",
      tasks: [
        "Develop clause simplification algorithms",
        "Implement named entity recognition",
        "Build document classification system",
        "Create analysis results dashboard"
      ]
    },
    {
      phase: "Phase 3: Training & Testing",
      duration: "Weeks 5-6",
      status: "upcoming",
      tasks: [
        "Staff training sessions and workshops",
        "Beta testing with real client documents",
        "Feedback collection and system refinement",
        "Security and compliance validation"
      ]
    },
    {
      phase: "Phase 4: Launch",
      duration: "Week 7",
      status: "upcoming",
      tasks: [
        "Full system deployment",
        "Client communication about new capabilities",
        "Performance monitoring setup",
        "Ongoing support and maintenance plan"
      ]
    }
  ];

  const trainingModules = [
    {
      title: "Introduction to AI Legal Analysis",
      duration: "30 minutes",
      audience: "All Staff",
      topics: ["What is ClauseWise?", "Benefits overview", "Basic concepts"]
    },
    {
      title: "Hands-On Document Upload",
      duration: "45 minutes",
      audience: "All Staff",
      topics: ["File formats", "Upload process", "Quality checks"]
    },
    {
      title: "Interpreting AI Results",
      duration: "60 minutes",
      audience: "Legal Team",
      topics: ["Reading analysis reports", "Understanding confidence scores", "Risk assessment"]
    },
    {
      title: "Client Communication",
      duration: "45 minutes",
      audience: "Client-Facing Staff",
      topics: ["Explaining simplified clauses", "Presenting findings", "Managing expectations"]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Implementation Roadmap</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our structured approach to rolling out ClauseWise across the organization
        </p>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Development Timeline</h2>
        <div className="space-y-6">
          {phases.map((phase, index) => (
            <div key={index} className={`border-l-4 pl-6 pb-6 ${
              phase.status === 'current' ? 'border-blue-500' : 
              phase.status === 'completed' ? 'border-green-500' : 'border-gray-300'
            }`}>
              <div className="flex items-center mb-3">
                <div className={`p-2 rounded-full mr-4 ${
                  phase.status === 'current' ? 'bg-blue-600' : 
                  phase.status === 'completed' ? 'bg-green-600' : 'bg-gray-400'
                }`}>
                  {phase.status === 'completed' ? (
                    <CheckCircle className="w-5 h-5 text-white" />
                  ) : (
                    <Calendar className="w-5 h-5 text-white" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{phase.phase}</h3>
                  <p className="text-sm text-gray-600">{phase.duration}</p>
                </div>
                {phase.status === 'current' && (
                  <span className="ml-auto px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    In Progress
                  </span>
                )}
              </div>
              <ul className="space-y-2 ml-12">
                {phase.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex items-start text-gray-700">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Training Plan */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-center mb-6">
          <BookOpen className="w-8 h-8 text-green-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">Staff Training Program</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {trainingModules.map((module, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {module.duration}
                </span>
              </div>
              <p className="text-gray-600 mb-3">
                <strong>Audience:</strong> {module.audience}
              </p>
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Topics Covered:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Roles & Responsibilities */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-center mb-6">
          <Users className="w-8 h-8 text-purple-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">Team Roles & Responsibilities</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal Team</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Review AI analysis for accuracy</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Validate simplified clause interpretations</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Handle complex edge cases</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Train junior staff on system use</span>
              </li>
            </ul>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Administrative Staff</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Upload and process routine documents</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Generate initial analysis reports</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Organize and file analyzed documents</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Coordinate with legal team on findings</span>
              </li>
            </ul>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Relations</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Present simplified analysis to clients</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Explain AI findings in client meetings</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Provide faster turnaround estimates</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Communicate value of AI-enhanced service</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Support & Resources */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white p-8">
        <h2 className="text-2xl font-bold mb-6">Support & Resources</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Available Support</h3>
            <ul className="space-y-2 text-blue-100">
              <li>• Dedicated help desk for technical issues</li>
              <li>• Weekly office hours with development team</li>
              <li>• Comprehensive user documentation</li>
              <li>• Video tutorials and best practices guide</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Success Resources</h3>
            <ul className="space-y-2 text-blue-100">
              <li>• Performance dashboards and analytics</li>
              <li>• Regular feedback sessions and improvements</li>
              <li>• Integration with existing case management</li>
              <li>• Ongoing AI model updates and enhancements</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-center mb-6">
          <Settings className="w-8 h-8 text-orange-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">Immediate Next Steps</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg">
            <CheckCircle className="w-6 h-6 text-green-600 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-900">This Week</h3>
              <p className="text-gray-700">Complete development setup and begin core feature implementation</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <AlertCircle className="w-6 h-6 text-blue-600 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-900">Next Week</h3>
              <p className="text-gray-700">Schedule individual team meetings to discuss specific roles and expectations</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <Calendar className="w-6 h-6 text-yellow-600 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-900">Month 2</h3>
              <p className="text-gray-700">Begin pilot testing with select client documents and gather feedback</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Implementation;