import { LazyMotion, domAnimation, m } from "framer-motion";
import { useEffect, useState } from "react";
import TempleSchedule from "./TempleSchedule";
import TempleScheduleModal from "./TempleScheduleModal";

/**
 *
 *
 * @return {JSX.Element} Hero section
 */
export default function Hero(): JSX.Element {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    const sT = window.scrollY || document.documentElement.scrollTop;
    const sL = window.scrollX || document.documentElement.scrollLeft;
    window.onscroll = () => {
      window.scrollTo({ top: sT, left: sL, behavior: "instant" });
    };
  };

  const closeModal = () => {
    setModalOpen(false);
    window.onscroll = () => {
      return 0;
    };
  };

  let imgURL = "";
  switch (new Date().getUTCDay()) {
    case 0:
      imgURL = "/images/sun.webp";
      break;
    case 1:
      imgURL = "/images/mon.webp";
      break;
    case 2:
      imgURL = "/images/tue.webp";
      break;
    case 3:
      imgURL = "/images/wed.webp";
      break;
    case 4:
      imgURL = "/images/thu.webp";
      break;
    case 5:
      imgURL = "/images/fri.webp";
      break;
    case 6:
      imgURL = "/images/sat.webp";
      break;
  }

  useEffect(() => {
    document.getElementById("hero")!.style.backgroundImage = `url(${imgURL})`;
  }, [imgURL]);

  return (
    <div className="mb-8">
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          id="hero"
          className="lg:mt-[3.5rem] h-screen lg:h-[calc(100vh-3.5rem)] flex flex-col w-screen bg-center bg-no-repeat bg-cover text-center"
        >
          <div className="absolute bottom-0 left-0 right-0 h-full w-full bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-primary500/50 via-primary900/10 to-transparent z-0"></div>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65 }}
            className="h-full w-full text-white pb-4 text-shadow shadow-gray-900 flex flex-col z-10"
          >
            <h1 className="text-xl sm:text-2xl font-semibold flex justify-center items-end mt-auto py-4 h-1/2">
              Welcome To
            </h1>
            <h1 className="text-2xl sm:text-5xl font-semibold flex justify-center items-end px-4 pb-2">
              SRI SRI RADHA GOVIND DEV JI TEMPLE
            </h1>
          </m.div>
          <div className="relative w-full h-2/6 flex justify-center items-center">
            <div className="absolute bottom-0 left-0 h-4/5 right-0 bg-gradient-to-b from-transparent to-white z-0"></div>
            <m.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", duration: 0.75 }}
              className="bg-white sm:w-2/3 w-11/12 h-full rounded-t-2xl z-10 pt-4"
            >
              <TempleSchedule />
              <div className="text-center mt-4">
                <button
                  onClick={openModal}
                  className="border border-primary500 rounded-lg bg-primary500 px-4 py-2 text-white font-semibold shadow-lg shadow-primary300 hover:shadow-primary300 hover:shadow-xl"
                >
                  View Temple Schedule
                </button>
              </div>
              <TempleScheduleModal isOpen={isModalOpen} onClose={closeModal} />
            </m.div>
          </div>
        </m.div>
      </LazyMotion>
    </div>
  );
}
