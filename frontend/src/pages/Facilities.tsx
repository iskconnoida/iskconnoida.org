import Card from "../components/Card";

interface FacilitiesProps {
  onHomePage: boolean;
}

type Response = Record<string, {
    id: string;
    title: string;
    img: string;
    description: string;
  }>;

const res: Response = {
  "facilities_response1": {
        "id": "13",
        "title": "Guest House",
        "img": "https://iskconnoida.org/wp-content/uploads/2023/12/static-_1665002df6dabb1-Edited-scaled.jpeg",
        "description": "Stay at ISKCON's BACK TO HOME Guest houses, get a chance to live close to temple and spend the time of your stay in complete Krishna Consciousness."
    },
    "facilities_response2": {
        "id": "14",
        "title": "Krishna Expo",
        "img": "https://iskconnoida.org/wp-content/uploads/2023/12/1780066_10151922662621364_1967521465_o.jpg",
        "description": "Explore Krishna's Leelas presented in a beautiful form, that is attractive to all."
    },
    "facilities_response3": {
        "id": "15",
        "title": "Function Halls",
        "img": "https://iskconnoida.org/wp-content/uploads/2023/12/umage-1024x682-Edited.jpeg",
        "description": "Celebrate your Family and Corporate functions with the auspicious blessings of Sri Sri Radha Govind Devji. With space"
    },
    "facilities_response4": {
        "id": "16",
        "title": "Govindas Restaurant",
        "img": "https://iskconnoida.org/wp-content/uploads/2023/12/download-10.jpeg",
        "description": "Dine a Pure Veg meal at the world famous ISKCON Govindas Restaurant and Bakery. Everything here from cakes and pastries to pastas and main course is Pure veg."
    }
  };

  const facilities: {
      "id": string;
      "title": string;
      "img": string;
      "description": string;
  }[] = [];
  for (const facility in res) {
facilities.push(res[facility])
  }

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {facilities.map((facility) => (
          <Card
            img={facility.img}
            dateless
            title={facility.title}
          >
            {facility.description}
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
              <div className="w-full h-full bg-white flex flex-col items-center justify-center p-6">
                <h5 className="text-2xl text-center font-semibold">
                  {facility.title}
                </h5>
                <p className="pt-2 text-center">{facility.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
