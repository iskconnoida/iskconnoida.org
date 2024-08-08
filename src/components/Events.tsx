import Card from "./Card";

export default function Events() {
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
    <>
      <div className="hidden px-12 sm:flex w-full">
        <div className="w-1/2 text-3xl font-bold py-14">
          Events and Festivals
        </div>
        <div className="w-1/2 py-14 inline-flex justify-end">
          <button className="border border-violet-700 rounded-lg bg-violet-600 px-4 py-2 text-white shadow-lg shadow-violet-300 hover:shadow-violet-300 hover:shadow-xl">
            <a href="/link">View More</a>
          </button>
        </div>
      </div>
      <div className="sm:hidden w-full text-3xl font-bold py-14 text-center">
        Events and Festivals
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {events.map((event) => (
          <Card
            img={event.img}
            date={new Date()}
            title={event.title}
            article="link1"
            donate="link2"
          >
            {event.content}
          </Card>
        ))}
      </div>
      <button className="sm:hidden border border-violet-700 rounded-lg bg-violet-600 mt-14 px-4 py-2 text-white shadow-lg shadow-violet-300 hover:shadow-violet-300 hover:shadow-xl">
        <a href="/link">View More</a>
      </button>
    </>
  );
}
