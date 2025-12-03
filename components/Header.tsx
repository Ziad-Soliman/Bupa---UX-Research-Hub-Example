import React from 'react';
import { Calendar, Search, Bell, Users, ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentSegment: string;
  onSegmentChange: (segment: string) => void;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ currentSegment, onSegmentChange, title }) => {
  return (
    <header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-40 transition-all duration-300">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-slate-800 hidden sm:block transition-all">{title}</h1>
        <div className="hidden lg:flex items-center px-3 py-1 bg-blue-50 text-bupa-blue text-xs font-semibold rounded-full border border-blue-100">
          <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
          Methodology: Remote Observational
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Segment Filter */}
        <div className="relative group">
          <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-gray-50 transition-colors">
            <Users className="w-4 h-4 text-bupa-blue" />
            <span className="hidden sm:inline">{currentSegment === 'all' ? 'All Segments' : currentSegment === 'member' ? 'End Members' : 'Decision Makers'}</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>
          
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 p-1 hidden group-hover:block z-50">
            <button 
              onClick={() => onSegmentChange('all')}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm ${currentSegment === 'all' ? 'bg-blue-50 text-bupa-blue font-semibold' : 'text-slate-600 hover:bg-gray-50'}`}
            >
              All Segments
            </button>
            <button 
              onClick={() => onSegmentChange('member')}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm ${currentSegment === 'member' ? 'bg-blue-50 text-bupa-blue font-semibold' : 'text-slate-600 hover:bg-gray-50'}`}
            >
              End Members (B2C)
            </button>
            <button 
              onClick={() => onSegmentChange('corporate')}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm ${currentSegment === 'corporate' ? 'bg-blue-50 text-bupa-blue font-semibold' : 'text-slate-600 hover:bg-gray-50'}`}
            >
              Decision Makers (B2B)
            </button>
          </div>
        </div>

        <div className="w-px h-6 bg-gray-200 mx-2 hidden md:block"></div>

        <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-600 cursor-pointer hover:bg-gray-200 transition-colors">
          <Calendar className="w-4 h-4 mr-2" />
          <span>Last 30 Days</span>
        </div>

        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
        </button>
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
          <Search className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;