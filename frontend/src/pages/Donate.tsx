import { motion } from "framer-motion";
import Card from "../components/Card";
import styles from "../components/Card.module.css";
import { Link } from "react-router-dom";

type Response = Record<
  string,
  {
    id: string;
    title: string;
    img: string;
    description: string;
    donation_link: string;
  }
>;

export default function Donate() {
  const res: Response = {
    services_response1: {
      id: "12",
      title: "Anna Daan 2024",
      img: "upload/catimg/37693cfc748049e45d87b8c7d8b9aacd.Annadaan%201.png",
      description:
        "Anna daan is the act of donating food to the needy. In Vedic culture, it is considered one of the most pious and virtuous acts. Anna Daan is considered to be Mahadaan. It is believed that offering food to others is equivalent to offering it to God Himself.",
      donation_link: "https://iic.iskconnoida.org/donate/Anna_Daan_2024",
    },
    services_response2: {
      id: "11",
      title: "Shri Krishna Janmashtami 2024",
      img: "upload/catimg/f899139df5e1059396431415e770c6dd.janmashtami 2024_11zon.webp",
      description:
        "Krishna Janmashtami, also known simply as Krishnashtami, Janmashtami, or Gokulashtami, is an annual Hindu festival that celebrates the birth of Krishna, the eighth avatar of Vishnu. In certain Hindu texts, such as the Gita Govinda, Krishna has been identified as supreme God and the source of all avatars.",
      donation_link:
        "https://iic.iskconnoida.org/donate/SHRI_KRISHNA_JANMASHTAMI_2024,_NOIDA",
    },
  };
  const events: {
    id: string;
    title: string;
    img: string;
    description: string;
    donation_link: string;
  }[] = [];
  for (const e in res) {
    events.push(res[e]);
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container flex flex-col w-full px-auto lg:px-10 md:px-4 my-14"
    >
      <h3 className="text-4xl text-center font-semibold mt-10 mb-5">Donate</h3>
      <Link
        to="https://iic.iskconnoida.org/"
        className="w-full py-4 rounded-xl bg-orange-700 hover:bg-orange-800 text-white font-bold tracking-wide text-lg text-center shadow-lg shadow-orange-200 hover:shadow-orange-300 mb-10"
      >
        Login to DMS
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {events.map((donate, index) => (
          <Card
            key={index}
            img={"https://iic.iskconnoida.org/" + donate.img}
            dateless
            title={donate.title}
            donate={donate.donation_link}
            imgClass={styles.customImgClass}
          >
            {donate.description}
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
