const services = [
  {
    img: "/images/cow.webp",
    title: "Gowmata Sewa",
    link: "/services",
  },
  {
    img: "/images/food.webp",
    title: "Food for Life",
    link: "/services",
  },
  {
    img: "/images/membership.webp",
    title: "LIFE Membership",
    link: "/services",
  },
  {
    img: "/images/people.webp",
    title: "Community Service Centre",
    link: "/services",
  },
  {
    img: "/images/happy.webp",
    title: "Blissful Deity Worship",
    link: "/services",
  },
  {
    img: "/images/book.webp",
    title: "Books Distribution",
    link: "/services",
  },
];

export const OurServices = () => (
  <div className="container mx-auto lg:px-10 md:px-4 px-6 my-14">
    <h3 className="text-4xl font-semibold mb-10 mt-10">Our Services</h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
      {services.map((service, index) => (
        <a key={index} href={service.link}>
          <div className=" rounded-lg shadow-md overflow-hidden h-64 flex flex-col items-center justify-center">
            <div className="w-full flex items-center justify-center bg-violet-200 border h-44 border-violet-50">
              <img
                src={service.img}
                alt={service.title}
                className=" w-28 h-28"
              />
            </div>
            <div className="p-4 h-20">
              <h5 className="text-xl font-semibold py-2">{service.title}</h5>
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
);
