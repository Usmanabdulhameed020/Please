import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Components/LandingPage/Navbar";

const AuthModal = ({ onClose, onLogin }) => {
  const [isSigningIn, setIsSigningIn] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(savedUsers);
  }, []);

  const handleSignUp = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (existingUsers.find((u) => u.email === email)) {
      setError("An account with this email already exists.");
      return;
    }

    const newUser = { name, email, password };
    existingUsers.push(newUser);

    localStorage.setItem("users", JSON.stringify(existingUsers));
    localStorage.setItem("stayfinder_user", JSON.stringify(newUser)); // FIXED

    onLogin(newUser);
    onClose();
  };


  const handleSignIn = (e) => {
    e.preventDefault();
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const user = savedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      setError("No account found with these credentials.");
      return;
    }

    localStorage.setItem("stayfinder_user", JSON.stringify(user)); // FIXED
    onLogin(user);
    onClose();
  };

  const handleQuickLogin = (user) => {
    localStorage.setItem("stayfinder_user", JSON.stringify(user)); // FIXED
    onLogin(user);
    onClose();
  };

  const handleSwitch = () => {
    setError("");
    setIsSigningIn(!isSigningIn);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md mx-4 transform transition-all duration-300">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">
          {isSigningIn ? "Sign In" : "Create Account"}
        </h2>

        {error && <p className="text-red-600 mb-3 text-center">{error}</p>}

        <form
          onSubmit={isSigningIn ? handleSignIn : handleSignUp}
          className="space-y-4"
        >
          {!isSigningIn && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 mb-2 shadow-sm"
                placeholder="Enter your full name"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              autoComplete="email"
              name="email"
              className="w-full p-2 mb-3 shadow-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              autoComplete="current-password"
              name="password"
              className="w-full p-2 mb-3 shadow-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-md"
          >
            {isSigningIn ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <div className="mt-6 text-center space-y-3">
          <button
            onClick={handleSwitch}
            className="block w-full text-sm text-blue-600 font-medium hover:text-blue-800 transition"
          >
            {isSigningIn
              ? "Need an account? Sign Up"
              : "Already have an account? Sign In"}
          </button>

          <button
            onClick={onClose}
            className="text-sm text-gray-500 hover:text-gray-800"
          >
            Continue as Guest
          </button>
        </div>
      </div>
    </div>
  );
};

const rentalProperties = [
  { id: 1, title: "Modern 2-Bedroom Apartment", location: "Ikeja, Lagos", price: "₦350,000 / year", type: "Apartment", image: "https://images.unsplash.com/photo-1586105251261-72a756497a11" },
  { id: 2, title: "Marble Crest Vila", location: "Lekki Phase 1", price: "₦2,500,000 / year", type: "Luxury Villa", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
  { id: 3, title: "Self-Contained Room", location: "Yaba, Lagos", price: "₦250,000 / year", type: "Self Contain", image: "https://images.unsplash.com/photo-1560185127-6ed189bf02ec" },
  { id: 4, title: "3-Bedroom Terrace Duplex", location: "Gbagada, Lagos", price: "₦1,200,000 / year", type: "Apartment", image: "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f" },
  { id: 5, title: "Newly Built Mini Flat", location: "Surulere, Lagos", price: "₦600,000 / year", type: "Mini Flat", image: "https://images.unsplash.com/photo-1600585154154-98d06e4e8b1b" },
  { id: 6, title: "Affordable Self Contain", location: "Oshodi, Lagos", price: "₦180,000 / year", type: "Self Contain", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" },
  { id: 7, title: "Modern Mini Flat with Balcony", location: "Lekki Phase 2", price: "₦750,000 / year", type: "Mini Flat", image: "https://images.unsplash.com/photo-1622015663313-1d71f6b16e65" },
  { id: 8, title: "1 Bedroom Apartment", location: "Victoria Island", price: "₦250,000 / year", type: "Apartment", image: "https://images.unsplash.com/photo-1613977257364-56ce948f5657" },
  { id: 9, title: "Standard Self Contain", location: "Yaba, Lagos", price: "₦230,000 / year", type: "Self Contain", image: "https://images.unsplash.com/photo-1600607687920-4eac4f3f95c9" },
];

export default function Rent() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser] = useState(null);
  const [typeFilter, setTypeFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("stayfinder_user");
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("stayfinder_user"); // FIXED
    setUser(null);
  };

  const filtered = rentalProperties.filter((prop) => {
    const typeMatch = typeFilter === "All" || prop.type === typeFilter;
    const locationMatch =
      locationFilter === "All" || prop.location.includes(locationFilter);
    const searchMatch = prop.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return typeMatch && locationMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar
        user={user}
        onLogout={handleLogout}
        onSignInClick={() => setShowAuthModal(true)}
      />

      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onLogin={setUser}
        />
      )}

      <div className="relative w-full text-white py-20 text-center shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">Find Rental Homes</h1>
          <p className="mt-3 text-lg opacity-90">
            Browse thousands of rental listings across Nigeria
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 p-5 bg-white rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Filter & Search Rentals</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by property title..."
            className="p-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          />

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="p-3 rounded-lg"
          >
            <option>All</option>
            <option>Apartment</option>
            <option>Mini Flat</option>
            <option>Self Contain</option>
            <option>Luxury Villa</option>
          </select>

          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="p-3 rounded-lg"
          >
            <option>All</option>
            <option>Ikeja</option>
            <option>Lekki</option>
            <option>Yaba</option>
            <option>Surulere</option>
            <option>Victoria Island</option>
            <option>Gbagada</option>
            <option>Oshodi</option>
          </select>

          <button
            onClick={() => {
              setTypeFilter("All");
              setLocationFilter("All");
              setSearchQuery("");
            }}
            className="p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Reset Filters
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 m-auto">
        {filtered.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-bold">{property.title}</h3>
              <p className="text-gray-500 text-sm mt-1">
                {property.location}
              </p>
              <p className="text-blue-600 font-semibold mt-3">
                {property.price}
              </p>
              <p className="text-sm text-gray-700 bg-gray-100 mt-2 inline-block px-2 py-1 rounded-lg">
                {property.type}
              </p>

              <button
                onClick={() => {
                  if (!user) setShowAuthModal(true);
                  else navigate(`/rent/${property.id}`);
                }}
                className={`block mt-4 w-full text-center py-2 rounded-lg transition ${
                  user
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
