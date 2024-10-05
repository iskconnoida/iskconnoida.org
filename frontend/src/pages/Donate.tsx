import { domAnimation, LazyMotion, m } from "framer-motion";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import styles from "../components/Card.module.css";
import { donations } from "../utils/handler";

/**
 *
 *
 * @return {JSX.Element} Donate page
 */
export default function Donate(): JSX.Element {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container flex flex-col w-full px-auto lg:px-10 md:px-4 my-14"
      >
        <h3 className="text-4xl text-center font-semibold mt-10 mb-5">
          Donate
        </h3>
        <Link
          to="https://iic.iskconnoida.org/"
          className="w-full py-4 rounded-xl bg-orange-700 hover:bg-orange-800 text-white font-bold tracking-wide text-lg text-center shadow-lg shadow-orange-200 hover:shadow-orange-300 mb-10"
        >
          Login to DMS
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {donations.map((donate) => (
            <Card
              key={donate.id}
              img={"https://iic.iskconnoida.org/" + donate.img}
              dateless
              title={donate.title}
              donate={donate.donation_link!}
              className="mx-auto"
              imgClass={styles.customImgClass}
            >
              {donate.description}
            </Card>
          ))}
        </div>
      </m.div>
    </LazyMotion>
  );
}
