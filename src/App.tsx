import React, { useState, useEffect, useCallback } from 'react';
import { Timer } from './components/Timer';
import { Stats } from './components/Stats';
import { TypingArea } from './components/TypingArea';
import { LanguageSelector } from './components/LanguageSelector';
import { languages } from './data/languageSnippets';
import { Terminal } from 'lucide-react';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  const currentLanguageData = languages.find(l => l.id === selectedLanguage)!;
  const currentSnippet = currentLanguageData.snippets[currentSnippetIndex];

  const calculateStats = useCallback(() => {
    if (!startTime) return;
    
    const words = userInput.length / 5;
    const minutes = elapsedTime / 60;
    const currentWpm = words / minutes;
    
    const correctChars = userInput.split('').filter((char, index) => char === currentSnippet.code[index]).length;
    const currentAccuracy = (correctChars / userInput.length) * 100 || 100;

    setWpm(currentWpm);
    setAccuracy(currentAccuracy);
  }, [userInput, startTime, elapsedTime, currentSnippet.code]);

  useEffect(() => {
    let intervalId: number;
    if (startTime) {
      intervalId = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [startTime]);

  useEffect(() => {
    calculateStats();
  }, [calculateStats]);

  const handleLanguageSelect = (languageId: string) => {
    setSelectedLanguage(languageId);
    setCurrentSnippetIndex(0);
    setUserInput('');
    setStartTime(null);
    setElapsedTime(0);
    setWpm(0);
    setAccuracy(100);
  };

  const handleType = (value: string) => {
    if (!startTime) {
      setStartTime(Date.now());
    }
    setUserInput(value);

    if (value === currentSnippet.code) {
      if (currentSnippetIndex < currentLanguageData.snippets.length - 1) {
        setCurrentSnippetIndex(prev => prev + 1);
        setUserInput('');
      }
    }
  };

  const progress = (userInput.length / currentSnippet.code.length) * 100;

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-8 h-8 text-cyan-400" />
              <h1 className="text-2xl font-bold cyber-text-glow">CodeType_</h1>
            </div>
            <LanguageSelector
              selectedLanguage={selectedLanguage}
              onLanguageSelect={handleLanguageSelect}
            />
          </div>
          <Timer seconds={elapsedTime} />
        </div>

        <div className="mb-6">
          <Stats wpm={wpm} accuracy={accuracy} progress={progress} />
        </div>

        <div className="cyber-panel p-6 rounded-lg">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-cyan-300 mb-2">{currentSnippet.title}</h2>
          </div>
          
          <TypingArea
            text={currentSnippet.code}
            userInput={userInput}
            onType={handleType}
          />
        </div>
      </div>
    </div>
  );
}

export default App;