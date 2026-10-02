import { useState, useEffect, useRef, useCallback } from 'react';

const CHARS = '0123456789ABCDEF!<>-_\\/[]{}—=+*^?#________';

export function useTextScramble(finalText, trigger = true, speed = 25) {
  const [displayText, setDisplayText] = useState(finalText);
  const frameRef = useRef(null);

  const scramble = useCallback(() => {
    let iteration = 0;
    const maxIterations = finalText.length;

    clearInterval(frameRef.current);

    frameRef.current = setInterval(() => {
      setDisplayText(() =>
        finalText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return finalText[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iteration >= maxIterations) {
        clearInterval(frameRef.current);
      }

      iteration += 1 / 2;
    }, speed);
  }, [finalText, speed]);

  useEffect(() => {
    if (trigger) {
      scramble();
    }
    return () => clearInterval(frameRef.current);
  }, [trigger, scramble]);

  return { displayText, reScramble: scramble };
}
