import React from 'react';
import { LayoutDashboard, Zap, Video, Building2, Settings, FileText, HeartHandshake } from 'lucide-react';
import { NavItem } from '../types';

interface SidebarProps {
  activeView: string;
  onNavigate: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, onNavigate }) => {
  const menuItems: NavItem[] = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'arena', label: 'Competitive Arena', icon: Zap },
    { id: 'sentiment', label: 'Sentiment Analysis', icon: HeartHandshake },
    { id: 'videolab', label: 'Video Lab', icon: Video },
    { id: 'b2b', label: 'B2B Portal', icon: Building2 },
    { id: 'reports', label: 'Reports', icon: FileText },
  ];

  return (
    <aside className="w-20 lg:w-64 bg-slate-900 text-white flex flex-col h-screen fixed left-0 top-0 z-50 transition-all duration-300 shadow-2xl">
      <div className="h-20 flex items-center justify-center lg:justify-start lg:px-6 border-b border-slate-800 cursor-pointer hover:bg-slate-800/50 transition-colors" onClick={() => onNavigate('overview')}>
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1.5 overflow-hidden">
          <img 
            src="https://i.ibb.co/9k4sR4V9/image.png" 
            alt="Bupa Logo" 
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/150?text=Bupa";
            }}
          />
        </div>
        <span className="ml-3 font-bold text-lg hidden lg:block text-slate-100 tracking-tight">UX Hub</span>
      </div>

      <nav className="flex-1 py-6 space-y-2 px-3">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 group relative overflow-hidden ${
              activeView === item.id
                ? 'bg-bupa-blue text-white shadow-lg shadow-blue-900/50 translate-x-1' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <item.icon className={`w-5 h-5 flex-shrink-0 relative z-10 ${activeView === item.id ? 'text-white' : 'text-slate-400 group-hover:text-white'}`} />
            <span className="ml-3 font-medium hidden lg:block relative z-10">{item.label}</span>
            {item.id === 'videolab' && (
              <span className="ml-auto bg-rose-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full hidden lg:block animate-pulse relative z-10">
                Live
              </span>
            )}
            {activeView === item.id && (
                 <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent z-0"></div>
            )}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800 bg-slate-900/50">
        <button className="w-full flex items-center p-3 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800">
          <Settings className="w-5 h-5" />
          <span className="ml-3 font-medium hidden lg:block">Settings</span>
        </button>
        <div className="mt-4 flex items-center px-3 hidden lg:flex">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-400 to-emerald-400 border-2 border-slate-600 p-0.5">
             <img src="https://i.pravatar.cc/150?u=ziad" alt="Admin" className="w-full h-full rounded-full object-cover" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-bold text-white leading-none">Dr. Ziad</p>
            <p className="text-xs text-slate-400 mt-1">Admin Access</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;