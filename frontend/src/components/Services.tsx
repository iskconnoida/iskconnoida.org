import { Link } from "react-router-dom";

/**
 *
 *
 * @return {JSX.Element} Services component
 */
export default function Services(): JSX.Element {
  return (
    <>
      <div className="hidden px-12 sm:flex w-full">
        <div className="w-1/2 text-3xl font-bold py-14">Services</div>
        <div className="w-1/2 py-14 inline-flex justify-end">
          <button className="border border-primary700 rounded-lg bg-primary600 px-4 py-2 text-white shadow-lg shadow-primary300 hover:shadow-primary300 hover:shadow-xl">
            <Link to="/services">View More</Link>
          </button>
        </div>
      </div>
      <div className="sm:hidden w-full text-3xl font-bold pt-6 pb-14 text-center">
        Services
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1 md:gap-2 lg:gap-4">
        <div className="items-center p-4">
          <div className="mx-auto bg-primary200 border-2 border-primary500 w-fit rounded-full">
            <img
              src="/images/cow.webp"
              className="h-36 w-36 rounded-full"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="py-2 text-center">Gomata Sewa</div>
        </div>
        <div className="items-center p-4">
          <div className="mx-auto bg-primary200 border-2 border-primary500 w-fit rounded-full">
            <img
              src="/images/food.webp"
              className="h-36 w-36 rounded-full"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="py-2 text-center">Food for Life</div>
        </div>
        <div className="items-center p-4">
          <div className="mx-auto bg-primary200 border-2 border-primary500 w-fit rounded-full">
            <img
              src="/images/membership.webp"
              className="h-36 w-36 rounded-full"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="py-2 text-center">LIFE Membership</div>
        </div>
        <div className="items-center p-4">
          <div className="mx-auto bg-primary200 border-2 border-primary500 w-fit rounded-full">
            <img
              src="/images/people.webp"
              className="h-36 w-36 rounded-full"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="py-2 text-center">Community Service Centre</div>
        </div>
        <div className="items-center p-4">
          <div className="mx-auto bg-primary200 border-2 border-primary500 w-fit rounded-full">
            <img
              src="/images/happy.webp"
              className="h-36 w-36 rounded-full"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="py-2 text-center">Blissful Deity Worship</div>
        </div>
        <div className="items-center p-4">
          <div className="mx-auto bg-primary200 border-2 border-primary500 w-fit rounded-full">
            <img
              src="/images/book.webp"
              className="h-36 w-36 rounded-full"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="py-2 text-center">Books Distribution</div>
        </div>
      </div>
      <button className="sm:hidden border border-primary700 rounded-lg bg-primary600 px-4 py-2 text-white shadow-lg shadow-primary300 hover:shadow-primary300 hover:shadow-xl">
        <Link to="/services">View More</Link>
      </button>
    </>
  );
}
