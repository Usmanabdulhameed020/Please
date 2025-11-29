import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const searchItems = [
  { name: "Buy", type: "page", link: "/buy" },
  { name: "Rent", type: "page", link: "/rent" },
  { name: "Sale", type: "page", link: "/sale" },
  { name: "Mortgage", type: "page", link: "/mortgage" },
  { name: "Find an Agent", type: "page", link: "/find-an-agent" },
  { name: "Featured Properties", type: "section", link: "featured-properties" },
  { name: "Gallery", type: "section", link: "gallery" },
  { name: "Blog", type: "section", link: "blog" },
  { name: "Contact", type: "section", link: "contact" },
];

const Hero = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filtered = searchItems.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      handleNavigation(suggestions[0]);
    } else {
      alert("No match found!");
    }
    setQuery("");
    setSuggestions([]);
  };

  const handleNavigation = (item) => {
    if (item.type === "page") {
      navigate(item.link);
    } else if (item.type === "section") {
      const section = document.getElementById(item.link);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setQuery("");
    setSuggestions([]);
  };

  return (
    <section
      className="relative w-full h-[90vh] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <motion.div
        className="absolute inset-0 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      ></motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Find Your Perfect Home
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Search for properties, agents, or any section on the site
        </motion.p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-4 mt-6 relative w-full max-w-[600px]"
        >
          <motion.input
            type="text"
            name="search"
            value={query}
            onChange={handleChange}
            placeholder="Search..."
            className="w-full sm:w-[500px] px-6 py-3 border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition text-white"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          <motion.button
            type="submit"
            className="px-8 py-3 bg-sky-600 text-white font-semibold rounded-full shadow hover:bg-sky-700 hover:shadow-lg transition"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Search
          </motion.button>

          {suggestions.length > 0 && (
            <div className="absolute top-full mt-2 w-full sm:w-[500px] bg-white text-gray-800 rounded-xl shadow-lg z-50">
              {suggestions.map((item, index) => (
                <div
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-sky-100"
                  onClick={() => handleNavigation(item)}
                >
                  {item.name} {item.type === "section" ? "(Section)" : "(Page)"}
                </div>
              ))}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Hero;
