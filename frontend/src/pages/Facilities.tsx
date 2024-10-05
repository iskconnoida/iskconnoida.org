import { domAnimation, LazyMotion, m } from "framer-motion";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { facilities } from "../utils/handler";

/**
 *
 *
 * @param {boolean} props.onHomePage
 * @return {JSX.Element} Facilities page
 */
export default function Facilities(props: {
  onHomePage: boolean;
}): JSX.Element {
  return props.onHomePage ? (
    <>
      <div className="hidden px-12 sm:flex w-full">
        <div className="w-1/2 text-3xl font-bold py-14">Temple Facilities</div>
        <div className="w-1/2 py-14 inline-flex justify-end">
          <button className="border border-primary700 rounded-lg bg-primary600 px-4 py-2 text-white shadow-lg shadow-primary300 hover:shadow-primary300 hover:shadow-xl">
            <Link to="/facilities">View More</Link>
          </button>
        </div>
      </div>
      <div className="sm:hidden w-full text-3xl font-bold py-14 text-center">
        Temple Facilities
      </div>
      <div className="p-4 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {facilities.map((facility) => (
          <Card
            key={facility.id}
            img={facility.img}
            dateless
            title={facility.title}
            className="mx-auto"
          >
            {facility.description}
          </Card>
        ))}
      </div>
      <button className="sm:hidden border border-primary700 rounded-lg bg-primary600 mt-14 px-4 py-2 text-white shadow-lg shadow-primary300 hover:shadow-primary300 hover:shadow-xl">
        <Link to="/facilities">View More</Link>
      </button>
    </>
  ) : (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full lg:px-10 md:px-4 my-14"
      >
        <h3 className="text-3xl text-center font-semibold mb-10 mt-10">
          Temple Facilities
        </h3>

        <div className="w-full items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {facilities.map((facility) => (
            <Card
              key={facility.id}
              img={facility.img}
              dateless
              title={facility.title}
              className="min-h-full mx-auto"
            >
              {facility.description}
            </Card>
          ))}
        </div>
      </m.div>
    </LazyMotion>
  );
}
