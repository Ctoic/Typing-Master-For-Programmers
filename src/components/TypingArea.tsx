import React from 'react';

interface TypingAreaProps {
  text: string;
  userInput: string;
  onType: (value: string) => void;
}

export const TypingArea: React.FC<TypingAreaProps> = ({ text, userInput, onType }) => {
  const getCharacterClass = (index: number) => {
    if (index >= userInput.length) return "text-gray-400";
    if (userInput[index] === text[index]) return "text-cyan-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]";
    return "text-red-400 bg-red-900/30";
  };

  return (
    <div className="w-full">
      <div className="font-mono text-lg cyber-panel p-6 rounded-lg mb-4 leading-relaxed">
        {text.split('').map((char, index) => (
          <span key={index} className={getCharacterClass(index)}>
            {char}
          </span>
        ))}
      </div>
      <textarea
        className="w-full p-4 rounded-lg font-mono bg-gray-900/50 text-cyan-300 
          border border-cyan-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400
          placeholder-cyan-700 transition-all"
        value={userInput}
        onChange={(e) => onType(e.target.value)}
        rows={4}
        placeholder="Start typing to initiate sequence..."
        autoFocus
      />
    </div>
  );
};