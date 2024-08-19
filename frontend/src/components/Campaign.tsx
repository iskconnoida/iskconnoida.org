import { Link } from "react-router-dom";

export default function Campaign(props: { img: string; to: string }) {
  return (
    <section className="w-full h-full px-6 pt-8 md:pt-14 lg:pt-16">
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
