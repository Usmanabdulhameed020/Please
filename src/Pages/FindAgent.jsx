import React, { useState } from "react";
import { motion } from "framer-motion";

const agentsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    city: "Lagos",
    specialty: "Renting",
    experience: "3+ years",
    phone: "+2348012345678",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    id: 2,
    name: "Michael Ade",
    city: "Abuja",
    specialty: "Sales",
    experience: "5+ years",
    phone: "+2348098765432",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
  {
    id: 3,
    name: "Linda Chukwu",
    city: "Port Harcourt",
    specialty: "Land & Rentals",
    experience: "2+ years",
    phone: "+2348031122334",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
  },
  {
    id: 4,
    name: "Ayo Bello",
    city: "Lagos",
    specialty: "Mortgage",
    experience: "4+ years",
    phone: "+2348023344556",
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
  },
  {
    id: 5,
    name: "Grace Okoro",
    city: "Abuja",
    specialty: "Luxury Homes",
    experience: "6+ years",
    phone: "+2348056677889",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    id: 6,
    name: "Emeka Obi",
    city: "Port Harcourt",
    specialty: "Commercial Properties",
    experience: "5+ years",
    phone: "+2348078899001",
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
  },
];

const FindAgent = ({ propertyName }) => {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [specialty, setSpecialty] = useState("");

  const filteredAgents = agentsData.filter((agent) => {
    return (
      agent.name.toLowerCase().includes(search.toLowerCase()) &&
      (city ? agent.city === city : true) &&
      (specialty ? agent.specialty === specialty : true)
    );
  });

  const generateWhatsAppLink = (phone, agentName) => {
    const message = propertyName
      ? `Hello ${agentName}, I am interested in the property "${propertyName}".`
      : `Hello ${agentName}, I am interested in your real estate services.`;
    return `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <div className="pt-24 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-sky-700 mb-4">Find an Agent</h1>
      <p className="text-gray-600 mb-10 max-w-2xl">
        Search and connect with trusted real estate professionals across Nigeria.
      </p>

      <div className="bg-white p-6 rounded-xl shadow-md mb-12">
        <div className="grid md:grid-cols-3 gap-6">
          <input
            type="text"
            placeholder="Search agent by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
          />

          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <option value="">Filter by city</option>
            <option value="Lagos">Lagos</option>
            <option value="Abuja">Abuja</option>
            <option value="Port Harcourt">Port Harcourt</option>
          </select>

          <select
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <option value="">Filter by specialty</option>
            <option value="Renting">Renting</option>
            <option value="Sales">Sales</option>
            <option value="Land & Rentals">Land & Rentals</option>
            <option value="Mortgage">Mortgage</option>
            <option value="Luxury Homes">Luxury Homes</option>
            <option value="Commercial Properties">Commercial Properties</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 pb-6">
        {filteredAgents.length === 0 ? (
          <p className="text-gray-500 text-lg">No agents found.</p>
        ) : (
          filteredAgents.map((agent) => (
            <motion.div
              key={agent.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="border shadow-md rounded-xl p-6 hover:shadow-xl bg-white transition"
            >
              <img
                src={agent.img}
                alt={agent.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-center">{agent.name}</h3>
              <p className="text-gray-500 text-center">{agent.city}</p>
              <p className="text-gray-600 text-center text-sm mt-2">
                {agent.specialty} • {agent.experience}
              </p>

              <a
                href={generateWhatsAppLink(agent.phone, agent.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full block text-center py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
              >
                Contact via WhatsApp
              </a>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default FindAgent;
