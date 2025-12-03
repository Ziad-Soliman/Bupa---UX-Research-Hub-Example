import React, { useState, useEffect } from 'react';
import { X, Play, Pause, SkipForward, Rewind, MessageSquare, List, Clock, User, Download, Share2 } from 'lucide-react';
import { FeedbackItem, SessionEvent, TranscriptLine } from '../types';
import { SESSION_EVENTS, SESSION_TRANSCRIPT } from '../constants';

interface SessionPlayerModalProps {
  session: FeedbackItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const SessionPlayerModal: React.FC<SessionPlayerModalProps> = ({ session, isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(30);

  if (!isOpen || !session) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[85vh] relative flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="h-16 border-b border-gray-200 flex items-center justify-between px-6 bg-white shrink-0">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                    <img src={session.userAvatar} alt="User" className="w-full h-full object-cover" />
                </div>
                <div>
                    <h3 className="font-bold text-slate-800">{session.segment}</h3>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Clock className="w-3 h-3" />
                        <span>Recorded {session.timestamp}</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                        <span>iPhone 14 Pro</span>
                    </div>
                </div>
            </div>
            
            <div className="flex items-center gap-3">
                <button className="p-2 text-slate-400 hover:text-bupa-blue hover:bg-blue-50 rounded-lg transition-colors">
                    <Share2 className="w-5 h-5" />
                </button>
                <button className="p-2 text-slate-400 hover:text-bupa-blue hover:bg-blue-50 rounded-lg transition-colors">
                    <Download className="w-5 h-5" />
                </button>
                <button 
                    onClick={onClose}
                    className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors ml-2"
                >
                    <X className="w-6 h-6" />
                </button>
            </div>
        </div>

        {/* Main Body */}
        <div className="flex-1 flex overflow-hidden">
            
            {/* Left: Video Player */}
            <div className="flex-1 bg-slate-900 relative flex flex-col justify-center">
                {/* Mock Screen Recording */}
                <div className="relative w-full h-full flex items-center justify-center p-8">
                     <div className="aspect-[9/19] h-full bg-black rounded-3xl border-4 border-slate-700 shadow-2xl overflow-hidden relative group">
                        {/* Fake Mobile Screen Content */}
                        <div className="absolute inset-0 bg-gray-100 opacity-20 group-hover:opacity-30 transition-opacity"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Play className={`w-16 h-16 text-white opacity-50 ${isPlaying ? 'hidden' : 'block'}`} />
                        </div>
                        
                        {/* Face Cam Overlay */}
                        <div className="absolute top-4 right-4 w-24 h-32 bg-slate-800 rounded-lg border-2 border-white/20 shadow-lg overflow-hidden">
                             <img src={session.userAvatar} className="w-full h-full object-cover opacity-80" alt="Face Cam" />
                        </div>

                        {/* Rage Click Indicators (Mock) */}
                        <div className="absolute bottom-1/3 left-1/2 w-12 h-12 -translate-x-1/2 bg-rose-500/50 rounded-full animate-ping"></div>
                     </div>
                </div>

                {/* Player Controls */}
                <div className="h-20 bg-slate-900 border-t border-slate-800 px-6 flex items-center gap-6">
                    <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                        {isPlaying ? <Pause className="w-4 h-4 text-slate-900" /> : <Play className="w-4 h-4 text-slate-900 ml-1" />}
                    </button>
                    
                    <div className="flex-1 relative">
                        {/* Timeline Track */}
                        <div className="h-1.5 bg-slate-700 rounded-full w-full relative group cursor-pointer">
                            <div className="absolute top-0 left-0 h-full bg-bupa-blue rounded-full" style={{ width: `${progress}%` }}></div>
                            <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity" style={{ left: `${progress}%` }}></div>
                            
                            {/* Event Markers */}
                            {SESSION_EVENTS.map((event, idx) => (
                                <div 
                                    key={idx}
                                    className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transform hover:scale-150 transition-transform ${event.type === 'rage_click' ? 'bg-rose-500' : 'bg-emerald-500'}`}
                                    style={{ left: `${(idx + 1) * 20}%` }}
                                    title={event.description}
                                ></div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="text-xs font-mono text-slate-400">00:48 / 02:15</div>
                </div>
            </div>

            {/* Right: Transcript & Events */}
            <div className="w-96 bg-gray-50 border-l border-gray-200 flex flex-col">
                <div className="p-4 border-b border-gray-200 bg-white">
                    <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wide flex items-center gap-2">
                        <List className="w-4 h-4 text-slate-500" />
                        Session Timeline
                    </h4>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {/* Transcript Block */}
                    <div className="space-y-4">
                        {SESSION_TRANSCRIPT.map((line, idx) => (
                            <div key={idx} className={`flex gap-3 ${line.speaker === 'Moderator' ? 'opacity-70' : ''}`}>
                                <div className="text-[10px] font-mono text-slate-400 pt-1 shrink-0 w-8">{line.time}</div>
                                <div className="flex-1">
                                    <div className="text-xs font-bold text-slate-700 mb-0.5">{line.speaker}</div>
                                    <p className="text-sm text-slate-600 leading-relaxed bg-white p-2 rounded-lg border border-gray-100 shadow-sm">
                                        {line.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Auto-Generated Events */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                         <h5 className="text-xs font-bold text-slate-400 mb-3 uppercase">Detected Events</h5>
                         <div className="space-y-2">
                             {SESSION_EVENTS.map((event, idx) => (
                                 <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all cursor-pointer">
                                     <div className={`w-1.5 h-1.5 rounded-full ${event.type === 'rage_click' ? 'bg-rose-500 animate-pulse' : 'bg-blue-400'}`}></div>
                                     <span className="text-xs font-mono text-slate-400">{event.time}</span>
                                     <span className={`text-xs font-medium ${event.type === 'rage_click' ? 'text-rose-600 font-bold' : 'text-slate-600'}`}>
                                         {event.description}
                                     </span>
                                 </div>
                             ))}
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SessionPlayerModal;