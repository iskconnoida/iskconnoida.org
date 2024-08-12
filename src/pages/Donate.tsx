import Card from "../components/Card";
import styles from "../components/Card.module.css";

const Donations = [
  {
    img: "https://iskconnoida.org/wp-content/uploads/2023/12/1780066_10151922662621364_1967521465_o.jpg",
    title: "Shri Krishna Janmashtami 2024",
    content:
      "Celebrate the appearance day of Lord Krishna.Janmashtami, the appearance day of Lord Krishna, is celebrated on Eighth day of Krishnapaksh of Bhadrapad month of Lunar-calendar.",
    link: "https://iic.iskconnoida.org/login",
  },
  {
    img: "https://iskconnoida.org/wp-content/uploads/2023/12/1780066_10151922662621364_1967521465_o.jpg",
    title: "Anna Daan",
    content:
      "Invoke Blessings of Lord and prayers of Vaisnavas by donating for Anna Daan seva. Anna Daan is considered to be Mahadaan. It is believed that offering food to others is equivalent to offering it to God Himself.",
    link: "https://iic.iskconnoida.org/login",
  },
  {
    img: "https://iskconnoida.org/wp-content/uploads/2023/12/1780066_10151922662621364_1967521465_o.jpg",
    title: "Ekadashi Prasadam Seva",
    content:
      "Celebrating Ekadashi Mohotsav, fasting from grains | Chant more rounds of Maha Mantra Kirtan whole day in Temple.",
    link: "https://iic.iskconnoida.org/login",
  },
  {
    img: "https://iskconnoida.org/wp-content/uploads/2023/12/1780066_10151922662621364_1967521465_o.jpg",
    title: "Gita Daan",
    content:
      "Join us for Gita Daan. Give a Gift that can change a life. For one who explains this supreme secret.",
    link: "https://iic.iskconnoida.org/login",
  },
];

export default function Donate() {
  return (
    <div className="container mx-auto lg:px-10 md:px-4 px-6 my-14">
      <h3 className="text-4xl font-semibold mb-10 mt-10">Donation</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {Donations.map((donate, index) => (
          <Card
            key={index}
            img={donate.img}
            dateless
            title={donate.title}
            article={donate.link}
            donate={donate.link}
            imgClass={styles.customImgClass}
          >
            {donate.content}
          </Card>
        ))}
      </div>
    </div>
  );
}
