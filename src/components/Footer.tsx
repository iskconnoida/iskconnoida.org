import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import IskconLogo from "../../public/images/IskconLogoForFooter.png";

export default function Footer() {
  return (
    <footer className="bg-[#93282C] text-white p-16 lg:p-[88px] w-full py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-20">
          {/* 1st Column: Logo and Social Icons */}
          <div className="flex flex-col items-center">
            <img
              src={IskconLogo}
              alt="Logo"
              className="w-[170px] mb-4 text-center"
            />
            <p className="text-lg">A-5, Maharaja Agrasen Marg,</p>
            <p className="text-lg w-[250px] ">Opposite NTPC office, Block A,</p>
            <p className="text-lg mb-5 w-[320px] ">
              Sector 33, Noida, Uttar Pradesh 201301
            </p>
            <div className="flex items-center justify-center space-x-5">
              <a
                href="#"
                className="text-white bg-[#316FF6] rounded-full flex items-center justify-center w-11 h-11"
              >
                <FaFacebookF size={28} />
              </a>
              <a
                href="#"
                className="text-white bg-instagram-gradient rounded-full flex items-center justify-center w-11 h-11"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="#"
                className="text-white bg-[#25D366] rounded-full flex items-center justify-center w-11 h-11"
              >
                <FaWhatsapp size={28} />
              </a>
              <a
                href="#"
                className="text-white bg-[#FF0000] rounded-full flex items-center justify-center w-11 h-11"
              >
                <FaYoutube size={28} />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center text-xl text-center space-y-2 lg:items-baseline lg:pt-7 lg:text-left lg:space-y-0 lg:flex-row lg:gap-[90px]">
            {/* 2nd Column: 7 Headings */}
            <div className="flex flex-col lg:space-y-4 lg:min-w-[300px]">
              <h4>MANGALA ARATI – 04:30AM</h4>
              <h4>TULSI-PUJA – 05:00AM</h4>
              <h4>SRINGAR DARSHAN – 07:15AM</h4>
              <h4>GURU PUJA – 07:25AM</h4>
              <h4>BHAGAVATAM CLASS – 08:00AM</h4>
              <h4>RAJ BHOG ARATI - 12:30PM</h4>
              <h4 className="font-bold">1PM- TEMPLE CLOSES</h4>
            </div>

            {/* 3rd Column: 6 Headings */}
            <div className="flex flex-col lg:space-y-4 lg:min-w-[300px]">
              <h4 className="font-bold">4:20PM- TEMPLE REOPENS</h4>
              <h4>TULASI ARATI - 6:15PM</h4>
              <h4>SANDHYA ARARTI - 6:30PM</h4>
              <h4>BHAGAVAD GITA CLASS - 7PM</h4>
              <h4>SHAYAN ARATI - 8:15PM</h4>
              <h4 className="font-bold">8:30PM- TEMPLE CLOSES</h4>
            </div>

            {/* 4th Column: Contact Us */}
            <div className="flex flex-col pt-8 lg:space-y-4 lg:pt-0 lg:min-w-[300px] mx-auto uppercase">
              <div>
                <h4 className="font-bold">Contact Us</h4>
                <h4>Call at: 9319681501</h4>
                <h4>9319681502</h4>
              </div>
              <div>
                <p>Email Us At:</p>
                <a
                  href="mailto:connect@iskconnoida.org"
                  className="hover:underline"
                >
                  connect@iskconnoida.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
