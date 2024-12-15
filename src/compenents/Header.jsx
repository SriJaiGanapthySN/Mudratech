import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative bg-white h-20 flex justify-between items-center px-10 z-50">
      {/* Logo */}
      <h1 className="text-red-600 font-extrabold text-2xl italic font-mono hover:text-black">
        <Link to="/">MUDRA-TECHNOLOGIES</Link>
      </h1>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-red-600 font-extrabold text-lg font-mono hover:text-black">
          About Us
        </Link>

        {/* Our Products with Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setShowDropdown(true)}
        >
          <p
            onClick={toggleDropdown}
            className="text-red-600 font-extrabold text-lg font-mono hover:text-black cursor-pointer"
          >
            Our Products
          </p>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute bg-white border border-gray-300 rounded-md mt-2 shadow-lg w-48 z-40">
              <ul className="flex flex-col text-red-600 font-mono">
              <li className="hover:bg-gray-200 p-2">
  <Link to="/Products/jewellery-scale">Jewellery Scale</Link>
</li>
<li className="hover:bg-gray-200 p-2">
  <Link to="/Products/table-top-scale">Table Top Scale</Link>
</li>
<li className="hover:bg-gray-200 p-2">
  <Link to="/Products/price-computing-scale">Price Computing Scale</Link>
</li>
<li className="hover:bg-gray-200 p-2">
  <Link to="/Products/platform-scale">Platform Scale</Link>
</li>
<li className="hover:bg-gray-200 p-2">
  <Link to="/Products/heavy-duty-platform-scale">Heavy Duty Platform Scale</Link>
</li>
<li className="hover:bg-gray-200 p-2">
  <Link to="/Products/weigh-bridges">Weigh Bridges</Link>
</li>
              </ul>
            </div>
          )}
        </div>

        <Link to="/ourexpertize" className="text-red-600 font-extrabold text-lg font-mono hover:text-black">
          Our Expertise
        </Link>
        <Link to="/ourexperience" className="text-red-600 font-extrabold text-lg font-mono hover:text-black">
          Our Experience
        </Link>
      </div>
    </div>
  );
}

export default Header;