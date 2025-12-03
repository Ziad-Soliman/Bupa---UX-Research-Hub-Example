import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { TREND_DATA } from '../constants';
import { TrendingUp } from 'lucide-react';

const TrendAnalysis: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col h-full">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-500" />
            12-Month Evolution
          </h2>
          <p className="text-sm text-slate-500">Tracking Sentiment & Trust (Continuous Research)</p>
        </div>
        <div className="flex gap-2">
             <span className="text-xs font-semibold px-2 py-1 rounded bg-blue-50 text-bupa-blue">NPS</span>
             <span className="text-xs font-semibold px-2 py-1 rounded bg-emerald-50 text-emerald-600">Trust</span>
        </div>
      </div>

      <div className="flex-1 min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={TREND_DATA}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorTrust" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorNps" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0079C1" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#0079C1" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="month" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Area 
                type="monotone" 
                dataKey="trust" 
                stroke="#10b981" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorTrust)" 
                name="Brand Trust"
            />
            <Area 
                type="monotone" 
                dataKey="nps" 
                stroke="#0079C1" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorNps)" 
                name="NPS Score"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TrendAnalysis;