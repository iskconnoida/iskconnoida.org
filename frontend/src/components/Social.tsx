import { Link } from "react-router-dom";

/**
 *
 *
 * @return {JSX.Element} social media container
 */
export default function Social(): JSX.Element {
  return (
    <div className="w-full mt-12 py-12 z-[5] rounded-t-lg bg-primary600">
      <div className="text-center text-3xl font-bold text-white pb-12">
        Stay In Touch
      </div>
      <div className="w-full md:flex items-center justify-evenly">
        <div className="md:mx-4 my-4 md:my-0 md:w-1/2 h-full flex justify-center">
          <iframe
            src="https://www.instagram.com/iskcon_noida/embed/"
            className="rounded-xl shadow-lg mx-auto outline-none outline-0 w-[350px] h-[442px] md:w-[400px] md:h-[460px] lg:w-[500px] lg:h-[555px]"
            scrolling="no"
            loading="lazy"
          />
        </div>
        <div className="md:mx-4 my-4 md:my-0 md:w-1/2 h-full flex justify-center">
          <div className="rounded-xl flex flex-col md:bg-white md:shadow-lg mx-auto outline-none outline-0 w-fit h-fit md:w-[400px] md:h-[460px] lg:w-[500px] lg:h-[555px]">
            <Link
              to="https://youtube.com/@ISKCONNOIDAofficial"
              className="p-6 hidden md:flex md:h-[142px] lg:h-[157px]"
            >
              <img
                src="https://yt3.googleusercontent.com/GedslwcJY8kiJgoFJfyjFaGrQtUsshA1dz6t1AU4NWUTXgi0Yg3QGiKXSn5c5xeYXkOPkY2e1wA=s160-c-k-c0x00ffffff-no-rj"
                className="rounded-full border my-auto h-14 w-14 md:h-20 md:w-20 lg:h-24 lg:w-24"
                loading="lazy"
              />
              <div className="h-fit pl-2 my-auto">
                <div className="font-bold">ISKCONNOIDAofficial</div>
                <div className="text-sm">
                  "Enrich your spiritual journey at Govind Dham and
                  Bhaktivedanta Academy"{" "}
                  <span className="text-blue-500">{"\u2026"}more</span>
                </div>
              </div>
            </Link>
            <iframe
              src="https://www.youtube-nocookie.com/embed?list=UULFuirvO7R7VK16rTwdgHR9fg"
              className="rounded-xl md:rounded-none shadow-lg md:shadow-none mt-auto outline-none outline-0 w-[350px] h-[200px] md:w-[400px] md:h-[265px] lg:w-[500px] lg:h-[330px]"
              loading="lazy"
            />
            <Link
              to="https://youtube.com/@ISKCONNOIDAofficial"
              rel="norefferer noopener"
              target="_blank"
              className="text-center hidden md:block md:m-2 lg:m-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold text-sm tracking-tight py-2 px-4 rounded-lg"
            >
              View full profile on YouTube
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
