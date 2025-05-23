import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  speed = 70,
  delay = 0,
  className = '',
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Reset when text changes
    setDisplayedText('');
    setCurrentIndex(0);
    setIsTyping(false);
  }, [text]);

  useEffect(() => {
    // Initial delay before typing starts
    const startTimeout = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, isTyping, onComplete, speed, text]);

  return (
    <span className={className}>
      {displayedText}
      {isTyping && currentIndex < text.length && (
        <span className="inline-block w-2 h-4 bg-current animate-blink"></span>
      )}
    </span>
  );
};

export default TypingEffect;