import {
  FaCheckCircle,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-[#93282C] text-white p-16 lg:p-[88px] w-full py-12">
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-20">
//           {/* 1st Column: Logo and Social Icons */}
//           <div className="flex flex-col items-center">
//             <img
//               src={IskconLogo}
//               alt="Logo"
//               className="w-[170px] mb-4 text-center"
//             />
//             <p className="text-lg">A-5, Maharaja Agrasen Marg,</p>
//             <p className="text-lg w-[250px] ">Opposite NTPC office, Block A,</p>
//             <p className="text-lg mb-5 w-[320px] ">
//               Sector 33, Noida, Uttar Pradesh 201301
//             </p>
//             <div className="flex items-center justify-center space-x-5">
//               <a
//                 href="#"
//                 className="text-white bg-[#316FF6] rounded-full flex items-center justify-center w-11 h-11"
//               >
//                 <FaFacebookF size={28} />
//               </a>
//               <a
//                 href="#"
//                 className="text-white bg-instagram-gradient rounded-full flex items-center justify-center w-11 h-11"
//               >
//                 <FaInstagram size={28} />
//               </a>
//               <a
//                 href="#"
//                 className="text-white bg-[#25D366] rounded-full flex items-center justify-center w-11 h-11"
//               >
//                 <FaWhatsapp size={28} />
//               </a>
//               <a
//                 href="#"
//                 className="text-white bg-[#FF0000] rounded-full flex items-center justify-center w-11 h-11"
//               >
//                 <FaYoutube size={28} />
//               </a>
//             </div>
//           </div>
//           <div className="flex flex-col items-center text-xl text-center space-y-2 lg:items-baseline lg:pt-7 lg:text-left lg:space-y-0 lg:flex-row lg:gap-[90px]">
//             {/* 2nd Column: 7 Headings */}
//             <div className="flex flex-col lg:space-y-4 lg:min-w-[300px]">
//               <h4>MANGALA ARATI – 04:30AM</h4>
//               <h4>TULSI-PUJA – 05:00AM</h4>
//               <h4>SRINGAR DARSHAN – 07:15AM</h4>
//               <h4>GURU PUJA – 07:25AM</h4>
//               <h4>BHAGAVATAM CLASS – 08:00AM</h4>
//               <h4>RAJ BHOG ARATI - 12:30PM</h4>
//               <h4 className="font-bold">1PM- TEMPLE CLOSES</h4>
//             </div>

//             {/* 3rd Column: 6 Headings */}
//             <div className="flex flex-col lg:space-y-4 lg:min-w-[300px]">
//               <h4 className="font-bold">4:20PM- TEMPLE REOPENS</h4>
//               <h4>TULASI ARATI - 6:15PM</h4>
//               <h4>SANDHYA ARARTI - 6:30PM</h4>
//               <h4>BHAGAVAD GITA CLASS - 7PM</h4>
//               <h4>SHAYAN ARATI - 8:15PM</h4>
//               <h4 className="font-bold">8:30PM- TEMPLE CLOSES</h4>
//             </div>

//             {/* 4th Column: Contact Us */}
//             <div className="flex flex-col pt-8 lg:space-y-4 lg:pt-0 lg:min-w-[300px] mx-auto uppercase">
//               <div>
//                 <h4 className="font-bold">Contact Us</h4>
//                 <h4>Call at: 9319681501</h4>
//                 <h4>9319681502</h4>
//               </div>
//               <div>
//                 <p>Email Us At:</p>
//                 <a
//                   href="mailto:connect@iskconnoida.org"
//                   className="hover:underline"
//                 >
//                   connect@iskconnoida.org
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
export default function Footer() {
  return (
    <footer className="py-7 bg-[#93282C] text-white w-full desktop:px-24 px-3 tablet:px-10">
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
              A-5, Maharaja Agrasen Marg, <br />
              Opposite NTPC office, Block A,
              <br />
              <span className="">Sector 33, Noida, Uttar Pradesh 201301</span>
            </p>
            <ul className="flex space-x-5">
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center bg-[#316FF6] rounded-full"
                >
                  <FaFacebookF size={28} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center bg-instagram-gradient rounded-full"
                >
                  <FaInstagram size={28} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center bg-[#25D366] rounded-full"
                >
                  <FaWhatsapp size={28} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center bg-[#FF0000] rounded-full"
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
                <FaCheckCircle className="w-5 h-5 mr-2" />
                <a href="/services/simple" className="hover:underline">
                  Simple Living, High Thinking
                </a>
              </li>
              <li className="mb-2 flex items-center">
                <FaCheckCircle className="w-5 h-5 mr-2" />
                <a
                  href="https://iskconvrindavanmart.com/pancagauda-das"
                  className="hover:underline"
                >
                  Srila Prabhupada Audiobooks
                </a>
              </li>
              <li className="mb-2 flex items-center">
                <FaCheckCircle className="w-5 h-5 mr-2" />
                <a href="/services/life-membership" className="hover:underline">
                  Life Membership
                </a>
              </li>
              <li className="mb-2 flex items-center">
                <FaCheckCircle className="w-5 h-5 mr-2" />
                <a
                  href="/services/community-service-centre"
                  className="hover:underline"
                >
                  Community Service Centre
                </a>
              </li>
              <li className="mb-2 flex items-center">
                <FaCheckCircle className="w-5 h-5 mr-2" />
                <a
                  href="/services/gomata-and-bliss"
                  className="hover:underline"
                >
                  Gomata Products
                </a>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="w-5 h-5 mr-2" />
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
    </footer>
  );
}
