import { Link } from "react-router-dom";
import Card from "./Card";

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

export default function Events() {
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
    <>
      <div className="hidden px-12 sm:flex w-full">
        <div className="w-1/2 text-3xl font-bold py-14">
          Events and Festivals
        </div>
        <div className="w-1/2 py-14 inline-flex justify-end">
          <button className="border border-violet-700 rounded-lg bg-violet-600 px-4 py-2 text-white shadow-lg shadow-violet-300 hover:shadow-violet-300 hover:shadow-xl">
            <Link to="/events">View More</Link>
          </button>
        </div>
      </div>
      <div className="sm:hidden w-full text-3xl font-bold py-14 text-center">
        Events and Festivals
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {events.map((event) => (
          <Card
            img={"https://iic.iskconnoida.org/" + event.img}
            date={new Date(event.date)}
            title={event.title}
            article={"events/" + event.id}
            donate="https://iic.iskconnoida.org/donate/SHRI_KRISHNA_JANMASHTAMI_2024,_NOIDA"
          >
            {event.description}
          </Card>
        ))}
      </div>
      <button className="sm:hidden border border-violet-700 rounded-lg bg-violet-600 mt-14 px-4 py-2 text-white shadow-lg shadow-violet-300 hover:shadow-violet-300 hover:shadow-xl">
        <Link to="/events">View More</Link>
      </button>
    </>
  );
}
