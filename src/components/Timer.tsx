import React from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  seconds: number;
}

export const Timer: React.FC<TimerProps> = ({ seconds }) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className="cyber-panel px-4 py-2 rounded-lg flex items-center gap-2">
      <Clock className="w-5 h-5 text-cyan-400" />
      <span className="font-mono text-xl cyber-text-glow">
        {String(minutes).padStart(2, '0')}:{String(remainingSeconds).padStart(2, '0')}
      </span>
    </div>
  );
};