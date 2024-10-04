import axios, { AxiosError, AxiosResponse } from "axios";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaEnvelope, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

/**
 *
 *
 * @return {JSX.Element} Click-to-call action buttons and the contact form
 */
export default function CTC(): JSX.Element {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [buttonText, setButtonText] = useState("Submit");
  const [isDisabled, setIsDisabled] = useState(false);

  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function resetForm() {
    setState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setIsDisabled(true);
    setButtonText("Submitting...");
    axios({
      method: "POST",
      // url: "http://localhost:3000/send",
      url: window.location.origin + "/api/v1/send",
      data: state,
    })
      .then((response: AxiosResponse) => {
        if (response.data.status === "success") {
          toast.success(
            <>
              <div className="font-bold font-sans text-black">
                Request submitted successfully!
              </div>
              <div className="font-medium font-sans text-black">
                We will soon get in touch with you.
              </div>
            </>,
            {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            },
          );
          resetForm();
          setButtonText("Submit");
          setIsDisabled(false);
        } else if (response.data.status === "failed") {
          console.error(response.data.error);
          toast.error(
            <>
              <div className="font-bold font-sans text-black">
                Failed to submit request.
              </div>
              <div className="font-medium font-sans text-black">
                Please try again later.
              </div>
            </>,
            {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            },
          );
          setButtonText("Submit");
          // setIsDisabled(false);
        }
      })
      .catch((error: AxiosError) => {
        toast.error(
          <>
            <div className="font-bold font-sans text-black">Aw snap!</div>
            <div className="font-medium font-sans text-black">
              Something went wrong. Please try again after refreshing the page.
            </div>
          </>,
          {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          },
        );
        setButtonText("Submit");
        setIsDisabled(false);
        console.log(error.message);
      });
  }

  return (
    <div className="w-fit z-10 flex flex-col items-center fixed bottom-20 md:bottom-4 right-4 md:right-10">
      <div className="w-12 h-12 text-white shadow-lg hover:shadow-xl bg-[#25D366] rounded-full">
        <Link
          to="http://api.whatsapp.com/send/?phone=919319681516&text=Hare+Krishna"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full inline-flex items-center justify-center"
        >
          <FaWhatsapp size={32} />
        </Link>
      </div>
      <div className="w-12 h-12 mt-4 text-white shadow-lg hover:shadow-xl bg-[#ffb01f] rounded-full">
        <button
          onClick={() => setPopupVisible(!isPopupVisible)}
          className="w-full h-full inline-flex items-center justify-center"
        >
          <FaEnvelope size={32} />
        </button>
        <AnimatePresence>
          {isPopupVisible && (
            <LazyMotion features={domAnimation}>
              <m.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="z-50 fixed md:mt-20 md:bottom-3 md:right-10 inset-0 flex md:items-end md:justify-end bg-opacity-0 px-6"
              >
                <div className="z-50 relative h-fit mt-auto mb-16 w-full md:w-2/3 lg:w-1/3 bg-white rounded-lg p-6 shadow-lg shadow-gray-400 border-2 border-[#ffb01f] transition-opacity duration-300">
                  <button
                    onClick={() => setPopupVisible(!isPopupVisible)}
                    className="absolute top-4 right-4 text-gray-600 hover:bg-gray-100 hover:text-[#4d4330] hover:shadow-lg rounded-full p-2 transition-w transition-all duration-300"
                  >
                    <FaChevronDown size={20} />
                  </button>
                  <div className="text-black">
                    <form
                      onSubmit={(event) => handleSubmit(event)}
                      method="POST"
                    >
                      {/* TODO: add captcha */}
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="name"
                          className="inline-block mb-1 font-medium text-black"
                        >
                          Name
                        </label>
                        <input
                          placeholder="John Doe"
                          required
                          type="text"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:border-primary400 focus:outline-none focus:shadow-outline"
                          id="name"
                          pattern="([A-Z.a-z]{2,}\s?)+"
                          name="name"
                          value={state.name}
                          onChange={(e) =>
                            setState({
                              name: e.target.value,
                              email: state.email,
                              phone: state.phone,
                              message: state.message,
                            })
                          }
                        />
                      </div>
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="email"
                          className="inline-block mb-1 font-medium text-black"
                        >
                          E-mail
                        </label>
                        <input
                          placeholder="username@gmail.com"
                          required
                          type="email"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:border-primary400 focus:outline-none focus:shadow-outline"
                          id="email"
                          pattern="^[\w.]+@(gmail\.com|yahoo\.com|outlook\.com|icloud\.com)$"
                          name="email"
                          value={state.email}
                          onChange={(e) =>
                            setState({
                              name: state.name,
                              email: e.target.value,
                              phone: state.phone,
                              message: state.message,
                            })
                          }
                        />
                      </div>
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="phone"
                          className="inline-block mb-1 font-medium text-black"
                        >
                          Phone
                        </label>
                        <input
                          placeholder="+911234567890"
                          required
                          type="tel"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:border-primary400 focus:outline-none focus:shadow-outline"
                          id="phone"
                          pattern="\+91(6|7|8|9)\d{9}$"
                          name="phone"
                          value={state.phone}
                          onChange={(e) =>
                            setState({
                              name: state.name,
                              email: state.email,
                              phone: e.target.value,
                              message: state.message,
                            })
                          }
                        />
                      </div>
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="message"
                          className="inline-block mb-1 font-medium text-black"
                        >
                          Message/Query
                        </label>
                        <textarea
                          required
                          placeholder="Type your message/query here"
                          className="flex-grow w-full px-4 py-3 mb-2 transition duration-200 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:border-primary400 focus:outline-none focus:shadow-outline"
                          id="message"
                          name="message"
                          value={state.message}
                          onChange={(e) =>
                            setState({
                              name: state.name,
                              email: state.email,
                              phone: state.phone,
                              message: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="mt-4 mb-2 sm:mb-4">
                        <button
                          type="submit"
                          id="submitButton"
                          className={`inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-lg shadow-md focus:shadow-outline focus:outline-none shadow-primary200 bg-primary500 ${isDisabled ? "bg-primary400 cursor-not-allowed" : "hover:shadow-primary500 hover:bg-primary700"}`}
                          disabled={isDisabled}
                        >
                          {buttonText}
                        </button>
                      </div>
                      <p className="text-xs text-gray-600 sm:text-sm">
                        We respect your privacy. All messages sent use standard
                        TLS encryption.
                      </p>
                    </form>
                  </div>
                </div>
              </m.div>
            </LazyMotion>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
