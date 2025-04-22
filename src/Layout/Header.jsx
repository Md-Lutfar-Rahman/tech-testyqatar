import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  // State to handle dropdown visibility
  const [coursesDropdown, setCoursesDropdown] = useState(false);
  const [foodMenuDropdown, setFoodMenuDropdown] = useState(false);

  return (
    <header className="bg-primary text-blackdow-md">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-xl font-semibold">
          <Link to="/">Tech & Taste Qatar</Link>
        </div>

        {/* Navbar Links */}
        <div className="space-x-6 flex items-center">
          {/* Home Link */}
          <NavLink to="/" className="text-black hover:text-gray-300" end>
            Home
          </NavLink>

          {/* Courses Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCoursesDropdown(true)}
            onMouseLeave={() => setCoursesDropdown(false)}
          >
            <NavLink
              to="/courses"
              className="text-black hover:text-gray-300"
            >
              Courses
            </NavLink>
            {coursesDropdown && (
              <div className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md w-48">
                <NavLink
                  to="/courses/advanced"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Advanced Courses
                </NavLink>
                <NavLink
                  to="/courses/beginner"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Beginner Courses
                </NavLink>
                <NavLink
                  to="/courses/online"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Online Courses
                </NavLink>
              </div>
            )}
          </div>

          {/* Food Menu Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setFoodMenuDropdown(true)}
            onMouseLeave={() => setFoodMenuDropdown(false)}
          >
            <NavLink
              to="/menu"
              className="text-black hover:text-gray-300"
            >
              Menu
            </NavLink>
            {foodMenuDropdown && (
              <div className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md w-48">
                <NavLink
                  to="/menu/pizza"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Pizza
                </NavLink>
                <NavLink
                  to="/menu/burger"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Burger
                </NavLink>
                <NavLink
                  to="/menu/sushi"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Sushi
                </NavLink>
              </div>
            )}
          </div>

          {/* Other Links */}
          <NavLink
            to="/order"
            className="text-black hover:text-gray-300"
          >
            Order
          </NavLink>
          <NavLink
            to="/contact"
            className="text-black hover:text-gray-300"
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
