import { motion } from "framer-motion";
import Card from "../components/Card";
import styles from "../components/Card.module.css";
import { events } from "../utils/handler";

export default function EventsAndFestivals() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto w-full flex flex-col lg:px-10 md:px-4 my-14"
    >
      <h3 className="text-3xl text-center font-semibold mb-10 mt-10">
        Our Festivals
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {events.map((event) => (
          <Card
            key={event.id}
            img={"https://iic.iskconnoida.org/" + event.img}
            date={new Date(event.date!)}
            title={event.title}
            article={event.id!}
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
