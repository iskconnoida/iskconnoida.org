export default function Services() {
  return (
    <>
      <div className="hidden px-12 sm:flex w-full">
        <div className="w-1/2 text-3xl font-bold py-14">Services</div>
        <div className="w-1/2 py-14 inline-flex justify-end">
          <button className="border border-violet-700 rounded-lg bg-violet-600 px-4 py-2 text-white shadow-lg shadow-violet-300 hover:shadow-violet-300 hover:shadow-xl">
            <a href="/link">View More</a>
          </button>
        </div>
      </div>
      <div className="sm:hidden w-full text-3xl font-bold pt-6 pb-14 text-center">
        Services
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1 md:gap-2 lg:gap-4">
        <div className="items-center p-4">
          <div className="mx-auto bg-violet-200 border border-violet-500 w-fit rounded-full p-6">
            <img src="/images/cow.webp" className="h-24 w-24" alt="" />
          </div>
          <div className="py-2 text-center">Gowmata Sewa</div>
        </div>
        <div className="items-center p-4">
          <div className="mx-auto bg-violet-200 border border-violet-500 w-fit rounded-full p-6">
            <img src="/images/food.webp" className="h-24 w-24" alt="" />
          </div>
          <div className="py-2 text-center">Food for Life</div>
        </div>
        <div className="items-center p-4">
          <div className="mx-auto bg-violet-200 border border-violet-500 w-fit rounded-full p-6">
            <img src="/images/membership.webp" className="h-24 w-24" alt="" />
          </div>
          <div className="py-2 text-center">LIFE Membership</div>
        </div>
        <div className="items-center p-4">
          <div className="mx-auto bg-violet-200 border border-violet-500 w-fit rounded-full p-6">
            <img src="/images/people.webp" className="h-24 w-24" alt="" />
          </div>
          <div className="py-2 text-center">Community Service Centre</div>
        </div>
        <div className="items-center p-4">
          <div className="mx-auto bg-violet-200 border border-violet-500 w-fit rounded-full p-6">
            <img src="/images/happy.webp" className="h-24 w-24" alt="" />
          </div>
          <div className="py-2 text-center">Blissful Deity Worship</div>
        </div>
        <div className="items-center p-4">
          <div className="mx-auto bg-violet-200 border border-violet-500 w-fit rounded-full p-6">
            <img src="/images/book.webp" className="h-24 w-24" alt="" />
          </div>
          <div className="py-2 text-center">Books Distribution</div>
        </div>
      </div>
      <button className="sm:hidden border border-violet-700 rounded-lg bg-violet-600 px-4 py-2 text-white shadow-lg shadow-violet-300 hover:shadow-violet-300 hover:shadow-xl">
        <a href="/link">View More</a>
      </button>
    </>
  );
}
