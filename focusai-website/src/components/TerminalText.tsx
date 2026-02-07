import { useState, useEffect } from 'react';

interface TerminalTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function TerminalText({
  texts,
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseDuration = 2000,
  className = ''
}: TerminalTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => setShowCursor(prev => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`font-mono ${className}`}>
      <span className="text-[#a855f7]">&gt; </span>
      <span dir="auto">{displayedText}</span>
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-[#a855f7] transition-opacity`}>_</span>
    </span>
  );
}
