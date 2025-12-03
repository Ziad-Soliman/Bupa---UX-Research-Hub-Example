import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { BAR_DATA } from '../constants';
import { Clock, AlertTriangle } from 'lucide-react';

const SpeedComparison: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col h-full">
      <div className="mb-6 flex justify-between items-start">
        <div>
          <h2 className="text-lg font-bold text-slate-800 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-slate-400" />
            Speed to Completion
          </h2>
          <p className="text-sm text-slate-500">Average time (seconds) per core task.</p>
        </div>
      </div>

      <div className="flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={BAR_DATA}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
            barCategoryGap={20}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
            <XAxis type="number" hide />
            <YAxis 
              dataKey="task" 
              type="category" 
              width={100} 
              tick={{ fill: '#475569', fontSize: 13, fontWeight: 500 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip 
              cursor={{fill: '#f8fafc'}}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            
            <Bar dataKey="Bupa" name="Bupa App" fill="#0079C1" radius={[0, 4, 4, 0]} barSize={12} />
            <Bar dataKey="Tawuniya" name="Tawuniya (Benchmark)" fill="#cbd5e1" radius={[0, 4, 4, 0]} barSize={12} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex items-start p-3 bg-rose-50 rounded-lg border border-rose-100">
        <AlertTriangle className="w-5 h-5 text-rose-500 mr-2 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-bold text-rose-700">Critical Friction Detected</p>
          <p className="text-xs text-rose-600 mt-1">
            "Submit Claim" takes <span className="font-bold">60% longer</span> on Bupa than Tawuniya. Video analysis indicates user confusion at the "IBAN Entry" step.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpeedComparison;