"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Gift, Smile } from "lucide-react";

const slides = [
  {
    text: "Selamat ulang tahun, Cinta! 🎉",
    image: "/page1.jpg",
    icon: <Gift className="w-6 h-6 text-pink-500 mb-2" />,
  },
  {
    text: "Terima kasih sudah hadir dan membuat hariku berwarna 💕",
    image: "/page2.jpg",
    icon: <Smile className="w-6 h-6 text-pink-500 mb-2" />,
  },
  {
    text: "Semoga kamu selalu bahagia, sehat dan tercapai semua cita-citamu ✨",
    image: "/page3.jpg",
    icon: <Heart className="w-6 h-6 text-pink-500 mb-2" />,
  },
  {
    text: "Aku sangat bersyukur memilikimu 😘",
    image: "/page4.jpg",
    icon: <Heart className="w-6 h-6 text-pink-500 mb-2" />,
  },
  {
    text: "Aku cinta kamu, sekarang dan selalu 💖",
    image: "/page5.jpg",
    icon: <Heart className="w-6 h-6 text-pink-500 mb-2" />,
  },
];

export default function FlipBook() {
  const [page, setPage] = useState(0);

  const nextSlide = () => {
    if (page < slides.length - 1) setPage((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white px-4 py-8 flex items-center justify-center">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            className="bg-white rounded-xl border border-pink-200 shadow-lg overflow-hidden flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={slides[page].image}
              alt="Birthday"
              className="w-full h-52 sm:h-64 md:h-72 object-cover"
            />
            <div className="p-6 text-center flex flex-col items-center justify-center space-y-2">
              {slides[page].icon}
              <p className="text-pink-700 text-base sm:text-lg md:text-xl font-medium">
                {slides[page].text}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex justify-center">
          {page < slides.length - 1 ? (
            <button
              onClick={nextSlide}
              className="px-6 py-3 bg-pink-500 text-white text-sm sm:text-base rounded-full shadow-md hover:bg-pink-600 transition"
            >
              Selanjutnya →
            </button>
          ) : (
            <p className="text-center text-pink-600 text-sm sm:text-base mt-4">
              💖 Terima kasih sudah menjadi yang terbaik dalam hidupku 💖
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
