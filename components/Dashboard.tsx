import React, { useState } from 'react';
import { KPI_METRICS } from '../constants';
import { FeedbackItem } from '../types';
import KPICard from './KPICard';
import RadarView from './RadarView';
import SpeedComparison from './SpeedComparison';
import VideoLab from './VideoLab';
import TrendAnalysis from './TrendAnalysis';
import InsightSpotlight from './InsightSpotlight';
import SessionPlayerModal from './SessionPlayerModal';

interface DashboardProps {
    currentSegment: string;
}

const Dashboard: React.FC<DashboardProps> = ({ currentSegment }) => {
  const [selectedSession, setSelectedSession] = useState<FeedbackItem | null>(null);

  return (
    <main className="p-4 sm:p-6 max-w-[1920px] mx-auto space-y-6 pb-20 animate-in fade-in duration-500">
      
      {/* Section A: Executive Pulse (KPIs) */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {KPI_METRICS.map((kpi, index) => (
          <KPICard key={index} data={kpi} />
        ))}
      </section>

      {/* Section B: Charts & Visuals */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Benchmarking (Radar + Speed) */}
        <div className="lg:col-span-8 flex flex-col gap-6 w-full">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                 <div className="min-h-[380px] w-full">
                    <RadarView />
                 </div>
                 <div className="min-h-[380px] w-full">
                    <SpeedComparison />
                 </div>
             </div>
             {/* New Trend Analysis Chart */}
             <div className="min-h-[380px] w-full">
                 <TrendAnalysis />
             </div>
        </div>

        {/* Right Column: Qualitative & Deep Dive */}
        <div className="lg:col-span-4 flex flex-col gap-6 w-full h-full">
            {/* The Video Lab Feed */}
            <div className="min-h-[450px] lg:h-[450px]">
                <VideoLab onPlaySession={setSelectedSession} />
            </div>
            
            {/* Friction Spotlight (Rage Click Visual) */}
            <div className="flex-1 min-h-[350px]">
                <InsightSpotlight />
            </div>
        </div>
      </section>

      {/* Decorative Footer Area for Proposal Context */}
      <section className="mt-8 p-8 rounded-xl bg-gradient-to-r from-slate-900 to-bupa-dark text-white flex flex-col md:flex-row items-center justify-between shadow-xl border border-slate-700/50">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold flex items-center gap-2">
            Ready to launch the "Always-On" Program?
            <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">Phase 1 Approved</span>
          </h3>
          <p className="text-slate-300 text-sm mt-2 max-w-xl leading-relaxed">
            This dashboard demonstrates our capability to visualize Bupa's performance against Tawuniya and Al Nahdi without requiring any SDK installation.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg text-sm font-medium transition-colors border border-white/10 backdrop-blur-sm">
            View Full Proposal
          </button>
          <button className="px-6 py-3 bg-white text-bupa-blue hover:bg-blue-50 rounded-lg text-sm font-bold shadow-lg shadow-black/20 transition-all transform hover:-translate-y-0.5">
            Launch Pilot
          </button>
        </div>
      </section>

      {/* Modals */}
      <SessionPlayerModal 
        isOpen={!!selectedSession} 
        session={selectedSession} 
        onClose={() => setSelectedSession(null)} 
      />
    </main>
  );
};

export default Dashboard;