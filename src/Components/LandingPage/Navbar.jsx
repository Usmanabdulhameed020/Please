import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ user, onLogout, onSignInClick }) => {
  const location = useLocation();

  const isRentPage = location.pathname.startsWith("/rent");
  const isBuyPage = location.pathname.startsWith("/buy");

  const showAuthButtons = isRentPage || isBuyPage;

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="flex justify-between items-center fixed w-full bg-white shadow-md px-6 py-4 h-19 top-0 z-50">
      <Link to="/" className="flex items-center space-x-2">
        <img src="https://r72.cooltext.com/d.php?renderid=497236393003505&extension=png" alt="StayFinder Logo" className="h-8 w-39 object-contain" />
        <span className="font-bold text-xl text-blue-700"></span>
      </Link>

      <ul className="flex items-center space-x-8 mr-10">

        {[
          { name: "Rentals", path: "/rent" },
          { name: "Buy", path: "/buy" },
          { name: "Mortgage", path: "/mortgage" },
          { name: "Find an Agent", path: "/find-an-agent" },
          { name: "Conatct", path: "/Contact" },
        ].map((item) => (
          <li key={item.path} className="relative group">
            <Link
              to={item.path}
              className={`
                text-gray-700 font-medium
                ${isActive(item.path) ? "text-blue-600" : ""}
                transition-colors duration-300 py-2 block
              `}
            >
              {item.name}
              <span
                className={`
                  absolute left-0 -bottom-0.5 h-0.5 bg-blue-600
                  transition-all duration-300
                  ${isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"}
                `}
              ></span>
            </Link>
          </li>
        ))}
        

        {showAuthButtons && (
          <>
            {user ? (
              <>
                <li className="text-gray-700 font-medium">
                  Welcome, {user.name}
                </li>
                <li>
                  <button
                    onClick={onLogout}
                    className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <button
                  onClick={onSignInClick}
                  className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition"
                >
                  Join Now
                </button>
              </li>
            )}
          </>
        )}

      </ul>
    </nav>
  );
};

export default Navbar;
