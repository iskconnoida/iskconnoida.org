import { motion } from "framer-motion";
import Card from "../components/Card";
import styles from "../components/Card.module.css";

type Response = Record<
  string,
  {
    id: string;
    title: string;
    img: string;
    description: string;
    date: string;
  }
>;

export default function EventsAndFestivals() {
  const res: Response = {
    festival_response: {
      id: "11",
      title: "Shri Krishna Janmashtami 2024",
      img: "upload/catimg/6ea9ab1baa0efb9e19094440c317e21b.29_08_2021-krishna_30_2_21972025.jpg",
      description:
        "Krishna Janmashtami, also known simply as Krishnashtami, Janmashtami, or Gokulashtami, is an annual Hindu festival that celebrates the birth of Krishna, the eighth avatar of Vishnu. In certain Hindu texts, such as the Gita Govinda, Krishna has been identified as supreme God and the source of all avatars.",
      date: "2024-08-26",
    },
  };
  const events: {
    id: string;
    title: string;
    img: string;
    description: string;
    date: string;
  }[] = [];
  for (const e in res) {
    events.push(res[e]);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto lg:px-10 md:px-4 px-6 my-14"
    >
      <h3 className="text-3xl text-center font-semibold mb-10 mt-10">
        Our Festivals
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {events.map((event, index) => (
          <Card
            key={index}
            img={"https://iic.iskconnoida.org/" + event.img}
            date={new Date(event.date)}
            title={event.title}
            article={event.id}
            donate="https://iic.iskconnoida.org/donate/SHRI_KRISHNA_JANMASHTAMI_2024,_NOIDA"
            imgClass={styles.customImgClass}
          >
            {event.description}
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
