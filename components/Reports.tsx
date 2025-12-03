import React, { useState } from 'react';
import { FileText, Download, Printer, Filter, CheckCircle, Loader2 } from 'lucide-react';
import { REPORTS_DATA } from '../constants';
import { ReportItem } from '../types';

const Reports: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [reports, setReports] = useState<ReportItem[]>(REPORTS_DATA);

  const handleGenerateReport = () => {
    setIsGenerating(true);
    // Simulate API call/generation delay
    setTimeout(() => {
      const currentDate = new Date();
      const startDate = new Date(currentDate.getFullYear(), 0, 1);
      const days = Math.floor((currentDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000));
      const weekNumber = Math.ceil(days / 7);

      const newReport: ReportItem = {
        id: Math.random().toString(),
        title: `Week ${weekNumber} Insights: Preliminary Data`,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        type: 'Weekly',
        status: 'Ready',
        size: '1.2 MB'
      };
      setReports([newReport, ...reports]);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto animate-in fade-in duration-500 pb-20">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
           <h2 className="text-2xl font-bold text-slate-800">Intelligence Repository</h2>
           <p className="text-slate-500 mt-1">Access weekly synthesis reports and monthly executive summaries.</p>
        </div>
        <div className="flex gap-3">
            <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4 mr-2" />
                Filter
            </button>
            <button 
                onClick={handleGenerateReport}
                disabled={isGenerating}
                className="flex items-center px-4 py-2 bg-bupa-blue text-white rounded-lg text-sm font-bold hover:bg-blue-600 shadow-lg shadow-blue-500/20 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
            >
                {isGenerating ? (
                    <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Generating PDF...
                    </>
                ) : (
                    <>
                        <FileText className="w-4 h-4 mr-2" />
                        Generate New Report
                    </>
                )}
            </button>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
        <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Report Name</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date Generated</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Size</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
                {reports.map((report) => (
                    <tr key={report.id} className="hover:bg-blue-50/30 transition-colors group">
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <div className="p-2 bg-red-50 text-red-600 rounded-lg mr-3 group-hover:scale-110 transition-transform shadow-sm">
                                    <FileText className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-800">{report.title}</p>
                                    <p className="text-xs text-slate-400">PDF Document</p>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                                report.type === 'Weekly' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                                report.type === 'Monthly' ? 'bg-purple-50 text-purple-700 border-purple-100' :
                                'bg-gray-100 text-gray-700 border-gray-200'
                            }`}>
                                {report.type}
                            </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600">{report.date}</td>
                        <td className="px-6 py-4 text-sm text-slate-500 font-mono">{report.size}</td>
                        <td className="px-6 py-4">
                            <span className="inline-flex items-center text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                {report.status}
                            </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                <button className="p-2 text-slate-500 hover:text-bupa-blue hover:bg-blue-50 rounded-lg transition-colors" title="Print">
                                    <Printer className="w-4 h-4" />
                                </button>
                                <button className="p-2 text-slate-500 hover:text-bupa-blue hover:bg-blue-50 rounded-lg transition-colors" title="Download">
                                    <Download className="w-4 h-4" />
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        
        {reports.length === 0 && (
            <div className="p-12 text-center text-slate-500">
                No reports generated yet.
            </div>
        )}
      </div>

      {/* Preview Section (Visual Placeholder) */}
      <div className="mt-8 border-t border-gray-200 pt-8">
         <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
            Latest Report Preview
            <span className="text-xs font-normal text-slate-500 bg-gray-100 px-2 py-1 rounded-full">Read-only Mode</span>
         </h3>
         <div className="bg-slate-800 p-8 lg:p-12 rounded-2xl overflow-hidden shadow-inner flex justify-center relative">
             <div className="absolute inset-0 opacity-10 pattern-dots"></div>
             <div className="bg-white w-[210mm] min-h-[297mm] shadow-2xl rounded-sm p-16 transform scale-50 md:scale-75 lg:scale-90 origin-top transition-transform duration-500">
                {/* Mock PDF Content */}
                <div className="flex justify-between items-center border-b border-gray-200 pb-8 mb-10">
                    <div className="w-16 h-16 rounded overflow-hidden">
                        <img 
                            src="https://i.ibb.co/9k4sR4V9/image.png" 
                            alt="Bupa"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="text-right">
                        <h1 className="text-4xl font-bold text-slate-900 mb-2">Weekly Insights</h1>
                        <p className="text-slate-500 font-medium tracking-wide text-sm uppercase">Confidential - Internal Use Only</p>
                        <p className="text-slate-400 text-xs mt-1">Generated: {new Date().toLocaleDateString()}</p>
                    </div>
                </div>
                
                <div className="space-y-8">
                    <div>
                        <div className="h-6 bg-gray-100 w-3/4 rounded mb-2"></div>
                        <div className="h-4 bg-gray-50 w-full rounded"></div>
                    </div>
                    
                    <div>
                         <h2 className="text-xl font-bold text-bupa-blue mb-4 border-l-4 border-bupa-blue pl-3">Executive Summary</h2>
                         <div className="space-y-2 text-justify">
                             <div className="h-3 bg-gray-100 w-full rounded"></div>
                             <div className="h-3 bg-gray-100 w-full rounded"></div>
                             <div className="h-3 bg-gray-100 w-11/12 rounded"></div>
                         </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mt-12">
                        <div className="p-4 bg-blue-50 rounded border border-blue-100 h-48 flex items-center justify-center">
                            <span className="text-blue-300 font-bold">Chart: NPS Trend</span>
                        </div>
                        <div className="p-4 bg-gray-50 rounded border border-gray-200 h-48 flex items-center justify-center">
                            <span className="text-gray-300 font-bold">Chart: Task Duration</span>
                        </div>
                    </div>

                    <div className="mt-8">
                         <h2 className="text-xl font-bold text-slate-800 mb-4">Key Recommendations</h2>
                         <ul className="list-disc pl-5 space-y-3 text-slate-600">
                             <li><span className="bg-gray-100 w-64 h-4 inline-block rounded align-middle"></span></li>
                             <li><span className="bg-gray-100 w-56 h-4 inline-block rounded align-middle"></span></li>
                             <li><span className="bg-gray-100 w-72 h-4 inline-block rounded align-middle"></span></li>
                         </ul>
                    </div>
                </div>
                
                <div className="absolute bottom-12 left-16 right-16 border-t border-gray-200 pt-4 flex justify-between text-xs text-slate-400">
                    <span>Bupa Arabia UX Intelligence Hub</span>
                    <span>Page 1 of 5</span>
                </div>
             </div>
         </div>
      </div>
    </div>
  );
};

export default Reports;