import { useEffect, useState } from "react";
import TempleScheduleModal from "./TempleScheduleModal";

export default function Hero() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
      setModalOpen(true);
  };

  const closeModal = () => {
      setModalOpen(false);
  };
  let imgURL: string = "";
  switch (new Date().getUTCDay()) {
    // uncalibrated placeholder images, subject to change
    case 0:
      imgURL =
        "/images/sun.webp";
      break;
    case 1:
      imgURL =
        "/images/mon.webp";
      break;
    case 2:
      imgURL =
        "/images/tue.webp";
      break;
    case 3:
      imgURL =
        "/images/wed.webp";
      break;
    case 4:
      imgURL =
        "/images/thu.webp";
      break;
    case 5:
      imgURL =
        "/images/fri.webp";
      break;
    case 6:
      imgURL =
        "/images/sat.webp";
      break;
  }

  useEffect(() => {
    console.log(document.getElementById("hero"));
    document.getElementById("hero")!.style.backgroundImage = `url(${imgURL})`;
  }, [imgURL]);

  return (
    <>
      <div id="hero" className="lg:mt-[3.5rem] h-[calc(100vh-3.5rem)] flex flex-col w-screen bg-center bg-no-repeat bg-cover text-center">
        <h1 className="text-4xl font-bold text-rose-100 text-shadow-xl shadow-red-300 flex  justify-center items-end mt-auto py-6 px-4 h-1/2 w-full ">
          WELCOME TO SRI SRI RADHA GOVIND DEV JI TEMPLE
        </h1>
        {/* <div className="bg-gradient-to-b from-transparent to-gray-800"> */}
        <div className="relative w-full h-2/6 flex justify-center items-center">
        <div className="absolute bottom-0 left-0 h-4/5 right-0 bg-gradient-to-b from-transparent to-white z-0"></div>
        <div className="bg-white sm:w-2/3 w-11/12 h-full rounded-t-2xl z-10">
        <div className="flex flex-row items-center justify-center mt-4 space-x-2 sm:space-y-0 sm:space-x-2">
          <span className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></span>
          <span className="text-lg sm:text-2xl text-center sm:text-left font-semibold">OPEN - Ongoing Rajbhog Arati</span>
        </div>
        <div className="text-center mt-2 text-sm sm:text-xl text-gray-500">
          <p className="">Open all days from 4:30 am- 1 pm </p>
          <p className="">4:15 pm - 9 pm IST</p>
        </div>
        <div className="text-center mt-6">
          <button onClick={openModal} className="border border-violet-500 rounded-lg bg-violet-500 px-4 py-2 text-white shadow-lg shadow-violet-300 hover:shadow-violet-300 hover:shadow-xl">View Temple Schedule</button>
        </div>
        <TempleScheduleModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
        </div>
        
        </div>
    </>
  );
}
