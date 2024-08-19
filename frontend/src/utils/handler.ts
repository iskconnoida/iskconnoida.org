interface value {
  id: string;
  title: string;
  img: string;
  description: string;
  date?: string;
  donation_link?: string;
}

type Response = Record<string, value>;

function handler(res: Response) {
  const data: value[] = [];
  for (const i in res) {
    data.push(res[i]);
  }
  return data;
}

const eventsRes: Response = {
  festival_response: {
    id: "11",
    title: "Shri Krishna Janmashtami 2024",
    img: "upload/catimg/6ea9ab1baa0efb9e19094440c317e21b.29_08_2021-krishna_30_2_21972025.jpg",
    description:
      "On the most auspicious occasion of 5251st Janmashtami Mahotsava of Lord Shri Krishna, may the Lordships Shri Shri Radha Govind Dev shower their love in your hearts. Feel free to donate on the occasion of Shri Krishna Janmashtami and be a part of this festivity. Hare Krishna.",
    date: "2024-08-26",
  },
};

const facilitiesRes: Response = {
  facilities_response1: {
    id: "13",
    title: "Guest House",
    img: "/images/static-_1665002df6dabb1-Edited-scaled.webp",
    description:
      "Stay at ISKCON's BACK TO HOME Guest houses, get a chance to live close to temple and spend the time of your stay in complete Krishna Consciousness.",
  },
  facilities_response2: {
    id: "14",
    title: "Krishna Expo",
    img: "/images/1780066_10151922662621364_1967521465_o.webp",
    description:
      "Explore Krishna's Leelas presented in a beautiful form, that is attractive to all.",
  },
  facilities_response3: {
    id: "15",
    title: "Function Halls",
    img: "/images/umage-1024x682-Edited.webp",
    description:
      "Celebrate your Family and Corporate functions with the auspicious blessings of Sri Sri Radha Govind Devji.",
  },
  facilities_response4: {
    id: "16",
    title: "Govindas Restaurant",
    img: "/images/download-10.webp",
    description:
      "Dine a Pure Veg meal at the world famous ISKCON Govindas Restaurant and Bakery. Everything here from cakes and pastries to pastas and main course is Pure veg.",
  },
};

const donationsRes: Response = {
  services_response1: {
    id: "12",
    title: "Anna Daan 2024",
    img: "upload/catimg/37693cfc748049e45d87b8c7d8b9aacd.Annadaan%201.png",
    description:
      "Anna daan is the act of donating food to the needy. In Vedic culture, it is considered one of the most pious and virtuous acts. Anna Daan is considered to be Mahadaan. It is believed that offering food to others is equivalent to offering it to God Himself.",
    donation_link: "https://iic.iskconnoida.org/donate/Anna_Daan_2024",
  },
  services_response2: {
    id: "11",
    title: "Shri Krishna Janmashtami 2024",
    img: "upload/catimg/f899139df5e1059396431415e770c6dd.janmashtami 2024_11zon.webp",
    description:
      "On the most auspicious occasion of 5251st Janmashtami Mahotsava of Lord Shri Krishna, may the Lordships Shri Shri Radha Govind Dev shower their love in your hearts. Feel free to donate on the occasion of Shri Krishna Janmashtami and be a part of this festivity. Hare Krishna.",
    donation_link:
      "https://iic.iskconnoida.org/donate/SHRI_KRISHNA_JANMASHTAMI_2024,_NOIDA",
  },
};

export const events = handler(eventsRes);
export const facilities = handler(facilitiesRes);
export const donations = handler(donationsRes);
