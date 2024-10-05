import { Link } from "react-router-dom";

/**
 *
 *
 * @return {JSX.Element} Donation campaign element
 */
export default function Campaign(props: {
  img: string;
  to: string;
}): JSX.Element {
  return (
    <section className="w-full h-full px-6 pt-10 md:pt-16 lg:pt-24">
      <Link to={props.to} className="flex w-fit h-fit mx-auto">
        <img
          src={props.img}
          alt="campaign"
          className="md:max-w-[calc(2/3*100vw)] rounded-lg shadow-lg hover:shadow-xl border"
        />
      </Link>
    </section>
  );
}
