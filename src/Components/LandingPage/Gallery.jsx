import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/Public/download (1).jpg",
  "/Public/download (2).jpg",
  "/Public/download (3).jpg",
  "/Public/download (4).jpg",
  "/Public/download (5).jpg",
  "/Public/download (6).jpg",
  "/Public/download (17).jpg",
  "/Public/download.jpg",
];

const Gallery = () => {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-5 text-center">

        <h2 className="text-4xl font-extrabold text-gray-800 pb-27 tracking-tight">
          Gallery Showcase
        </h2>

        <div className="relative w-full h-[430px] overflow-hidden rounded-2xl shadow-2xl">

          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </AnimatePresence>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full shadow-lg backdrop-blur-md transition"
          >
            <ChevronLeft size={28} className="text-gray-800" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full shadow-lg backdrop-blur-md transition"
          >
            <ChevronRight size={28} className="text-gray-800" />
          </button>

        </div>

        <div className="flex justify-center gap-3 mt-6">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-sky-600 scale-125" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
