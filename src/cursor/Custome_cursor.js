import React, { useEffect, useState } from 'react';

const Custome_cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const click = () => {
      const id = Date.now();
      setClicks((prev) => [...prev, { x: position.x, y: position.y, id }]);
      setTimeout(() => {
        setClicks((prev) => prev.filter((b) => b.id !== id));
      }, 500);
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('click', click);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('click', click);
    };
  }, [position]);

  return (
    <>
      <div
        className="cursor-dot"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className="cursor-ring"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      {clicks.map((click) => (
        <span
          key={click.id}
          className="bubble"
          style={{ left: `${click.x}px`, top: `${click.y}px` }}
        />
      ))}
    </>
  );
};

export default Custome_cursor;
