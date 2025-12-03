import React, { useState } from 'react';
import VideoLab from './VideoLab';
import SessionPlayerModal from './SessionPlayerModal';
import { FeedbackItem } from '../types';

const VideoLabPage: React.FC = () => {
    const [selectedSession, setSelectedSession] = useState<FeedbackItem | null>(null);

    return (
        <div className="p-6 h-[calc(100vh-80px)] animate-in fade-in duration-500 flex flex-col">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-800">The Video Lab</h2>
                <p className="text-slate-500">Full repository of 150+ user sessions, searchable and tagged.</p>
            </div>
            
            <div className="flex-1 min-h-0 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <VideoLab onPlaySession={setSelectedSession} />
            </div>

            <SessionPlayerModal 
                isOpen={!!selectedSession} 
                session={selectedSession} 
                onClose={() => setSelectedSession(null)} 
            />
        </div>
    );
};

export default VideoLabPage;