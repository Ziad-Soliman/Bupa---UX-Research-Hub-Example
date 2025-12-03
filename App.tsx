import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Reports from './components/Reports';
import CompetitiveArena from './components/CompetitiveArena';
import B2BPortal from './components/B2BPortal';
import VideoLabPage from './components/VideoLabPage';
import SentimentAnalysis from './components/SentimentAnalysis';

const App: React.FC = () => {
  const [currentSegment, setCurrentSegment] = useState<string>('all');
  const [activeView, setActiveView] = useState<string>('overview');

  const renderContent = () => {
    switch (activeView) {
      case 'overview':
        return <Dashboard currentSegment={currentSegment} />;
      case 'arena':
        return <CompetitiveArena />;
      case 'sentiment':
        return <SentimentAnalysis />;
      case 'videolab':
        return <VideoLabPage />;
      case 'b2b':
        return <B2BPortal />;
      case 'reports':
        return <Reports />;
      default:
        return <Dashboard currentSegment={currentSegment} />;
    }
  };

  const getTitle = () => {
    switch (activeView) {
      case 'overview': return 'Executive Pulse';
      case 'arena': return 'Competitive Benchmarking';
      case 'sentiment': return 'Sentiment Analysis';
      case 'videolab': return 'Video Repository';
      case 'b2b': return 'B2B Corporate Portal';
      case 'reports': return 'Intelligence Reports';
      default: return 'Executive Pulse';
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Left Sidebar */}
      <Sidebar activeView={activeView} onNavigate={setActiveView} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col ml-20 lg:ml-64 transition-all duration-300 relative">
        <Header 
          currentSegment={currentSegment}
          onSegmentChange={setCurrentSegment}
          title={getTitle()}
        />
        
        <div className="flex-1 overflow-x-hidden overflow-y-auto bg-[#F8FAFC]">
          {renderContent()}
        </div>

        {/* Global Floating Watermark Logo */}
        <div className="fixed bottom-6 right-6 z-50 pointer-events-none opacity-60 mix-blend-multiply filter grayscale-[30%] hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <img 
                src="https://i.ibb.co/9k4sR4V9/image.png" 
                alt="Bupa Watermark" 
                className="w-24 h-auto object-contain"
            />
        </div>
      </div>
    </div>
  );
};

export default App;