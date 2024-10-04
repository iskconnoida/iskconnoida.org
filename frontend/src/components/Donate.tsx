import { Link } from "react-router-dom";
import { donations } from "../utils/handler";
import Card from "./Card";

/**
 *
 *
 * @return {JSX.Element} Donate section
 */
export default function Donate(): JSX.Element {
  return (
    <>
      <div className="hidden px-12 sm:flex w-full">
        <div className="w-1/2 text-3xl font-bold py-14">Donate</div>
        <div className="w-1/2 py-14 inline-flex justify-end">
          <button className="border border-primary700 rounded-lg bg-primary600 px-4 py-2 text-white shadow-lg shadow-primary300 hover:shadow-primary300 hover:shadow-xl">
            <Link to="/donate">View More</Link>
          </button>
        </div>
      </div>
      <div className="sm:hidden w-full text-3xl font-bold pt-6 pb-14 text-center">
        Donate
      </div>
      <div className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {donations.map((donate) => (
          <Card
            key={donate.id}
            img={"https://iic.iskconnoida.org/" + donate.img}
            dateless
            title={donate.title}
            donate={donate.donation_link!}
          >
            {donate.description}
          </Card>
        ))}
      </div>
      <button className="sm:hidden border border-primary700 rounded-lg bg-primary600 mt-14 px-4 py-2 text-white shadow-lg shadow-primary300 hover:shadow-primary300 hover:shadow-xl">
        <Link to="/donate">View More</Link>
      </button>
    </>
  );
}
