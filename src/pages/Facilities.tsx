import Card from "../components/Card";

interface FacilitiesProps {
  onHomePage: boolean;
}

const facilities = [
  {
    img: "https://iskconnoida.org/wp-content/uploads/2023/12/1780066_10151922662621364_1967521465_o.jpg",
    title: "Krishna Expo",
    content:
      "Explore Krishna's Leelas presented in a beautiful form, that is attractive to all.",
    link: "/facilities",
  },
  {
    img: "https://iskconnoida.org/wp-content/uploads/2023/12/static-_1665002df6dabb1-Edited-scaled.jpeg",
    title: "Guest House",
    content:
      "Stay at ISKCON's BACK TO HOME Guest houses, get a chance to live close to temple and spend the  time of your stay in complete Krishna Consciousness.",
    link: "/facilities",
  },
  {
    img: "https://iskconnoida.org/wp-content/uploads/2023/12/umage-1024x682-Edited.jpeg",
    title: "Function Halls",
    content:
      "Celebrate your Family and Corporate functions with the auspicious blessings of Sri Sri Radha Govind Devji.",
    link: "/facilities",
  },
  {
    img: "https://iskconnoida.org/wp-content/uploads/2023/12/download-10.jpeg",
    title: "Govindas Restaurant",
    content:
      "Dine a Pure Veg meal at the world famous ISKCON Govindas Restaurant and Bakery. Everything here from cakes and pastries to pastas and main course is Pure veg.",
    link: "/facilities",
  },
];

export default function Facilities({ onHomePage }: FacilitiesProps) {
  return onHomePage ? (
    <>
      <div className="hidden px-12 sm:flex w-full">
        <div className="w-1/2 text-3xl font-bold py-14">Temple Facilities</div>
        <div className="w-1/2 py-14 inline-flex justify-end">
          <button className="border border-violet-700 rounded-lg bg-violet-600 px-4 py-2 text-white shadow-lg shadow-violet-300 hover:shadow-violet-300 hover:shadow-xl">
            <a href="/facilities">View More</a>
          </button>
        </div>
      </div>
      <div className="sm:hidden w-full text-3xl font-bold py-14 text-center">
        Temple Facilities
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {facilities.map((event) => (
          <Card
            img={event.img}
            dateless
            title={event.title}
            article={event.link}
          >
            {event.content}
          </Card>
        ))}
      </div>
      <button className="sm:hidden border border-violet-700 rounded-lg bg-violet-600 mt-14 px-4 py-2 text-white shadow-lg shadow-violet-300 hover:shadow-violet-300 hover:shadow-xl">
        <a href="/facilities">View More</a>
      </button>
    </>
  ) : (
    <div className="container mx-auto lg:px-10 md:px-4 my-14">
      <h3 className="text-4xl text-center font-semibold mb-10 mt-10">Temple Facilities</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {facilities.map((facility, index) => (
          <div key={index}>
            <div className="rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
              <div className="w-full flex items-center justify-center h-fit">
                <img
                  src={facility.img}
                  alt={facility.title}
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-full h-full bg-white flex items-center justify-center p-6">
                <h5 className="text-2xl text-center font-semibold">
                  {facility.title}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
