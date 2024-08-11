import { useEffect, useState } from "react";
import TempleScheduleModal from "./TempleScheduleModal";
import TempleSchedule from "./TempleSchedule";

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
      <h1 className="text-xl sm:text-2xl font-bold text-white flex justify-center items-end mt-auto py-4 h-1/2 w-full" style={{ textShadow: '3px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000' }}>
        Welcome To
      </h1>
      <h1 className="text-2xl sm:text-5xl font-bold text-white flex justify-center items-end pb-2 w-full" style={{ textShadow: '3px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000' }}>
        SRI SRI RADHA GOVIND DEV JI TEMPLE
      </h1>
        <div className="relative w-full h-2/6 flex justify-center items-center">
        <div className="absolute bottom-0 left-0 h-4/5 right-0 bg-gradient-to-b from-transparent to-white z-0"></div>
        <div className="bg-white sm:w-2/3 w-11/12 h-full rounded-t-2xl z-10">
        
        <TempleSchedule />
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
