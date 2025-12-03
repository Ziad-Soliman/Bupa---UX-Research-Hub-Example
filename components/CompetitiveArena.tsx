import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { RADAR_DATA, FEATURE_MATRIX, BAR_DATA } from '../constants';
import { Check, X, Minus, Trophy, Zap, ShieldCheck } from 'lucide-react';

const CompetitiveArena: React.FC = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-amber-500" />
            The Arena: Competitive Benchmarking
        </h2>
        <p className="text-slate-500 mt-1">Deep-dive comparison against Tawuniya, Al Nahdi, and Fakeeh based on 150+ user sessions.</p>
      </div>

      {/* Top Row: Visual Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Detailed Radar */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-[500px] flex flex-col">
              <h3 className="font-bold text-lg text-slate-800 mb-4">Holistic Experience Score</h3>
              <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={RADAR_DATA}>
                        <PolarGrid stroke="#e2e8f0" />
                        <PolarAngleAxis dataKey="metric" tick={{ fill: '#64748b', fontSize: 13, fontWeight: 600 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                        <Radar name="Bupa" dataKey="Bupa" stroke="#0079C1" strokeWidth={3} fill="#0079C1" fillOpacity={0.1} />
                        <Radar name="Tawuniya" dataKey="Tawuniya" stroke="#D4AF37" strokeWidth={2} fill="#D4AF37" fillOpacity={0.05} />
                        <Radar name="Al Nahdi" dataKey="AlNahdi" stroke="#EB008B" strokeWidth={2} fill="#EB008B" fillOpacity={0.05} />
                        <Legend />
                        <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                    </RadarChart>
                </ResponsiveContainer>
              </div>
          </div>

          {/* Speed Comparison - Expanded */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-[500px] flex flex-col">
               <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center">
                   <Zap className="w-5 h-5 text-amber-500 mr-2" />
                   Speed to Completion (Seconds)
               </h3>
               <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={BAR_DATA} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }} barSize={20}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                        <XAxis type="number" />
                        <YAxis dataKey="task" type="category" width={100} tick={{fontSize: 12, fontWeight: 500}} />
                        <Tooltip cursor={{fill: 'transparent'}} />
                        <Legend />
                        <Bar dataKey="Bupa" fill="#0079C1" radius={[0, 4, 4, 0]} name="Bupa" />
                        <Bar dataKey="Tawuniya" fill="#cbd5e1" radius={[0, 4, 4, 0]} name="Tawuniya" />
                    </BarChart>
                </ResponsiveContainer>
               </div>
               <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 mt-4 text-sm text-amber-800">
                   <strong>Gap Analysis:</strong> Bupa is 40% slower on "Submit Claim" tasks primarily due to document upload latency and UI validation errors.
               </div>
          </div>
      </div>

      {/* Feature Matrix Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
              <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-bupa-blue" />
                  Feature Parity Matrix
              </h3>
              <span className="text-xs font-medium text-slate-500">Updated: Today</span>
          </div>
          
          <div className="overflow-x-auto">
              <table className="w-full text-center">
                  <thead>
                      <tr className="bg-white border-b border-gray-100">
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase">Feature / Capability</th>
                          <th className="px-6 py-4 text-xs font-bold text-bupa-blue uppercase bg-blue-50/50">Bupa (Us)</th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Tawuniya</th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Al Nahdi</th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Fakeeh</th>
                      </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                      {FEATURE_MATRIX.map((item, idx) => (
                          <tr key={idx} className="hover:bg-gray-50 transition-colors">
                              <td className="px-6 py-4 text-left font-medium text-slate-700">{item.feature}</td>
                              
                              <td className="px-6 py-4 bg-blue-50/30">
                                  <div className="flex justify-center">
                                      {item.bupa === true ? <Check className="w-5 h-5 text-emerald-500" /> : 
                                       item.bupa === 'partial' ? <Minus className="w-5 h-5 text-amber-500" /> : 
                                       <X className="w-5 h-5 text-rose-300" />}
                                  </div>
                              </td>
                              
                              <td className="px-6 py-4">
                                  <div className="flex justify-center">
                                      {item.tawuniya === true ? <Check className="w-5 h-5 text-emerald-500" /> : 
                                       item.tawuniya === 'partial' ? <Minus className="w-5 h-5 text-amber-500" /> : 
                                       <X className="w-5 h-5 text-rose-300" />}
                                  </div>
                              </td>

                              <td className="px-6 py-4">
                                  <div className="flex justify-center">
                                      {item.alnahdi === true ? <Check className="w-5 h-5 text-emerald-500" /> : 
                                       item.alnahdi === 'partial' ? <Minus className="w-5 h-5 text-amber-500" /> : 
                                       <X className="w-5 h-5 text-rose-300" />}
                                  </div>
                              </td>

                              <td className="px-6 py-4">
                                  <div className="flex justify-center">
                                      {item.fakeeh === true ? <Check className="w-5 h-5 text-emerald-500" /> : 
                                       item.fakeeh === 'partial' ? <Minus className="w-5 h-5 text-amber-500" /> : 
                                       <X className="w-5 h-5 text-rose-300" />}
                                  </div>
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      </div>
    </div>
  );
};

export default CompetitiveArena;