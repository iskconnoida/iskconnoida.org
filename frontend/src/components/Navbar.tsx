import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { Link, useLocation, useParams } from "react-router-dom";

/**
 *
 *
 * @return {JSX.Element} Navbar
 */
export default function Navbar(): JSX.Element {
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const isActive = (path: string) => location.pathname === path;
  const { id } = useParams();
  return (
    <div className="h-16 w-full flex justify-between items-center px-4 lg:px-10 bg-white shadow-lg rounded-b-lg bg-clip-padding border-2 fixed top-0 left-0 right-0 z-20">
      <Link to="/" className="w-full h-full">
        <img src="/images/logo.webp" alt="logo" className="my-auto h-14" />
      </Link>
      <Link
        to="https://iic.iskconnoida.org/"
        className="md:hidden font-semibold text-gray-800"
      >
        Login
      </Link>
      <span className="md:flex w-3/4 items-center justify-evenly hidden">
        <Link
          to="/"
          className={`md:text-base lg:text-xl font-semibold text-gray-600 px-2 py-1 rounded-full text-shadow-lg shadow-purple-100 ${
            isActive("/") ? "text-primary600" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`md:text-base lg:text-xl font-semibold text-gray-600 px-2 py-1 rounded-full text-shadow-lg shadow-purple-100 ${
            isActive("/about") ? "text-primary600" : ""
          }`}
        >
          About
        </Link>
        <Link
          to="/services"
          className={`md:text-base lg:text-xl font-semibold text-gray-600 px-2 py-1 rounded-full text-shadow-lg shadow-purple-100 ${
            isActive("/services") ? "text-primary600" : ""
          }`}
        >
          Services
        </Link>
        <div
          className="relative group"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            className={`md:text-base flex items-center lg:text-xl font-semibold text-gray-600 bg-white px-2 rounded-full text-shadow-lg shadow-purple-100 ${isActive("/media/gallery") || isActive("/media/kirtans") ? "text-primary600" : ""}`}
          >
            Media
            <FaChevronDown size={12} className="mt-1 ml-1" />
          </button>
          <AnimatePresence>
            {isDropdownOpen && (
              <LazyMotion features={domAnimation}>
                <m.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-56 bg-white shadow-lg left-0 rounded-lg shadow-gray-600 border"
                >
                  <Link
                    to="/media/gallery"
                    onClick={() => setDropdownOpen(false)}
                    className={`block rounded-lg px-4 py-3 hover:bg-gray-200 ${isActive("/media/gallery") ? "text-primary600" : "text-black"}`}
                  >
                    Darshan Gallery
                  </Link>
                  <hr className="mx-2" />
                  <Link
                    to="/media/kirtans"
                    onClick={() => setDropdownOpen(false)}
                    className={`block rounded-lg px-4 py-3 hover:bg-gray-200 ${isActive("/media/kirtans") ? "text-primary600" : "text-black"}`}
                  >
                    Kirtans & Lectures
                  </Link>
                </m.div>
              </LazyMotion>
            )}
          </AnimatePresence>
        </div>
        <Link
          to="/events"
          className={`md:text-base lg:text-xl font-semibold text-gray-600 rounded-full px-2 py-1 text-shadow-lg shadow-purple-100 ${
            isActive("/events") || isActive(`/events/${id}`)
              ? "text-primary600"
              : ""
          }`}
        >
          Festivals
        </Link>
        <Link
          to="/facilities"
          className={`md:text-base lg:text-xl font-semibold text-gray-600 rounded-full px-2 py-1 text-shadow-lg shadow-purple-100 ${
            isActive("/facilities") ? "text-primary600" : ""
          }`}
        >
          Facilities
        </Link>
        <Link
          to="/donate"
          className={`md:text-base lg:text-xl font-semibold text-shadow-lg px-2 py-1 rounded-lg shadow-lg border border-orange-300 ${
            isActive("/donate")
              ? "bg-orange-500 text-white"
              : "text-orange-900 bg-yellow-500 shadow-orange-200"
          }`}
        >
          Donate
        </Link>
      </span>
    </div>
  );
}
