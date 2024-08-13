import Card from "./Card";

type Response = Record<string, {
    id: string;
    title: string;
    img: string;
    description: string;
    "donation_link": string;
  }>;

export default function Donate() {
  const res: Response = {
    "services_response1": {
      "id": "12",
      "title": "Anna Daan 2024",
      "img": "upload/catimg/37693cfc748049e45d87b8c7d8b9aacd.Annadaan%201.png",
      "description":
        "Anna daan is the act of donating food to the needy. In Vedic culture, it is considered one of the most pious and virtuous acts. Anna Daan is considered to be Mahadaan. It is believed that offering food to others is equivalent to offering it to God Himself.",
      "donation_link": "https://iic.iskconnoida.org/donate/Anna_Daan_2024",
    },
    "services_response2": {
      "id": "11",
      "title": "Shri Krishna Janmashtami 2024",
      "img":
        "upload/catimg/f899139df5e1059396431415e770c6dd.janmashtami 2024_11zon.webp",
      "description":
        "Krishna Janmashtami, also known simply as Krishnashtami, Janmashtami, or Gokulashtami, is an annual Hindu festival that celebrates the birth of Krishna, the eighth avatar of Vishnu. In certain Hindu texts, such as the Gita Govinda, Krishna has been identified as supreme God and the source of all avatars.",
      "donation_link":
        "https://iic.iskconnoida.org/donate/SHRI_KRISHNA_JANMASHTAMI_2024,_NOIDA",
    },
  };

  const events: {
    "id": string;
    "title": string;
    "img": string;
    "description": string;
    "donation_link": string;
  }[] = [];
  for (const e in res) {
    events.push(res[e]);
  }
  return (
    <>
      <div className="hidden px-12 sm:flex w-full">
        <div className="w-1/2 text-3xl font-bold py-14">Donate</div>
        <div className="w-1/2 py-14 inline-flex justify-end">
          <button className="border border-violet-700 rounded-lg bg-violet-600 px-4 py-2 text-white shadow-lg shadow-violet-300 hover:shadow-violet-300 hover:shadow-xl">
            <a href="/donate">View More</a>
          </button>
        </div>
      </div>
      <div className="sm:hidden w-full text-3xl font-bold pt-6 pb-14 text-center">
        Donate
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {events.map((event) => (
          <Card
            img={"https://iic.iskconnoida.org/" + event.img}
            dateless
            title={event.title}
            donate={event.donation_link}
          >
            {event.description}
          </Card>
        ))}
      </div>
      <button className="sm:hidden border border-violet-700 rounded-lg bg-violet-600 mt-14 px-4 py-2 text-white shadow-lg shadow-violet-300 hover:shadow-violet-300 hover:shadow-xl">
        <a href="/donate">View More</a>
      </button>
    </>
  );
}
