import { LazyMotion, domAnimation, m } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { events } from "../utils/handler";
import FourZeroFour from "./FourZeroFour";

/**
 *
 *
 * @return The event information page
 */
export default function EventInfo() {
  const { id } = useParams();
  try {
    const event = events.find((event) => event.id === id);
    return (
      <LazyMotion features={domAnimation}>
        <m.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full px-8 lg:px-12 mt-10"
        >
          <h2 className="text-3xl mt-16 mb-5 font-bold text-center">
            {event!.title}
          </h2>
          <div className="flex flex-col lg:flex-row gap-5 mb-4 lg:mb-10">
            <img
              src={"https://iic.iskconnoida.org/" + event!.img}
              alt="event img"
              className="rounded-lg shadow-lg lg:w-1/2"
            />
            <div className="flex flex-col gap-5">
              <div className="font-bold">
                Date: {new Date(event!.date!).toLocaleDateString()}
              </div>
              <div>{event!.description}</div>
              <Link
                to={event!.donation_link!}
                className="w-full justify-between font-bold inline-flex items-center px-6 py-4 text-sm text-center text-white bg-red-700 rounded-xl hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-200 hover:shadow-red-300"
              >
                DONATE NOW
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
              <div className="text-gray-600 w-full py-2 mt-auto text-right">
                Event ID: {event!.id}
              </div>
            </div>
          </div>
        </m.section>
      </LazyMotion>
    );
  } catch (e) {
    console.log(e);
    return <FourZeroFour />;
  }
}
