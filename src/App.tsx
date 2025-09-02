import React, { useState } from 'react';
import { FileText, Upload, Brain, Users, Calendar, DollarSign, Shield, CheckCircle } from 'lucide-react';
import Header from './components/Header';
import DocumentUpload from './components/DocumentUpload';
import AnalysisResults from './components/AnalysisResults';
import LoadingAnalysis from './components/LoadingAnalysis';

export interface DocumentAnalysis {
  documentType: {
    type: string;
    confidence: number;
  };
  clauses: Array<{
    id: string;
    original: string;
    simplified: string;
    category: string;
    importance: 'high' | 'medium' | 'low';
  }>;
  entities: {
    parties: string[];
    dates: string[];
    obligations: string[];
    monetaryValues: string[];
    legalTerms: string[];
  };
  summary: string;
  riskLevel: 'low' | 'medium' | 'high';
}

function App() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<DocumentAnalysis | null>(null);

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    setIsAnalyzing(true);
    
    // Simulate AI analysis processing
    setTimeout(() => {
      const mockAnalysis: DocumentAnalysis = {
        documentType: {
          type: 'Non-Disclosure Agreement (NDA)',
          confidence: 0.94
        },
        clauses: [
          {
            id: '1',
            original: 'The Receiving Party hereby agrees to hold and maintain in confidence all Confidential Information disclosed by the Disclosing Party and shall not disclose, reveal, or make available such Confidential Information to any third party without the prior written consent of the Disclosing Party.',
            simplified: 'You must keep all shared confidential information secret and cannot tell anyone else about it without written permission.',
            category: 'Confidentiality Obligation',
            importance: 'high'
          },
          {
            id: '2',
            original: 'This Agreement shall commence on the Effective Date and shall continue for a period of five (5) years unless earlier terminated in accordance with the provisions hereof.',
            simplified: 'This agreement starts on the effective date and lasts for 5 years, unless ended early according to the rules in this document.',
            category: 'Term and Duration',
            importance: 'medium'
          },
          {
            id: '3',
            original: 'The obligations of the Receiving Party under this Agreement shall survive termination of this Agreement and shall continue for a period of three (3) years following such termination.',
            simplified: 'Even after this agreement ends, you must still keep the information secret for 3 more years.',
            category: 'Survival Clause',
            importance: 'high'
          }
        ],
        entities: {
          parties: ['Disclosing Party', 'Receiving Party', 'TechCorp Inc.', 'John Smith'],
          dates: ['January 15, 2024', '5 years', '3 years'],
          obligations: ['Maintain confidentiality', 'Return documents', 'Non-disclosure'],
          monetaryValues: ['$50,000 penalty', '$10,000 liquidated damages'],
          legalTerms: ['Confidential Information', 'Effective Date', 'Termination', 'Liquidated Damages']
        },
        summary: 'This is a standard Non-Disclosure Agreement between TechCorp Inc. and John Smith. The agreement requires the receiving party to keep confidential information secret for 5 years during the agreement and 3 years after it ends. There are financial penalties for breaking the agreement.',
        riskLevel: 'medium'
      };
      
      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);
    }, 3000);
  };

  const handleNewAnalysis = () => {
    setUploadedFile(null);
    setAnalysis(null);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {!uploadedFile && !isAnalyzing && !analysis && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-600 p-4 rounded-full">
                  <Brain className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                ClauseWise Legal Document Analyzer
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Simplify, decode, and classify complex legal documents using advanced AI. 
                Get instant insights into contracts, agreements, and legal texts.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <FileText className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Clause Simplification</h3>
                </div>
                <p className="text-gray-600">
                  Convert complex legal language into plain English that anyone can understand.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Entity Recognition</h3>
                </div>
                <p className="text-gray-600">
                  Automatically identify parties, dates, obligations, and key terms in your documents.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Risk Assessment</h3>
                </div>
                <p className="text-gray-600">
                  Evaluate potential risks and important considerations in your legal documents.
                </p>
              </div>
            </div>

            <DocumentUpload onFileUpload={handleFileUpload} />
          </div>
        )}

        {isAnalyzing && <LoadingAnalysis fileName={uploadedFile?.name || ''} />}

        {analysis && (
          <AnalysisResults 
            analysis={analysis} 
            fileName={uploadedFile?.name || ''} 
            onNewAnalysis={handleNewAnalysis}
          />
        )}
      </main>
    </div>
  );
}

export default App;