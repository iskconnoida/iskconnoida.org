import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BiDonateHeart } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import { FaHandSparkles, FaHome } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { TfiGift } from "react-icons/tfi";
import { Link, useLocation } from "react-router-dom";

function BottomBar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [isPopupVisible, setPopupVisible] = useState(false);
  const togglePopup = () => setPopupVisible(!isPopupVisible);

  return (
    <section className="fixed bottom-0 z-10 w-full rounded-t-3xl bg-white px-4 py-2 backdrop-blur-sm border-2 xs:px-4 md:hidden">
      <div className="flex items-center justify-between gap-3 xs:gap-0 ">
        <Link
          to="/"
          className={`xs:text-xs md:text-base lg:text-xl font-semibold text-gray-600 rounded-lg xs:px-1 px-1 text-right ${
            isActive("/") ? "bg-gray-600 text-white" : "bg-white"
          }`}
        >
          {" "}
          <FaHome size={24} className="ml-1" /> Home{" "}
        </Link>
        <Link
          to="/services"
          className={`xs:text-xs md:text-base lg:text-xl font-semibold text-gray-600  rounded-lg xs:px-1 px-1 ${
            isActive("/services") ? "bg-gray-600 text-white" : "bg-white"
          }`}
        >
          {" "}
          <FaHandSparkles size={24} className="ml-2" /> Services
        </Link>
        <Link
          to="/donate"
          className={`xs:text-xs md:text-base lg:text-xl font-semibold text-shadow-lg px-2 py-1 rounded-lg shadow-lg border border-orange-300 ${
            isActive("/donate")
              ? "bg-orange-500 text-white"
              : "text-orange-900 bg-yellow-500 shadow-orange-200"
          }`}
        >
          {" "}
          <TfiGift size={15} className="ml-3" /> Donate
        </Link>
        <Link
          to="/events"
          className={`xs:text-xs md:text-base lg:text-xl font-semibold text-gray-600 rounded-lg xs:px-1 px-1 ${
            isActive("/events") ? "bg-gray-600 text-white" : "bg-white"
          }`}
        >
          <BiDonateHeart size={24} className="ml-2" /> Festivals
        </Link>
        <button
          onClick={togglePopup}
          className="xs:text-xs md:text-base lg:text-xl font-semibold text-gray-600 bg-white px-2 rounded-full  text-shadow-lg"
        >
          <CiCircleMore size={24} className="ml-0" /> More
        </button>
        <AnimatePresence>
          {isPopupVisible && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed inset-0 flex items-end justify-center bg-opacity-0"
            >
              <div className="relative w-full bg-white rounded-t-3xl p-5 mb-14">
                <button
                  onClick={togglePopup}
                  className="absolute top-4 right-4 text-gray-600 hover:bg-gray-200 rounded-full p-2"
                >
                  <IoMdCloseCircleOutline size={24} />
                </button>
                <div className="">
                  <Link
                    to="/about"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                  >
                    About
                  </Link>
                  <Link
                    to="/media/gallery"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                  >
                    Media
                  </Link>
                  <Link
                    to="/facilities"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                  >
                    Facilities
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default BottomBar;
