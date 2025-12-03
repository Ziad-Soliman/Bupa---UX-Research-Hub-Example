import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip } from 'recharts';
import { RADAR_DATA } from '../constants';

const RadarView: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col h-full">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-slate-800">The Arena: Competitive Benchmarking</h2>
        <p className="text-sm text-slate-500">Cross-metrics comparison based on last 100 sessions.</p>
      </div>
      
      <div className="flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={RADAR_DATA}>
            <PolarGrid stroke="#e2e8f0" />
            <PolarAngleAxis dataKey="metric" tick={{ fill: '#64748b', fontSize: 12 }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            
            <Radar
              name="Bupa (Target)"
              dataKey="Bupa"
              stroke="#0079C1"
              strokeWidth={3}
              fill="#0079C1"
              fillOpacity={0.2}
            />
            <Radar
              name="Tawuniya"
              dataKey="Tawuniya"
              stroke="#D4AF37"
              strokeWidth={2}
              fill="#D4AF37"
              fillOpacity={0.1}
            />
            <Radar
              name="Al Nahdi"
              dataKey="AlNahdi"
              stroke="#EB008B"
              strokeWidth={2}
              fill="#EB008B"
              fillOpacity={0.1}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
        <p className="text-xs text-bupa-blue font-medium">
          <span className="font-bold">Insight:</span> Bupa leads in "Brand Trust" but lags significantly in "Speed" and "Ease of Login" compared to Tawuniya.
        </p>
      </div>
    </div>
  );
};

export default RadarView;