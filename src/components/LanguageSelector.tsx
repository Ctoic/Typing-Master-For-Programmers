import React from 'react';
import { Code2, ChevronDown } from 'lucide-react';
import { languages } from '../data/languageSnippets';

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageSelect: (languageId: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguage,
  onLanguageSelect,
}) => {
  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-4 py-2 bg-cyan-900 text-cyan-100 rounded-lg 
        hover:bg-cyan-800 transition-all border border-cyan-500 shadow-[0_0_15px_rgba(0,255,255,0.3)]">
        <Code2 className="w-5 h-5" />
        <span>{languages.find(l => l.id === selectedLanguage)?.name}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      
      <div className="absolute hidden group-hover:block w-48 mt-2 py-2 bg-gray-900 border 
        border-cyan-500 rounded-lg shadow-lg shadow-cyan-500/20">
        {languages.map((language) => (
          <button
            key={language.id}
            onClick={() => onLanguageSelect(language.id)}
            className="w-full text-left px-4 py-2 text-cyan-100 hover:bg-cyan-900 
              transition-colors"
          >
            {language.name}
          </button>
        ))}
      </div>
    </div>
  );
};