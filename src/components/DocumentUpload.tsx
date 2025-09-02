import React, { useRef, useState } from 'react';
import { Upload, FileText, X } from 'lucide-react';

interface DocumentUploadProps {
  onFileUpload: (file: File) => void;
}

const DocumentUpload: React.FC<DocumentUploadProps> = ({ onFileUpload }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
    
    if (allowedTypes.includes(file.type)) {
      onFileUpload(file);
    } else {
      alert('Please upload a PDF, DOCX, or TXT file.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors">
        <div
          className={`p-12 text-center ${dragActive ? 'bg-blue-50' : ''}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Upload className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Upload Your Legal Document
          </h3>
          
          <p className="text-gray-600 mb-8">
            Drag and drop your document here, or click to browse. 
            Supports PDF, DOCX, and TXT formats.
          </p>
          
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg shadow-md hover:shadow-lg"
          >
            Choose File
          </button>
          
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.docx,.txt"
            onChange={handleChange}
            className="hidden"
          />
          
          <div className="mt-8 flex justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <FileText className="w-4 h-4 mr-1" />
              PDF
            </div>
            <div className="flex items-center">
              <FileText className="w-4 h-4 mr-1" />
              DOCX
            </div>
            <div className="flex items-center">
              <FileText className="w-4 h-4 mr-1" />
              TXT
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h4 className="font-semibold text-gray-900 mb-3">Security & Privacy</h4>
          <p className="text-gray-600 text-sm">
            Your documents are processed securely and are not stored on our servers. 
            All analysis is performed in real-time with enterprise-grade encryption.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h4 className="font-semibold text-gray-900 mb-3">AI-Powered Analysis</h4>
          <p className="text-gray-600 text-sm">
            Leveraging IBM Watson and Granite models for accurate clause interpretation, 
            entity recognition, and document classification.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload;