"use client";
import { useEffect, useRef, useState } from "react";
import FlipBook from "../components/Flipbook";

export default function HomePage() {
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);

  const startAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setStarted(true);
      }).catch((e) => {
        console.error("Gagal memutar audio:", e);
      });
    }
  };

  useEffect(() => {
    audioRef.current = new Audio("/ssstik.io_1749459293557.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.55;
  }, []);

  return (
    <div>
      {!started && (
        <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-pink-100 via-white to-pink-200 bg-opacity-95 flex flex-col items-center justify-center z-50 transition-all duration-700 ease-in-out px-4">
          <div className="mb-8 text-center animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-pink-700 drop-shadow-xl mb-4 animate-pulse">
              💗 Selamat Ulang Tahun, Cintaku 💗
            </h1>
            <p className="text-lg sm:text-xl text-pink-600 font-medium max-w-md mx-auto leading-relaxed">
              For My Lovely Girl SASA 💘🎁
            </p>
          </div>
          <button
            onClick={startAudio}
            className="bg-white/70 hover:bg-white text-pink-700 font-bold text-lg sm:text-xl px-8 py-4 rounded-full shadow-xl border-2 border-pink-300 hover:scale-105 transition-all duration-300 hover:text-pink-900 backdrop-blur-md"
          >
            💝 CLICK
          </button>
        </div>
      )}

      <FlipBook />
    </div>
  );
}
