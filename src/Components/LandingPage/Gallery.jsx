import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://plus.unsplash.com/premium_photo-1734545294050-e6ce1a7068b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHJlYWwlMjBlc3RhdGUlMjBwcm9wZXJ0aWVzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1668911494509-14baf3b42fda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHJlYWwlMjBlc3RhdGUlMjBwcm9wZXJ0aWVzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1635108197047-add19c9ae680?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHJlYWwlMjBlc3RhdGUlMjBwcm9wZXJ0aWVzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1635108201018-94bbbfac4a79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHJlYWwlMjBlc3RhdGUlMjBwcm9wZXJ0aWVzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1635108200386-b3ee405ed124?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1748265769012-5790a2a39ddb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D.jpg",
  "https://images.unsplash.com/photo-1635108201474-929f493eb1f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1647579350449-37960d792a05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUzfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1647579350687-d409523aabcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY2fHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1628116906837-42a88b365273?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg5fHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D",
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
