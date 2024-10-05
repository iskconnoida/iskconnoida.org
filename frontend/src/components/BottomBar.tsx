import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { useState } from "react";
import { BiDonateHeart } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import { FaHandSparkles, FaHome } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { TfiGift } from "react-icons/tfi";
import { Link, useLocation, useParams } from "react-router-dom";

/**
 *
 *
 * @return {JSX.Element} Bottom navigation bar
 */
export default function BottomBar(): JSX.Element {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const { id } = useParams();
  const [isPopupVisible, setPopupVisible] = useState(false);
  const togglePopup = () => setPopupVisible(!isPopupVisible);

  return (
    <section
      className={
        "fixed bottom-0 z-10 w-full bg-white px-5 py-2 backdrop-blur-sm xs:px-4 md:hidden" +
        (isPopupVisible ? "" : " rounded-t-xl")
      }
    >
      <div className="flex items-center justify-between gap-3 xs:gap-0 ">
        <Link
          to="/"
          onClick={() => setPopupVisible(false)}
          className={`xs:text-xs md:text-base lg:text-xl font-semibold text-gray-600 rounded-lg xs:px-1 px-1 text-center z-20 ${
            isActive("/") && !isPopupVisible ? "text-primary600" : "bg-white"
          }`}
        >
          {" "}
          <FaHome size={24} className="mx-auto" /> Home{" "}
        </Link>
        <Link
          to="/services"
          onClick={() => setPopupVisible(false)}
          className={`xs:text-xs md:text-base lg:text-xl font-semibold text-gray-600 text-center rounded-lg xs:px-1 px-1 z-20 ${
            isActive("/services") && !isPopupVisible
              ? "text-primary600"
              : "bg-white"
          }`}
        >
          {" "}
          <FaHandSparkles size={24} className="mx-auto" /> Services
        </Link>
        <Link
          to="/donate"
          onClick={() => setPopupVisible(false)}
          className={`xs:text-xs md:text-base lg:text-xl font-semibold text-shadow-lg text-center px-2 py-2 rounded-lg shadow-md border border-orange-300 z-20 ${
            isActive("/donate")
              ? "bg-orange-500 text-white"
              : "text-orange-900 bg-yellow-500 shadow-orange-200"
          }`}
        >
          {" "}
          <TfiGift size={15} className="mx-auto" /> Donate
        </Link>
        <Link
          to="/events"
          onClick={() => setPopupVisible(false)}
          className={`xs:text-xs md:text-base lg:text-xl font-semibold text-gray-600 text-center rounded-lg xs:px-1 px-1 z-20 ${
            (isActive("/events") || isActive(`/events/${id}`)) &&
            !isPopupVisible
              ? "text-primary600"
              : "bg-white"
          }`}
        >
          <BiDonateHeart size={24} className="mx-auto" /> Festivals
        </Link>
        <button
          onClick={togglePopup}
          className={`xs:text-xs md:text-base lg:text-xl font-semibold text-gray-600 text-center rounded-lg xs:px-1 px-1 z-20 ${
            isPopupVisible ? "text-primary600" : "bg-white"
          }`}
        >
          <CiCircleMore size={24} className="mx-auto" /> More
        </button>
        <AnimatePresence>
          {isPopupVisible && (
            <LazyMotion features={domAnimation}>
              <m.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ type: "spring", duration: 0.3 }}
                className="fixed bottom-0 left-0 inset-0 w-full text-center flex items-end justify-center bg-opacity-0"
              >
                <div className="relative border-x-2 border-t-2 border-b border-gray-300 w-full bg-white rounded-t-3xl px-6 mb-16">
                  <button
                    onClick={togglePopup}
                    className="absolute top-4 right-4 text-gray-600 hover:bg-gray-100 hover:text-[#4d4330] hover:shadow-lg rounded-full p-2 transition-w transition-all duration-300"
                  >
                    <IoMdCloseCircleOutline size={24} />
                  </button>
                  <div className="">
                    <Link
                      to="/about"
                      onClick={togglePopup}
                      className={`block rounded-md px-4 py-3 hover:bg-gray-200 ${isActive("/about") ? "text-primary600" : "text-black"}`}
                    >
                      About
                    </Link>
                    <hr />
                    <Link
                      to="/media/gallery"
                      onClick={togglePopup}
                      className={`block rounded-md px-4 py-3 hover:bg-gray-200 ${isActive("/media/gallery") || isActive("/media/kirtans") ? "text-primary600" : "text-black"}`}
                    >
                      Media
                    </Link>
                    <hr />
                    <Link
                      to="/facilities"
                      onClick={togglePopup}
                      className={`block rounded-md px-4 py-3 hover:bg-gray-200 ${isActive("/facilities") ? "text-primary600" : "text-black"}`}
                    >
                      Facilities
                    </Link>
                  </div>
                </div>
              </m.div>
            </LazyMotion>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
