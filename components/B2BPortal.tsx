import React from 'react';
import { Building2, UploadCloud, Users, AlertCircle, CheckCircle2 } from 'lucide-react';
import KPICard from './KPICard';
import { B2B_METRICS } from '../constants';

const B2BPortal: React.FC = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
       
       <div className="bg-slate-900 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
           <div className="relative z-10">
               <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
                   <Building2 className="w-8 h-8 text-emerald-400" />
                   Corporate Decision Makers
               </h2>
               <p className="text-slate-300 max-w-xl">
                   Analysis of the HR Manager experience, focusing on policy management, bulk uploads, and claims approval workflows.
               </p>
           </div>
           {/* Decorative elements */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
       </div>

       {/* KPIs */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {B2B_METRICS.map((metric, idx) => (
               <KPICard key={idx} data={metric} />
           ))}
       </div>

       {/* Detailed Workflow Analysis */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           
           {/* Upload Flow Analysis */}
           <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
               <h3 className="font-bold text-lg text-slate-800 mb-6 flex items-center">
                   <UploadCloud className="w-5 h-5 text-bupa-blue mr-2" />
                   Bulk Employee Upload Friction
               </h3>
               
               <div className="space-y-6">
                   <div className="relative pl-8 pb-6 border-l-2 border-slate-200">
                       <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white"></div>
                       <h4 className="text-sm font-bold text-slate-700">Step 1: Download Template</h4>
                       <p className="text-xs text-slate-500 mt-1">100% Success Rate. User easily finds the CSV template.</p>
                   </div>
                   
                   <div className="relative pl-8 pb-6 border-l-2 border-rose-200">
                       <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-rose-500 border-2 border-white animate-pulse"></div>
                       <h4 className="text-sm font-bold text-rose-700">Step 2: Fill Data & Upload</h4>
                       <p className="text-xs text-slate-500 mt-1">
                           <span className="font-bold text-rose-600">High Failure:</span> 45% of HR Managers upload a file that gets rejected due to "Date Format" mismatch (DD/MM/YYYY vs MM/DD/YYYY).
                       </p>
                       <div className="mt-3 p-3 bg-rose-50 rounded text-xs text-rose-800 italic">
                           "I tried 5 times and it kept saying 'Invalid Column'. I had to call support." - HR Manager, Construction Co.
                       </div>
                   </div>

                   <div className="relative pl-8">
                       <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-300 border-2 border-white"></div>
                       <h4 className="text-sm font-bold text-slate-400">Step 3: Confirmation</h4>
                       <p className="text-xs text-slate-400 mt-1">Process abandoned by 15% of users.</p>
                   </div>
               </div>
           </div>

           {/* User Management Insight */}
           <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col">
               <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center">
                   <Users className="w-5 h-5 text-bupa-blue mr-2" />
                   Top Requested Features (Voice of Customer)
               </h3>
               
               <div className="flex-1 space-y-4">
                   {[
                       { req: "Real-time Policy Usage Dashboard", votes: 85, status: "Planned" },
                       { req: "WhatsApp Integration for VIPs", votes: 72, status: "Under Review" },
                       { req: "Simplified Invoicing Download", votes: 64, status: "Live" },
                       { req: "Dependent Deletion without Support Ticket", votes: 91, status: "Critical Priority" },
                   ].map((item, idx) => (
                       <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                           <div>
                               <p className="text-sm font-bold text-slate-700">{item.req}</p>
                               <div className="flex items-center gap-2 mt-1">
                                   <span className="text-xs text-slate-500">{item.votes} Votes</span>
                               </div>
                           </div>
                           <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                               item.status === 'Live' ? 'bg-emerald-100 text-emerald-700' :
                               item.status === 'Critical Priority' ? 'bg-rose-100 text-rose-700' :
                               'bg-blue-100 text-blue-700'
                           }`}>
                               {item.status}
                           </span>
                       </div>
                   ))}
               </div>
           </div>

       </div>
    </div>
  );
};

export default B2BPortal;