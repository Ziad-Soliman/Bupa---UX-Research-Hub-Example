import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import { KPIData } from '../types';

interface KPICardProps {
  data: KPIData;
}

const KPICard: React.FC<KPICardProps> = ({ data }) => {
  const isUp = data.trend === 'up';
  const isNeutral = data.trend === 'neutral';
  
  // Logic: Sometimes Up is bad (e.g. Time on Task). 
  // We use the 'status' field to determine color.
  
  const getStatusColor = () => {
    switch (data.status) {
      case 'success': return 'text-emerald-600 bg-emerald-50';
      case 'warning': return 'text-amber-600 bg-amber-50';
      case 'danger': return 'text-rose-600 bg-rose-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  const statusColorClass = getStatusColor();

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wide">{data.label}</h3>
        <span className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${statusColorClass}`}>
          {isNeutral ? <Minus className="w-3 h-3 mr-1" /> : isUp ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
          {Math.abs(data.change)}%
        </span>
      </div>
      <div className="flex items-baseline mt-2">
        <span className="text-3xl font-bold text-slate-800">{data.value}</span>
      </div>
      {data.subtext && (
        <p className="text-xs text-slate-400 mt-2 font-medium">
          {data.subtext}
        </p>
      )}
    </div>
  );
};

export default KPICard;