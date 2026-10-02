import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [targetPos, setTargetPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const rafId = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      setTargetPos({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable element
      const target = e.target;
      const clickable = target.closest('button, a, input, select, textarea, [data-interactive="true"], .cyber-card');
      setIsHovered(!!clickable);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Smooth lerp follow for the ring
    const loop = () => {
      setPos((prev) => ({
        x: prev.x + (targetPos.x - prev.x) * 0.22,
        y: prev.y + (targetPos.y - prev.y) * 0.22,
      }));
      rafId.current = requestAnimationFrame(loop);
    };
    rafId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(rafId.current);
    };
  }, [targetPos]);

  return (
    <>
      {/* Precision inner center dot */}
      <div
        className="custom-cursor-dot"
        style={{
          left: `${targetPos.x}px`,
          top: `${targetPos.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.7 : isHovered ? 1.4 : 1})`,
        }}
      />
      {/* Precision outer targeting ring with rotation */}
      <div
        className={`custom-cursor-ring ${isHovered ? 'active' : ''}`}
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.85 : 1})`,
        }}
      />
    </>
  );
}
