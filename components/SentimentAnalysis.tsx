import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { SENTIMENT_TREND_DATA, TOPIC_SENTIMENT_DATA, KEYWORDS_DATA } from '../constants';
import { Heart, ThumbsUp, ThumbsDown, MessageSquare, Brain } from 'lucide-react';

const COLORS = {
  positive: '#10b981', // Emerald 500
  neutral: '#94a3b8',  // Slate 400
  negative: '#f43f5e', // Rose 500
};

const SentimentAnalysis: React.FC = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
            <Brain className="w-8 h-8 text-indigo-500" />
            AI Sentiment Engine
        </h2>
        <p className="text-slate-500 mt-1">Natural Language Processing (NLP) analysis of 150+ user sessions.</p>
      </div>

      {/* Top Cards: Summary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
                <p className="text-sm font-medium text-slate-500 uppercase">Net Sentiment Score</p>
                <h3 className="text-3xl font-bold text-slate-800 mt-1">+28</h3>
                <span className="inline-flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded mt-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1"></span>
                    Positive Trend
                </span>
            </div>
            <div className="p-3 bg-indigo-50 text-indigo-500 rounded-full">
                <Heart className="w-6 h-6" />
            </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
                <p className="text-sm font-medium text-slate-500 uppercase">Positive Feedback</p>
                <h3 className="text-3xl font-bold text-slate-800 mt-1">62%</h3>
                <p className="text-xs text-slate-400 mt-2">vs 55% Market Avg</p>
            </div>
            <div className="p-3 bg-emerald-50 text-emerald-500 rounded-full">
                <ThumbsUp className="w-6 h-6" />
            </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
                <p className="text-sm font-medium text-slate-500 uppercase">Negative Spikes</p>
                <h3 className="text-3xl font-bold text-slate-800 mt-1">12%</h3>
                <span className="inline-flex items-center text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded mt-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500 mr-1"></span>
                    Critical Alert (Claims)
                </span>
            </div>
            <div className="p-3 bg-rose-50 text-rose-500 rounded-full">
                <ThumbsDown className="w-6 h-6" />
            </div>
        </div>
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Sentiment Trend (Line/Area) */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-[400px] flex flex-col">
              <h3 className="font-bold text-lg text-slate-800 mb-6">Emotional Volume Trend (Last 7 Days)</h3>
              <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={SENTIMENT_TREND_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorPos" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={COLORS.positive} stopOpacity={0.1}/>
                                <stop offset="95%" stopColor={COLORS.positive} stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorNeg" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={COLORS.negative} stopOpacity={0.1}/>
                                <stop offset="95%" stopColor={COLORS.negative} stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                        <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                        <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                        <Legend iconType="circle" />
                        <Area type="monotone" dataKey="positive" stroke={COLORS.positive} fillOpacity={1} fill="url(#colorPos)" name="Positive" strokeWidth={2} />
                        <Area type="monotone" dataKey="neutral" stroke={COLORS.neutral} fill="transparent" name="Neutral" strokeWidth={2} strokeDasharray="5 5" />
                        <Area type="monotone" dataKey="negative" stroke={COLORS.negative} fillOpacity={1} fill="url(#colorNeg)" name="Negative" strokeWidth={2} />
                    </AreaChart>
                </ResponsiveContainer>
              </div>
          </div>

          {/* Sentiment Distribution (Donut) */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-[400px] flex flex-col">
              <h3 className="font-bold text-lg text-slate-800 mb-2">Overall Sentiment Mix</h3>
              <p className="text-sm text-slate-500 mb-4">Distribution of 4,200+ distinct utterances.</p>
              <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={[
                                { name: 'Positive', value: 62 },
                                { name: 'Neutral', value: 26 },
                                { name: 'Negative', value: 12 },
                            ]}
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            <Cell fill={COLORS.positive} />
                            <Cell fill={COLORS.neutral} />
                            <Cell fill={COLORS.negative} />
                        </Pie>
                        <Tooltip />
                        <Legend verticalAlign="bottom" height={36} iconType="circle" />
                    </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="text-center">
                  <p className="text-xs text-slate-400">
                      Dominant Emotion: <span className="font-bold text-emerald-500">Trust & Convenience</span>
                  </p>
              </div>
          </div>
      </div>

      {/* Bottom Row: Topic Analysis & Keywords */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Sentiment by Topic (Stacked Bar) */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-[450px] flex flex-col">
              <h3 className="font-bold text-lg text-slate-800 mb-6">Sentiment Heatmap by Feature</h3>
              <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        layout="vertical"
                        data={TOPIC_SENTIMENT_DATA}
                        margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                        barSize={24}
                    >
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                        <XAxis type="number" hide />
                        <YAxis dataKey="topic" type="category" width={100} tick={{fontSize: 12, fontWeight: 500, fill: '#475569'}} axisLine={false} tickLine={false} />
                        <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none' }} />
                        <Legend />
                        <Bar dataKey="positive" stackId="a" fill={COLORS.positive} radius={[0, 0, 0, 0]} name="Positive" />
                        <Bar dataKey="neutral" stackId="a" fill={COLORS.neutral} name="Neutral" />
                        <Bar dataKey="negative" stackId="a" fill={COLORS.negative} radius={[0, 4, 4, 0]} name="Negative" />
                    </BarChart>
                </ResponsiveContainer>
              </div>
          </div>

          {/* Keyword Cloud */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-[450px] flex flex-col">
              <h3 className="font-bold text-lg text-slate-800 mb-6 flex items-center">
                  <MessageSquare className="w-5 h-5 text-bupa-blue mr-2" />
                  Voice of Customer: Key Themes
              </h3>
              <div className="flex-1 flex flex-wrap content-start gap-3 p-4 bg-slate-50 rounded-xl overflow-y-auto">
                  {KEYWORDS_DATA.map((item, idx) => (
                      <div 
                        key={idx}
                        className={`px-4 py-2 rounded-full border shadow-sm transition-transform hover:scale-105 cursor-default flex items-center justify-between gap-3
                            ${item.type === 'positive' 
                                ? 'bg-white border-emerald-100 text-emerald-700' 
                                : 'bg-white border-rose-100 text-rose-700'
                            }`}
                        style={{ fontSize: `${Math.max(0.8, Math.min(1.5, item.count / 30))}rem`, opacity: Math.max(0.6, Math.min(1, item.count / 40)) }}
                      >
                          <span className="font-bold">{item.word}</span>
                          <span className={`text-xs px-1.5 py-0.5 rounded-full ${item.type === 'positive' ? 'bg-emerald-100' : 'bg-rose-100'}`}>
                              {item.count}
                          </span>
                      </div>
                  ))}
                  <div className="w-full text-center mt-8 text-xs text-slate-400">
                      *Keywords extracted via Dovetail AI transcription
                  </div>
              </div>
          </div>

      </div>

    </div>
  );
};

export default SentimentAnalysis;