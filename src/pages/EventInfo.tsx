import { useParams } from "react-router-dom";

interface Response {
  [key: string]: {
    id: string;
    title: string;
    img: string;
    description: string;
    date: string;
  };
}

export default function EventInfo() {
  const { id } = useParams();
  const res: Response = {
    "festival_response": {
      "id": "11",
      "title": "Shri Krishna Janmashtami 2024",
      "img":
        "upload/catimg/6ea9ab1baa0efb9e19094440c317e21b.29_08_2021-krishna_30_2_21972025.jpg",
      "description":
        "Krishna Janmashtami, also known simply as Krishnashtami, Janmashtami, or Gokulashtami, is an annual Hindu festival that celebrates the birth of Krishna, the eighth avatar of Vishnu. In certain Hindu texts, such as the Gita Govinda, Krishna has been identified as supreme God and the source of all avatars.",
      "date": "2024-08-26",
    },
  };
  const events: {
    "id": string;
    "title": string;
    "img": string;
    "description": string;
    "date": string;
  }[] = [];
  for (const e in res) {
    events.push(res[e]);
  }
  try {
    const event = events.filter((event) => event.id === id)[0];
    return (
      <section className="w-full px-8 lg:px-12 mt-10">
        <div className="flex flex-col gap-5 my-16">
          <h2 className="text-3xl font-bold text-center">{event.title}</h2>
          <img
            src={"https://iic.iskconnoida.org/" + event.img}
            alt="event.img"
            className="rounded-lg shadow-lg"
          />
          <div className="font-bold">
            Date: {new Date(event.date).toLocaleDateString()}
          </div>
          <div>{event.description}</div>
          <a
            href="https://iic.iskconnoida.org/donate/SHRI_KRISHNA_JANMASHTAMI_2024,_NOIDA"
            className="w-full justify-between font-bold inline-flex items-center px-6 py-4 text-sm text-center text-white bg-red-700 rounded-xl hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-200 hover:shadow-red-300"
          >
            DONATE NOW
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
        <div className="text-gray-600 w-full py-2 text-right">
          Event ID: {event.id}
        </div>
      </section>
    );
  } catch (e) {
    console.log(e);
    return (
      <section className="w-full px-8 lg:px-12 mt-10">
        <h2 className="my-16 text-3xl font-bold text-center">
          Event Not Found
        </h2>
      </section>
    );
  }
}
