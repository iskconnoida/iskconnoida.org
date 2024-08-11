import { useEffect } from "react";

export default function Hero() {
  let imgURL: string = "";
  switch (new Date().getUTCDay()) {
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
      <div id="hero" className="md:mt-[3.5rem] h-[calc(100vh-3.5rem)] flex w-screen bg-center bg-no-repeat bg-cover">
        <div className="bg-gradient-to-b from-transparent to-gray-800 text-4xl font-bold text-rose-100 text-shadow-xl shadow-red-300 flex text-center justify-center items-end mt-auto py-14 px-4 h-1/2 w-full">
          WELCOME TO SRI SRI RADHA GOVIND DEV JI TEMPLE
        {/* <div className="bg-white w-2/3 h-full rounded-t-2xl"></div> */}
        </div>
      </div>
    </>
  );
}
