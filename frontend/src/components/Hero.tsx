import { useEffect, useState } from "react";
import TempleSchedule from "./TempleSchedule";
import TempleScheduleModal from "./TempleScheduleModal";
import { motion } from "framer-motion";

export default function Hero() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
    console.log(document.getElementById("hero"));
    document.getElementById("hero")!.style.backgroundImage = `url(${imgURL})`;
  }, [imgURL]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        id="hero"
        className="lg:mt-[3.5rem] h-screen lg:h-[calc(100vh-3.5rem)] flex flex-col w-screen bg-center bg-no-repeat bg-cover text-center"
      >
        <div className="absolute bottom-0 left-0 right-0 h-full w-full bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-violet-500/50 via-violet-900/10 to-transparent z-0"></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65 }}
          className="font-extrabold h-full w-full text-white pb-4 text-shadow shadow-gray-900 flex flex-col z-10"
        >
          <h1 className="text-xl sm:text-2xl flex justify-center items-end mt-auto py-4 h-1/2">
            Welcome To
          </h1>
          <h1 className="text-2xl sm:text-5xl font-bold flex justify-center items-end pb-2">
            SRI SRI RADHA GOVIND DEV JI TEMPLE
          </h1>
        </motion.div>
        <div className="relative w-full h-2/6 flex justify-center items-center">
          <div className="absolute bottom-0 left-0 h-4/5 right-0 bg-gradient-to-b from-transparent to-white z-0"></div>
          <motion.div
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
                className="border border-violet-500 rounded-lg bg-violet-500 px-4 py-2 text-white font-semibold shadow-lg shadow-violet-300 hover:shadow-violet-300 hover:shadow-xl"
              >
                View Temple Schedule
              </button>
            </div>
            <TempleScheduleModal isOpen={isModalOpen} onClose={closeModal} />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
