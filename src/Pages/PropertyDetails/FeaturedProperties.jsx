import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Modern Luxury Apartment",
      location: "Victoria Island, Lagos",
      price: "$1,200 / month",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: 2,
      title: "Cozy Family Duplex",
      location: "Lekki Phase 1, Lagos",
      price: "$950 / month",
      image:
        "/src/Pages/download (9).jpg",
    },
    {
      id: 3,
      title: "Stylish Studio Apartment",
      location: "Ikeja GRA, Lagos",
      price: "$700 / month",
      image:
        "/src/Pages/download (12).jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 m-5 text-center">
          Featured Properties
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Link key={property.id} to={`/property/${property.id}`}>
              <motion.div
                className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {property.title}
                  </h3>
                  <p className="text-gray-600">{property.location}</p>
                  <p className="text-sky-600 font-bold mt-2">{property.price}</p>
                  <p className="mt-4 text-sky-700 font-medium">View Details →</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
