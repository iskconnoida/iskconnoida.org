import {
  FaCircleCheck,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

/**
 *
 *
 * @return {JSX.Element} Footer
 */
export default function Footer(): JSX.Element {
  return (
    <footer className="pt-6 pb-2 bg-[#93282C] text-white w-full desktop:px-24 px-3 tablet:px-10">
      <div className="flex flex-col desktop:flex-row mb-3 desktop:items-center tablet:gap-4">
        <div className="flex-grow">
          <div className="flex flex-col md:items-center">
            <div className="flex flex-col gap-4 items-center text-center mb-4">
              <img
                src="/images/IskconLogoForFooter.webp"
                alt="Iskcon Noida"
                className="w-[140px] h-[140px] mr-3"
                loading="lazy"
              />
              <span>International Society for Krishna Consciousness</span>
            </div>
            <p className="md:text-center mb-4">
              <Link
                to="https://www.google.com/maps/place/ISKCON+Temple+Noida,+A-5,+Maharaja+Agrasen+Marg,+Opposite+Opposite+NTPC+office,+Block+A,+Sector+33,+Noida,+Uttar+Pradesh+201301/@28.5871507,77.350492,16z/data=!4m6!3m5!1s0x390ce5a12fee7d95:0x8bb417c53d8d172b!8m2!3d28.5868422!4d77.3503375!16s%2Fg%2F1wt3lsgf"
                target="_blank"
                rel="noopener norefferer"
                className="hover:underline"
              >
                ISKCON Noida, A-5, Maharaja Agrasen Marg, <br />
                Opposite NTPC office, Block A,
                <br />
                <span className="">Sector 33, Noida, Uttar Pradesh 201301</span>
              </Link>
            </p>
            <ul className="flex space-x-5">
              <li>
                <Link
                  to="https://facebook.com/IskconTempleNoida"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center hover:bg-[#316FF6] rounded-full"
                >
                  <FaFacebookF size={28} />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.instagram.com/iskcon_noida"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center hover:bg-instagram-gradient rounded-full"
                >
                  <FaInstagram size={28} />
                </Link>
              </li>
              <li>
                <Link
                  to="https://x.com/iskcon_noida"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center hover:bg-black rounded-full"
                >
                  <FaXTwitter size={28} />
                </Link>
              </li>
              <li>
                <Link
                  to="http://api.whatsapp.com/send/?phone=919319681501&text=Hare+Krishna"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center hover:bg-[#25D366] rounded-full"
                >
                  <FaWhatsapp size={28} />
                </Link>
              </li>
              <li>
                <Link
                  to="https://youtube.com/@ISKCONNOIDAofficial"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center hover:bg-[#FF0000] rounded-full"
                >
                  <FaYoutube size={28} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-grow mt-4 md:mt-0 flex flex-col md:flex-row justify-evenly">
          <div className="p-2">
            <h3 className="mb-4 font-semibold text-xl">Timings</h3>
            <ul className="text-sm">
              <li className="mb-2 flex items-center">
                <FaClock className="w-5 h-5 mr-2" />
                <span>MANGALA ARATI – 04:15AM</span>
              </li>
              <li className="mb-2 flex items-center">
                <FaClock className="w-5 h-5 mr-2" />
                <span>TULASI-PUJA – 05:00AM</span>
              </li>
              <li className="mb-2 flex items-center">
                <FaClock className="w-5 h-5 mr-2" />
                <span>SRINGAR DARSHAN – 07:15AM</span>
              </li>
              <li className="mb-2 flex items-center">
                <FaClock className="w-5 h-5 mr-2" />
                <span>GURU PUJA – 07:25AM</span>
              </li>
              <li className="mb-2 flex items-center">
                <FaClock className="w-5 h-5 mr-2" />
                <span>BHAGAVATAM CLASS – 08:00AM</span>
              </li>
              <li className="flex items-center">
                <FaClock className="w-5 h-5 mr-2" />
                <span>RAJ BHOG ARATI - 12:30PM</span>
              </li>
            </ul>
          </div>
          <div className="p-2">
            <h3 className="mb-4 font-semibold text-xl">Our Services</h3>
            <ul className="text-sm">
              <li className="mb-2 flex items-center">
                <FaCircleCheck className="w-5 h-5 mr-2" />
                Simple Living, High Thinking
              </li>
              <li className="mb-2 flex items-center">
                <FaCircleCheck className="w-5 h-5 mr-2" />
                Srila Prabhupada Books
              </li>
              <li className="mb-2 flex items-center">
                <FaCircleCheck className="w-5 h-5 mr-2" />
                LIFE Membership
              </li>
              <li className="mb-2 flex items-center">
                <FaCircleCheck className="w-5 h-5 mr-2" />
                Community Service Centre
              </li>
              <li className="mb-2 flex items-center">
                <FaCircleCheck className="w-5 h-5 mr-2" />
                Gomata Products
              </li>
              <li className="flex items-center">
                <FaCircleCheck className="w-5 h-5 mr-2" />
                Free Library
              </li>
            </ul>
          </div>
          <div className="p-2">
            <h3 className="mb-1 font-semibold text-xl">Contact Us</h3>
            <ul>
              <li className="mb-4 items-center">
                <span className="text-xl">Call us at:</span>
                <br />
                <Link
                  to="tel:+919319681501"
                  className="hover:underline uppercase text-md"
                >
                  9319681501
                </Link>
                ,
                <Link
                  to="tel:+919319681502"
                  className="hover:underline uppercase text-md ml-1 mr-1"
                >
                  9319681502
                </Link>
                or
                <Link
                  to="tel:+919319681516"
                  className="hover:underline uppercase text-md ml-1"
                >
                  9319681516
                </Link>
              </li>
              <li className="flex flex-col items-left">
                <span className="text-xl">Email Us At:</span>
                <Link
                  to="mailto:connect@iskconnoida.org"
                  className="hover:underline text-md"
                >
                  connect@iskconnoida.org
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:gap-0 gap-2 w-full justify-between items-baseline py-2 border-t border-gray-500/50 mt-6 pb-16 sm:pb-8 md:pb-0">
        <p className="text-sm flex md:justify-center">
          Copyright &copy; {new Date().getFullYear()} ISKCON Noida. All Rights
          Reserved.
        </p>

        <span className="flex md:justify-center md:items-center lg:space-x-3 md:space-x-1 space-x-1 mb-2">
          <Link to="/terms-conditions" className="hover:underline">
            Terms and Conditions
          </Link>
          <span>|</span>
          <span>
            <Link to="/refund-returns-page" className="hover:underline">
              Refund and Returns Policy
            </Link>
          </span>
        </span>
      </div>
    </footer>
  );
}
