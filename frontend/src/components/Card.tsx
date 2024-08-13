import { Link } from "react-router-dom";

export default function Card(props: {
  img: string;
  dateless?: boolean;
  date?: Date;
  title: string;
  article?: string;
  donate?: string;
  children: string;
  imgClass?: string;
}) {
  let a = "th";
  switch (props.date?.toLocaleString("default", { day: "2-digit" })) {
    case "01":
      a = "st";
      break;
    case "02":
      a = "nd";
      break;
    case "03":
      a = "rd";
      break;
  }
  return (
    <button
      className={`w-72 bg-white border border-gray-200 rounded-xl h-sm max-h-sm shadow-lg hover:shadow-xl flex flex-col ${props.imgClass}`}
    >
      <img
        className="rounded-xl max-h-48 min-w-full"
        src={props.img}
        alt="img"
      />
      {props.dateless ? (
        <div className="p-4 h-full flex flex-col">
          <div className="">
            <h5 className="mb-2 mt-2 text-xl font-extrabold tracking-tight text-gray-900">
              {props.title}
            </h5>
          <p className="mb-3 text-sm font-normal text-gray-700">
            {props.children}
          </p></div>
          {props.donate && (
            <div className="mt-auto">
            <Link
              to={props.donate}
              className="w-full justify-between  inline-flex items-center px-6 py-4 text-sm font-medium text-center text-white bg-red-700 rounded-xl hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
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
            </Link></div>
          )}
        </div>
      ) : (
        <div className="p-4 relative -top-14 -mb-14 h-full flex flex-col">
          <div>
          <div className="flex items-center justify-center flex-col bg-violet-500 w-20 h-20 rounded-xl text-white font-semibold border border-white shadow-md shadow-slate-300">
            <span className="text-2xl">
              {props.date?.toLocaleString("default", { day: "2-digit" }) + a}
            </span>
            {props.date?.toLocaleString("default", { month: "short" })}
          </div>
            <h5 className="mb-2 mt-2 text-xl font-extrabold tracking-tight text-gray-900">
              {props.title}
            </h5>
          <p className="mb-3 text-sm font-normal text-gray-700">
            {props.children.substring(0, 90) + "\u2026"}
          </p></div>
          <div className="mt-auto flex justify-between">
            <Link
              to={props.article!}
              className="w-[47.5%] justify-between inline-flex items-center px-3 py-4 text-sm font-medium text-center text-white bg-violet-600 rounded-xl hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300"
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
            </Link>
            {props.donate && (
              <Link
                to={props.donate}
                className="w-[47.5%] justify-between inline-flex items-center px-3 py-4 text-sm font-medium text-center text-white bg-red-700 rounded-xl hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
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
              </Link>
            )}
          </div>
        </div>
      )}
    </button>
  );
}
