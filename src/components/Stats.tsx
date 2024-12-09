import React from 'react';
import { Activity, Target, Zap } from 'lucide-react';

interface StatsProps {
  wpm: number;
  accuracy: number;
  progress: number;
}

export const Stats: React.FC<StatsProps> = ({ wpm, accuracy, progress }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="cyber-panel p-4 rounded-lg">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-400" />
          <div>
            <p className="text-sm text-cyan-300">WPM</p>
            <p className="font-mono text-xl font-bold cyber-text-glow">{Math.round(wpm)}</p>
          </div>
        </div>
      </div>
      <div className="cyber-panel p-4 rounded-lg">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-green-400" />
          <div>
            <p className="text-sm text-cyan-300">Accuracy</p>
            <p className="font-mono text-xl font-bold cyber-text-glow">{Math.round(accuracy)}%</p>
          </div>
        </div>
      </div>
      <div className="cyber-panel p-4 rounded-lg">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-blue-400" />
          <div>
            <p className="text-sm text-cyan-300">Progress</p>
            <p className="font-mono text-xl font-bold cyber-text-glow">{Math.round(progress)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};