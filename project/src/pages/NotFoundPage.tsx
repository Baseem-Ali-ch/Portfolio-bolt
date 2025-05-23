import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RetroButton from '../components/ui/RetroButton';
import RetroCard from '../components/ui/RetroCard';
import TypingEffect from '../components/ui/TypingEffect';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);
  
  useEffect(() => {
    if (countdown <= 0) {
      navigate('/');
      return;
    }
    
    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [countdown, navigate]);
  
  return (
    <div className="min-h-screen bg-amber-50 dark:bg-zinc-900 pt-16 pb-16 flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <RetroCard variant="terminal" className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            </div>
            <div className="text-xs opacity-70">error.exe</div>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold font-mono mb-6 glitch-text">
            404
          </h1>
          
          <div className="mb-8">
            <TypingEffect
              text="ERROR: Page not found. The requested file could not be located."
              speed={30}
              className="text-xl font-mono"
            />
          </div>
          
          <div className="w-16 h-16 mx-auto mb-8">
            <div className="pixelated-error animate-pulse"></div>
          </div>
          
          <div className="mb-8 font-mono text-sm">
            <p className="mb-2">Redirecting to homepage in {countdown} seconds...</p>
            <div className="w-full bg-lime-900 h-2 mt-2">
              <div 
                className="h-full bg-lime-500 transition-all duration-1000"
                style={{ width: `${(1 - countdown/10) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <RetroButton
              to="/"
              variant="neon"
              size="lg"
            >
              Return to Homepage
            </RetroButton>
          </div>
        </RetroCard>
      </div>
    </div>
  );
};

export default NotFoundPage;