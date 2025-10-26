'use client';

import { Download, Printer } from 'lucide-react';

export function DownloadButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={handlePrint}
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        <Download className="w-5 h-5" />
        Download as PDF
      </button>
      <button
        onClick={handlePrint}
        className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-purple-600 text-purple-600 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
      >
        <Printer className="w-5 h-5" />
        Print
      </button>
    </div>
  );
}
