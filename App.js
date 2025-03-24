import React, { useState } from 'react';
import { Book, Users, PieChart, Workflow, CheckCircle } from 'lucide-react';

const ClarkCountyPlaybook = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = {
    overview: {
      title: 'Citizen Journey Framework',
      icon: <Workflow className="w-12 h-12 text-blue-600" />,
      content: (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-blue-800">Purpose</h3>
            <p>A comprehensive guide to map, evaluate, and optimize citizen interactions with public services.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-blue-800">Core Objectives</h3>
            <ul className="list-disc pl-5">
              <li>Standardize citizen journey mapping</li>
              <li>Identify friction points</li>
              <li>Provide actionable methodologies</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-blue-800">Key Stages</h3>
            <ol className="list-decimal pl-5">
              <li>Awareness</li>
              <li>Consideration</li>
              <li>Application</li>
              <li>Service Delivery</li>
              <li>Post-Service Feedback</li>
            </ol>
          </div>
        </div>
      )
    },
    methodology: {
      title: 'Methodology Selection',
      icon: <PieChart className="w-12 h-12 text-green-600" />,
      content: (
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-green-800">Methodology Considerations</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-3">Key Factors</h4>
              <ul className="space-y-3">
                <li>• Primary Goal Assessment</li>
                <li>• Data Type Selection</li>
                <li>• Customer Involvement Level</li>
                <li>• Resource Availability</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3">Research Methods</h4>
              <ul className="space-y-3">
                <li>• Behavioral Ethnography</li>
                <li>• Focused Interviews</li>
                <li>• Real-Time Observations</li>
                <li>• Surveys & Analytics</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    personas: {
      title: 'Citizen Personas',
      icon: <Users className="w-12 h-12 text-purple-600" />,
      content: (
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-purple-800">Persona Development</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-3">Key Components</h4>
              <ul className="space-y-3">
                <li>• Demographics</li>
                <li>• Motivations</li>
                <li>• Pain Points</li>
                <li>• Service Interaction Preferences</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3">Template Fields</h4>
              <ul className="space-y-3">
                <li>• Name</li>
                <li>• Age</li>
                <li>• Service Needs</li>
                <li>• Preferred Channels</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        <header className="flex items-center mb-12 bg-white rounded-lg shadow-md p-6">
          <img 
            src="/api/placeholder/100/100" 
            alt="Clark County Logo" 
            className="w-24 h-24 mr-6 rounded-full"
          />
          <div>
            <h1 className="text-4xl font-bold text-blue-900">Clark County</h1>
            <p className="text-gray-600">Citizen Journey Mapping Playbook</p>
          </div>
        </header>

        <nav className="mb-8 flex space-x-4">
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`
                flex items-center space-x-2 px-4 py-2 rounded-lg
                ${activeSection === key 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'}
              `}
            >
              {sections[key].icon}
              <span>{sections[key].title}</span>
            </button>
          ))}
        </nav>

        <main>
          {sections[activeSection].content}
        </main>

        <footer className="mt-12 bg-white p-6 rounded-lg shadow-md text-center">
          <p className="flex items-center justify-center">
            <CheckCircle className="mr-2 text-green-600" />
            Confidential Document - Clark County Government
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ClarkCountyPlaybook;
