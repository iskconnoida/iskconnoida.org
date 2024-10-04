import { domAnimation, LazyMotion, m } from "framer-motion";
import { useEffect, useState } from "react";
import { FaClock, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";

/**
 *
 *
 * @interface GalleryItem
 */
interface GalleryItem {
  img: string;
  title: string;
  date: string;
}

/**
 *
 *
 * @interface Video
 */
interface Video {
  kirtan: string;
  title: string;
  date: string;
}

const videos = [
  {
    kirtan:
      "https://www.youtube-nocookie.com/embed/AJSa73dhroQ?si=UjEcenbJ9tTxW0Pl",
    title:
      "75th Vyasa Puja of HH Jayapataka Swami Maharaj @ISKCONNOIDAofficial",
    date: "April 19, 2024",
  },
  {
    kirtan:
      "https://www.youtube-nocookie.com/embed/sqmIpsJZzNA?si=VDmwFrqrBo7m7Ehv",
    title: "Special Interaction Session with HH Guru Prasad Swami Maharaj",
    date: "April 07, 2024",
  },
  {
    kirtan:
      "https://www.youtube-nocookie.com/embed/AMA-cZXRczI?si=SLwgzHIQYfi2zdkA",
    title: "Special Brahmotsav Lecture by HH Lokanath Swami Maharaj",
    date: "March 31, 2024",
  },
  {
    kirtan:
      "https://www.youtube-nocookie.com/embed/e6rw0CUMU1I?si=YBWYeIEst2D77c4K",
    title:
      "Chaitanya Charitamrita Adi lila 7.24 by HH Rup Rugnath swami Maharaj",
    date: "April 19, 2023",
  },
];

/**
 *
 *
 * @interface MediaProps
 */
interface MediaProps {
  mediaSection: "gallery" | "kirtans";
}

/**
 *
 *
 * @return {Date} start date of darshan gallery
 */
function getStartDate(): Date {
  const startDate = new Date(2024, 7, 5);
  return startDate;
}

/**
 *
 *
 * @param {Date} date
 * @return {string} date in format "month day, year"
 */
function getFormattedDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
}

/**
 *
 *
 * @return {GalleryItem[]} GalleryItem[]
 */
function getGalleries(): GalleryItem[] {
  const startDate = getStartDate();
  const galleries = [
    { img: "/images/mon.webp", title: "Sringar Darshan" },
    { img: "/images/tue.webp", title: "Sringar Darshan" },
    { img: "/images/wed.webp", title: "Sringar Darshan" },
    { img: "/images/thu.webp", title: "Sringar Darshan" },
    { img: "/images/fri.webp", title: "Sringar Darshan" },
    { img: "/images/sat.webp", title: "Sringar Darshan" },
    { img: "/images/sun.webp", title: "Sringar Darshan" },
  ];

  const fullDates = galleries.map((_, index) => {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + index);
    return getFormattedDate(currentDate);
  });

  return galleries.map((gallery, index) => ({
    ...gallery,
    date: fullDates[index],
  }));
}

/**
 *
 *
 * @param {MediaProps} mediaSection (gallery | kirtans)
 * @return {JSX.Element} Media page
 */
export default function Media({ mediaSection }: MediaProps): JSX.Element {
  const [galleryData, setGalleryData] = useState<GalleryItem[]>([]);
  const [showSlider, setShowSlider] = useState<boolean>(false);
  const [currentSlides, setCurrentSlides] = useState<GalleryItem[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const handleOpenModal = (video: Video) => {
    setSelectedVideo(video);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  useEffect(() => {
    const galleries = getGalleries();
    galleries.sort((a, b) => {
      const dateA = new Date(a.date.split(" ").reverse().join("-"));
      const dateB = new Date(b.date.split(" ").reverse().join("-"));
      return dateB.getTime() - dateA.getTime();
    });
    setGalleryData(galleries);
  }, []);

  const handleShowSlider = (slides: GalleryItem[]) => {
    setCurrentSlides(slides);
    setShowSlider(true);
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto lg:px-10 md:px-4 px-6 my-14"
      >
        <h3 className="text-3xl text-center font-semibold mb-10 mt-10">
          {mediaSection === "gallery"
            ? "Daily Darshan Gallery"
            : "Kirtans & Lectures"}
        </h3>
        {mediaSection === "gallery" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-10">
              {galleryData.map((photo, index) => (
                <div
                  key={index}
                  onClick={() => handleShowSlider(galleryData)}
                  className="cursor-pointer"
                >
                  <div className="rounded-lg shadow-md overflow-hidden h-96 flex flex-col items-start justify-start">
                    <div className="w-full flex items-center justify-center h-80">
                      <img
                        src={photo.img}
                        alt={photo.title}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                    <div className="p-2 px-4 h-20">
                      <h1 className="text-base font-semibold text-gray-800">
                        {photo.title}
                      </h1>
                      <h5 className="flex items-center gap-2 text-sm font-semibold pt-1 text-gray-800">
                        <FaClock className="text-white bg-black w-4 h-4 rounded-xl border-2 border-black" />
                        {photo.date}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="md:hidden w-full border border-primary700 rounded-lg bg-primary600 px-4 py-2 text-white shadow-lg shadow-primary300 hover:shadow-primary300 hover:shadow-xl">
              <Link to="/media/kirtans">View Lectures & Kirtans</Link>
            </button>

            {showSlider && (
              <div className="fixed inset-0 top-0 bottom-0 bg-black flex items-center justify-center z-50">
                <Slider
                  slides={currentSlides.map((slide) => ({
                    img: slide.img,
                    title: slide.title,
                    date: slide.date,
                  }))}
                  onClose={() => setShowSlider(false)}
                />
              </div>
            )}
          </>
        )}
        {mediaSection === "kirtans" && (
          <>
            <div className="w-full md:px-4 lg:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-10">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() => handleOpenModal(video)}
                >
                  <div className="rounded-lg shadow-md overflow-hidden h-96 flex flex-col items-start justify-start">
                    <div className="w-full flex items-center justify-center h-80">
                      <iframe
                        className="w-full h-80 md:pointer-events-none"
                        src={video.kirtan}
                        loading="lazy"
                      />
                    </div>
                    <div className="p-2 px-4 h-20">
                      <h1 className="text-base font-semibold text-gray-800 line-clamp-1">
                        {video.title}
                      </h1>
                      <h5 className="flex items-center gap-2 text-sm font-semibold pt-1 text-gray-800">
                        <FaClock className="text-white bg-black w-4 h-4 rounded-xl border-2 border-black" />
                        {video.date}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="md:hidden w-full border border-primary700 rounded-lg bg-primary600 px-4 py-2 text-white shadow-lg shadow-primary300 hover:shadow-primary300 hover:shadow-xl">
              <Link to="/media/gallery">View Darshan Gallery</Link>
            </button>

            {selectedVideo && (
              <div className="hidden fixed inset-0 bg-black bg-opacity-80 md:flex items-center justify-center z-50">
                <div className="relative bg-white p-4 rounded-lg shadow-lg">
                  <button
                    onClick={handleCloseModal}
                    className="absolute top-1 right-1 bg-gray-500 text-white p-2 rounded-full"
                  >
                    <FaXmark />
                  </button>
                  <iframe
                    width="725"
                    height="450"
                    src={selectedVideo.kirtan}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="no-referrer"
                    allowFullScreen
                    loading="lazy"
                  />
                  <div className="mt-4">
                    <h1 className="text-xl font-semibold text-gray-800">
                      {selectedVideo.title}
                    </h1>
                    <h5 className="flex items-center gap-2 text-sm font-semibold pt-1 text-gray-800">
                      <FaClock className="text-white bg-black w-4 h-4 rounded-xl border-2 border-black" />
                      {selectedVideo.date}
                    </h5>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </m.div>
    </LazyMotion>
  );
}
