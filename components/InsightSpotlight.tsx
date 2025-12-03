import React from 'react';
import { AlertTriangle, MousePointerClick, Info } from 'lucide-react';

const InsightSpotlight: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col h-full relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-50 rounded-bl-full opacity-50 -z-0 pointer-events-none"></div>

      <div className="relative z-10 mb-6">
        <div className="flex items-center gap-2 mb-1">
          <div className="p-1.5 bg-rose-100 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-lg font-bold text-slate-800">Friction Spotlight</h2>
        </div>
        <p className="text-sm text-slate-500">
          High-severity issue detected on <span className="font-semibold text-slate-700">Submit Claim</span> flow.
        </p>
      </div>

      <div className="flex-1 flex gap-6 items-center">
        
        {/* Mock Phone UI with Heatmap */}
        <div className="relative w-48 h-[300px] bg-slate-900 rounded-[2rem] border-[6px] border-slate-800 shadow-2xl flex flex-col overflow-hidden mx-auto lg:mx-0">
          {/* Status Bar */}
          <div className="h-6 bg-slate-800 w-full flex justify-between px-4 items-center">
             <div className="w-10 h-1 bg-slate-700 rounded-full"></div>
          </div>
          
          {/* App Header */}
          <div className="bg-bupa-blue h-12 flex items-center px-3">
             <div className="w-4 h-4 bg-white/20 rounded-full"></div>
             <div className="w-20 h-2 bg-white/20 rounded ml-2"></div>
          </div>

          {/* App Body Form */}
          <div className="flex-1 bg-gray-50 p-3 space-y-3 relative">
             <div className="w-full h-8 bg-white rounded border border-gray-200"></div>
             <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
             
             {/* The Problem Area: IBAN Input */}
             <div className="relative">
                <div className="w-full h-10 bg-white rounded border border-bupa-blue/30 shadow-sm flex items-center px-2">
                    <div className="w-24 h-2 bg-gray-200 rounded"></div>
                </div>
                
                {/* Heatmap Overlay - Rage Clicks */}
                <div className="absolute top-1 right-4 w-8 h-8 bg-rose-500/40 rounded-full blur-sm animate-pulse"></div>
                <div className="absolute top-3 right-6 w-6 h-6 bg-rose-500/60 rounded-full blur-md"></div>
                <div className="absolute top-2 right-2 w-10 h-10 bg-rose-500/20 rounded-full blur-lg"></div>
                
                {/* Pointer Icon */}
                <MousePointerClick className="absolute -bottom-3 right-0 text-rose-600 w-6 h-6 drop-shadow-lg transform -rotate-12 animate-bounce" />
             </div>

             <div className="w-full h-8 bg-white rounded border border-gray-200 mt-4"></div>
             <div className="w-full h-10 bg-bupa-blue rounded mt-6 opacity-50"></div>
          </div>
        </div>

        {/* Insight Text */}
        <div className="flex-1 hidden lg:block">
          <div className="space-y-4">
             <div>
                <h4 className="text-sm font-bold text-slate-700 mb-1">Issue: "The Ghost Keyboard"</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                   Users tap the IBAN field, but the keyboard dismisses immediately due to a validation conflict on the `onFocus` event.
                </p>
             </div>
             
             <div className="grid grid-cols-2 gap-3">
                <div className="bg-rose-50 p-3 rounded-lg border border-rose-100">
                    <span className="block text-xl font-bold text-rose-600">42%</span>
                    <span className="text-[10px] uppercase font-semibold text-rose-800/60">Drop-off Rate</span>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                    <span className="block text-xl font-bold text-amber-600">3.5</span>
                    <span className="text-[10px] uppercase font-semibold text-amber-800/60">Rage Clicks / User</span>
                </div>
             </div>

             <button className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
                <Info className="w-3 h-3" />
                View Technical Logs
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightSpotlight;