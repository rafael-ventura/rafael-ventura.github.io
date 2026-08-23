import { useEffect, useState } from 'react';

interface TypingTextProps {
  text: string;
  typingSpeed?: number;
}

export function TypingText({ text, typingSpeed = 150 }: TypingTextProps) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    setDisplayed('');
    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));
      if (index >= text.length) clearInterval(interval);
    }, typingSpeed);
    return () => clearInterval(interval);
  }, [text, typingSpeed]);

  return (
    <span className="font-display text-5xl md:text-7xl font-bold text-accent">
      {displayed}
      <span className="inline-block w-2.5 animate-pulse">|</span>
    </span>
  );
}
