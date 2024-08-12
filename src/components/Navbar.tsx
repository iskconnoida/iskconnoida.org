import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  return (
    <div className="h-16 w-full flex justify-between items-center px-4 lg:px-10 bg-white shadow-lg rounded-b-lg bg-clip-padding border-2 fixed top-0 left-0 right-0 z-20">
      <a href="/" className="w-full h-full">
        <img
          src="/images/logo.webp"
          alt="logo"
          className="md:mx-0 mx-auto h-14"
        />
      </a>
      <span className="md:flex w-[60%] items-center justify-evenly hidden">
        <Link
          to="/"
          className={`md:text-base lg:text-lg font-semibold text-gray-600 px-2 py-1 text-shadow-lg rounded-full ${
            isActive("/") ? "bg-gray-600 text-white" : "bg-white"
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`md:text-base lg:text-xl font-semibold text-gray-600  px-2 py-1 rounded-full text-shadow-lg shadow-purple-100 ${
            isActive("/about") ? "bg-gray-600 text-white" : ""
          }`}
        >
          About
        </Link>
        <Link
          to="/services"
          className={`md:text-base lg:text-xl font-semibold text-gray-600  px-2 py-1 rounded-full text-shadow-lg shadow-purple-100 ${
            isActive("/services") ? "bg-gray-600 text-white" : ""
          }`}
        >
          Services
        </Link>
        <div className="relative group">
          <button className="md:text-base lg:text-xl font-semibold text-gray-600 bg-white px-2 rounded-full  text-shadow-lg shadow-purple-100">
            Media
          </button>
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0}}
                exit={{ opacity: 0, y: -10}}
                className="absolute right-0 mt-2 w-48 bg-white shadow-lg"
                >
                  <Link
                    to="/media/article1"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                  >
                    Dhruv Trivedi
                  </Link>
                  <Link
                    to="/media/article2"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                  >
                    Vaid Prabhu
                  </Link>
                  <Link
                    to="/media/article3"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                  >
                    Shukla prabhu
                  </Link>
                </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Link
          to="/events"
          className={`md:text-base lg:text-xl font-semibold text-gray-600 rounded-full px-2 py-1 text-shadow-lg shadow-purple-100 ${
            isActive("/festivals") ? "bg-gray-600 text-white" : "bg-white"
          }`}
        >
          Festivals
        </Link>
        <Link
          to="/facilities"
          className={`md:text-base lg:text-xl font-semibold text-gray-600 rounded-full px-2 py-1 text-shadow-lg shadow-purple-100 ${
            isActive("/facilities") ? "bg-gray-600 text-white" : "bg-white"
          }`}
        >
          Facilities
        </Link>
        <Link
          to="/donate"
          className="md:text-base lg:text-xl font-semibold text-orange-900 text-shadow-lg bg-yellow-500 px-2 py-1 rounded-lg shadow-lg border border-orange-300 shadow-orange-200 "
        >
          Donate
        </Link>
      </span>
    </div>
  );
};

export default Navbar;
