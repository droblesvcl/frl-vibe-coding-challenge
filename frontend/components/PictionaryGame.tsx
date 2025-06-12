'use client';

import React, { useRef, useState, useEffect } from 'react';

type WordResponse = {
  word: string;
};

const PictionaryGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [word, setWord] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWord = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('http://localhost:8000/word');
      if (!res.ok) throw new Error('Failed to fetch word');
      const data: WordResponse = await res.json();
      setWord(data.word);
    } catch (err) {
      setError('Could not fetch word.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWord();
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    setIsDrawing(true);
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    ctx.beginPath();
    const rect = canvasRef.current.getBoundingClientRect();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    const rect = canvasRef.current.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const handlePointerUp = () => {
    setIsDrawing(false);
  };

  const handleClear = () => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  const handleNewWord = () => {
    handleClear();
    fetchWord();
  };

  return (
    <section className="w-full max-w-xl flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <span className="text-lg font-medium text-black">Draw this word:</span>
        {loading ? (
          <span className="text-blue-500 text-black">Loading...</span>
        ) : error ? (
          <span className="text-red-500 text-black">{error}</span>
        ) : (
          <span className="text-2xl font-bold text-black" aria-label="Word to draw">{word}</span>
        )}
      </div>
      <canvas
        ref={canvasRef}
        width={500}
        height={400}
        tabIndex={0}
        aria-label="Drawing canvas"
        className="border border-gray-400 rounded bg-white cursor-crosshair focus:outline-none focus:ring-2 focus:ring-blue-400"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      />
      <div className="flex gap-4">
        <button
          type="button"
          onClick={handleClear}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Clear drawing"
        >
          Clear
        </button>
        <button
          type="button"
          onClick={handleNewWord}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Get new word"
        >
          New Word
        </button>
      </div>
    </section>
  );
};

export default PictionaryGame;