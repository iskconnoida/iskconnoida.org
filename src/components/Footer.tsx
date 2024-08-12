import {
  FaCircleCheck,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="pt-6 pb-2 bg-[#93282C] text-white w-full desktop:px-24 px-3 tablet:px-10">
      <div className="flex flex-col desktop:flex-row mb-3 desktop:items-center tablet:gap-4">
        <div className="flex-grow">
          <div className="flex flex-col md:items-center">
            <div className="flex items-center mb-4">
              <img
                src="/images/IskconLogoForFooter.png"
                alt="Iskcon Noida"
                className="w-[140px] h-[140px] mr-3"
              />
            </div>
            <p className="md:text-center mb-4">
              ISKCON Noida, A-5, Maharaja Agrasen Marg, <br />
              Opposite NTPC office, Block A,
              <br />
              <span className="">Sector 33, Noida, Uttar Pradesh 201301</span>
            </p>
            <ul className="flex space-x-5">
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center hover:bg-[#316FF6] rounded-full"
                >
                  <FaFacebookF size={28} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center hover:bg-instagram-gradient rounded-full"
                >
                  <FaInstagram size={28} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center hover:bg-[#25D366] rounded-full"
                >
                  <FaWhatsapp size={28} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center hover:bg-[#FF0000] rounded-full"
                >
                  <FaYoutube size={28} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-grow mt-4 md:mt-0 flex flex-col md:flex-row justify-evenly">
          <div className="p-2">
            <h3 className="mb-4 font-semibold text-xl">Timing</h3>
            <ul className="text-sm">
              <li className="mb-2 flex items-center">
                <FaClock className="w-5 h-5 mr-2" />
                <span>MANGALA ARATI – 04:30AM</span>
              </li>
              <li className="mb-2 flex items-center">
                <FaClock className="w-5 h-5 mr-2" />
                <span>TULSI-PUJA – 05:00AM</span>
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
                <a href="/services/simple" className="hover:underline">
                  Simple Living, High Thinking
                </a>
              </li>
              <li className="mb-2 flex items-center">
                <FaCircleCheck className="w-5 h-5 mr-2" />
                <a
                  href="https://iskconvrindavanmart.com/pancagauda-das"
                  className="hover:underline"
                >
                  Srila Prabhupada Audiobooks
                </a>
              </li>
              <li className="mb-2 flex items-center">
                <FaCircleCheck className="w-5 h-5 mr-2" />
                <a href="/services/life-membership" className="hover:underline">
                  Life Membership
                </a>
              </li>
              <li className="mb-2 flex items-center">
                <FaCircleCheck className="w-5 h-5 mr-2" />
                <a
                  href="/services/community-service-centre"
                  className="hover:underline"
                >
                  Community Service Centre
                </a>
              </li>
              <li className="mb-2 flex items-center">
                <FaCircleCheck className="w-5 h-5 mr-2" />
                <a
                  href="/services/gomata-and-bliss"
                  className="hover:underline"
                >
                  Gomata Products
                </a>
              </li>
              <li className="flex items-center">
                <FaCircleCheck className="w-5 h-5 mr-2" />
                <a
                  href="https://iskconvrindavanmart.com"
                  className="hover:underline"
                >
                  Buy Books Online
                </a>
              </li>
            </ul>
          </div>
          <div className="p-2">
            <h3 className="mb-1 font-semibold text-xl">Contact Us</h3>
            <ul>
              <li className="mb-4 flex items-center">
                <a
                  href="tel:+919319681501"
                  className="hover:underline uppercase text-md"
                >
                  Call at: 9319681501
                </a>
              </li>
              <li className="flex flex-col items-left">
                <span className="text-xl">Email Us At:</span>
                <a
                  href="mailto:connect@iskconnoida.org"
                  className="hover:underline text-lg"
                >
                  connect@iskconnoida.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:gap-0 gap-2 w-full justify-between items-baseline py-2 border-t border-gray-500/50 mt-6">
        <p className="text-sm flex md:justify-center">
          Copyright &copy; {new Date().getFullYear()} ISKCON Noida. All Rights
          Reserved.
        </p>

        <span className="flex md:justify-center md:items-center lg:space-x-3 md:space-x-1 space-x-1 mb-2">
          <a href="/terms-conditions" className="hover:underline">
            Terms and Conditions
          </a>
          <span>|</span>
          <span>
            <a href="/refund-returns-page" className="hover:underline">
              Refund and Returns Policy
            </a>
          </span>
        </span>
      </div>
    </footer>
  );
}
