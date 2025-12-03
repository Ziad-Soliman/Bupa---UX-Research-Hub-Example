import React from 'react';
import { PlayCircle, MessageSquare, Monitor, Smartphone, Video } from 'lucide-react';
import { FEEDBACK_ITEMS } from '../constants';
import { FeedbackItem } from '../types';

interface VideoLabProps {
  onPlaySession: (item: FeedbackItem) => void;
}

const VideoLab: React.FC<VideoLabProps> = ({ onPlaySession }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col h-full overflow-hidden">
      <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Video className="w-5 h-5 text-bupa-blue" />
            The Video Lab
          </h2>
          <p className="text-sm text-slate-500">Live Qualitative Feed (Lookback Integration)</p>
        </div>
        <span className="px-2 py-1 bg-rose-100 text-rose-600 text-xs font-bold rounded uppercase tracking-wider animate-pulse">
          Live Rec
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-0 scrollbar-thin scrollbar-thumb-slate-200">
        {FEEDBACK_ITEMS.map((item, index) => (
          <div 
            key={item.id} 
            onClick={() => onPlaySession(item)}
            className={`p-5 border-b border-gray-100 hover:bg-blue-50/50 transition-colors group cursor-pointer relative ${index === 0 ? 'bg-blue-50/20' : ''}`}
          >
            <div className="flex items-start gap-4">
              <div className="relative flex-shrink-0">
                <img 
                  src={item.userAvatar} 
                  alt="User" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                {item.hasVideo && (
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-5 h-5 text-bupa-blue fill-current bg-white rounded-full" />
                  </div>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-bold text-slate-800 truncate group-hover:text-bupa-blue transition-colors">
                    {item.segment}
                  </h4>
                  <span className="text-xs text-slate-400 whitespace-nowrap">{item.timestamp}</span>
                </div>
                
                <div className="flex items-center gap-2 mt-1 mb-2">
                  <span className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded border ${
                    item.sentiment === 'frustrated' || item.sentiment === 'negative' 
                      ? 'bg-rose-50 text-rose-600 border-rose-100'
                      : item.sentiment === 'positive' 
                        ? 'bg-emerald-50 text-emerald-600 border-emerald-100'
                        : 'bg-slate-100 text-slate-500 border-slate-200'
                  }`}>
                    {item.sentiment}
                  </span>
                  <span className="text-[10px] font-medium text-slate-500 bg-gray-100 px-1.5 py-0.5 rounded flex items-center border border-gray-200">
                    {item.segment.includes('End Member') ? <Smartphone className="w-3 h-3 mr-1" /> : <Monitor className="w-3 h-3 mr-1" />}
                    {item.tag}
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed italic line-clamp-2">
                  "{item.comment}"
                </p>
              </div>
            </div>
            
            <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-bupa-blue flex items-center">
              Watch Session →
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
        <button className="text-sm text-bupa-blue font-semibold hover:text-blue-700 transition-colors">
          View All 142 Sessions in Dovetail →
        </button>
      </div>
    </div>
  );
};

export default VideoLab;