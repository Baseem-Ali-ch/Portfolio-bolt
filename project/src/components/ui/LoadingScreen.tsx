import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const { theme } = useTheme();
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.random() * 15;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-amber-50 dark:bg-zinc-900 z-50">
      <div className="w-64 mb-8">
        <div className="text-center mb-6 font-mono text-2xl text-amber-800 dark:text-amber-400">
          <div className="mb-2">LOADING...</div>
          <div className="text-sm">{Math.round(progress)}%</div>
        </div>
        
        {/* Progress bar with scanline effect */}
        <div className="relative h-8 w-full bg-amber-200 dark:bg-zinc-800 border-2 border-amber-800 dark:border-amber-600 overflow-hidden">
          <div 
            className="h-full bg-amber-600 dark:bg-amber-500 transition-all duration-100 relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            {/* Scanline effect */}
            <div className="absolute top-0 left-0 w-full h-1 bg-white dark:bg-amber-200 opacity-30 animate-scan"></div>
          </div>
        </div>
      </div>
      
      <div className="font-mono text-xs text-amber-700 dark:text-amber-500 mt-4 max-w-xs text-center">
        <p className="typing-text">Initializing vintage systems...</p>
        <p className="blink-text mt-1">Please wait...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;