import Card from "../components/Card";
import styles from "../components/Card.module.css";

export default function EventsAndFestivals() {
  const events = [
    {
      img: "/images/fri.webp",
      title: "Event 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "/images/fri.webp",
      title: "Event 2",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      img: "/images/fri.webp",
      title: "Event 3",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      img: "/images/fri.webp",
      title: "Event 4",
      content:
        "Dictum tempus fusce dui cras tempor. Eros tincidunt dolor efficitur nascetur fermentum vivamus vehicula taciti.",
    },
  ];
  return (
    <div className="container mx-auto lg:px-10 md:px-4 px-6 my-14">
      <h3 className="text-4xl font-semibold mb-10 mt-10">Our Festivals</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {events.map((event, index) => (
          <Card
            key={index}
            img={event.img}
            date={new Date()}
            title={event.title}
            article="link1"
            donate="link2"
            imgClass={styles.customImgClass}
          >
            {event.content}
          </Card>
        ))}
      </div>
    </div>
  );
}
