export default function Card() {
  return (
    <div className="w-72 bg-white border border-gray-200 rounded-xl max-h-sm shadow-lg hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
      <a href="#" className="">
        <img
          className="rounded-xl max-h-48 min-w-full"
          src="/images/tue.jpg"
          alt="img"
        />
      <div className="p-4 relative -top-14 -mb-14">
        <div className="flex items-center justify-center flex-col bg-violet-500 w-20 h-20 rounded-xl text-white font-semibold border border-white shadow-md shadow-slate-300">
          <span className="text-2xl">17th</span>Aug
        </div>
        <a href="#" className="">
          <h5 className="mb-2 mt-2 text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Srila Rupa Gowswami Disappearance Day
          </h5>
        </a>
        <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
          {"Srila Rupa Goswami, a prominent figure in the Gaudiya Vaishnava tradition, was Ramakeli in the district of Maldah, West Bengal. He was the".substring(
            0,
            90
          ) + "\u2026"}
        </p>
        <div className="flex justify-between">
          <a
            href="#1"
            className="w-[47.5%] justify-between inline-flex items-center px-3 py-4 text-sm font-medium text-center text-white bg-blue-700 rounded-xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
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
          <a
            href="#2"
            className="w-[47.5%] justify-between inline-flex items-center px-3 py-4 text-sm font-medium text-center text-white bg-red-700 rounded-xl hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Donate
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
      </div>
      </a>
    </div>
  );
}
