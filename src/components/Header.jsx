import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, isMobile]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "dates", label: "Important Dates" },
    { id: "registration", label: "Registration" },
    { id: "venue", label: "Venue & Contact" },
  ];

  return (
    <header className="font-sans">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 py-3 shadow-lg relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-white opacity-10 rounded-full"></div>
          <div className="absolute top-1/4 right-10 w-6 h-6 bg-white opacity-5 rounded-full"></div>
          <div className="absolute bottom-0 left-1/3 w-10 h-10 bg-white opacity-15 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center relative z-10">
          <button
            className="md:hidden text-white flex items-center justify-center p-2 rounded-lg hover:bg-blue-800 transition-all duration-300 hover:scale-105"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className="hidden md:flex  justify-center flex-1 space-x-8 text-white text-lg font-medium">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="hover:text-blue-200 transition-all duration-300 relative group py-2 flex items-center gap-1"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="md:hidden w-10"></div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`absolute left-0 top-0 h-full w-64 bg-gradient-to-b from-blue-800 to-blue-900 shadow-2xl transform transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="p-5 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-blue-600">
                <h2 className="text-white text-xl font-bold">Menu</h2>
                <button
                  className="text-white p-1 rounded-full hover:bg-blue-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <ul className="flex-1">
                {menuItems.map((item) => (
                  <li
                    key={item.id}
                    className="border-b border-blue-600 last:border-b-0"
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(e, item.id)}
                      className="text-white text-lg font-medium py-4 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="pt-4 mt-auto border-t border-blue-600">
                <p className="text-blue-200 text-sm text-center">
                  PSG College of Technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Title + Logos */}
      <div className="bg-gradient-to-b from-white to-blue-50 shadow-md py-6 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-40 h-40 -translate-x-20 -translate-y-20 bg-blue-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 translate-x-16 translate-y-16 bg-blue-200 rounded-full opacity-20"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center relative z-10 gap-6 md:gap-12">
          {/* Left logos */}
          <div className="flex items-center gap-18 basis-1/4 justify-center">
            <img
              src="/images/75yearsLogo.png"
              alt="75 Years"
              className="h-16 md:h-20"
            />
            <img
              src="/images/PsgLogo.webp"
              alt="PSG College Logo"
              className="h-16 md:h-20"
            />
          </div>

          {/* Title */}
          <div className="text-center flex-1 md:mx-6 lg:mx-12">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              PSG COLLEGE OF TECHNOLOGY
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-blue-700 mt-1 whitespace-nowrap">
              Department of Computer Science and Engineering
            </h2>
            <p className="text-sm md:text-base text-gray-900 font-bold mt-2">
              Coimbatore, Tamil Nadu, India - 641004
            </p>
            <div className="mt-3 flex justify-center">
              <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full transform transition-all duration-500 hover:scale-125"></div>
            </div>
          </div>

          {/* Right logos */}
          <div className="flex items-center gap-8 basis-1/4 justify-center">
            <img
              src="/images/oldPsgLogo.png"
              alt="PSG Logo"
              className="h-16 md:h-20"
            />
            <img
              src="/images/100YearsLogo.jpeg"
              alt="100 Years of Excellence"
              className="h-16 md:h-20"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
