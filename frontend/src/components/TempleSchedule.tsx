import { useEffect, useState } from "react";

/**
 *
 *
 * @interface Schedule
 */
interface Schedule {
  startTime: string;
  endTime: string;
  text: string;
}

const schedule: Schedule[] = [
  {
    startTime: "04:15",
    endTime: "05:00",
    text: "Mangala aarti",
  },
  {
    startTime: "05:00",
    endTime: "05:20",
    text: "Tulsi-Puja",
  },
  {
    startTime: "07:30",
    endTime: "07:40",
    text: "Sringar darshan",
  },
  {
    startTime: "07:40",
    endTime: "08:00",
    text: "Guru puja",
  },
  {
    startTime: "08:00",
    endTime: "09:00",
    text: "Bhagavatam class",
  },
  {
    startTime: "09:00",
    endTime: "12:00",
    text: "Darshan open",
  },
  {
    startTime: "12:00",
    endTime: "12:30",
    text: "",
  },
  {
    startTime: "12:30",
    endTime: "13:00",
    text: "Raj Bhoga aarti",
  },
  {
    startTime: "16:15",
    endTime: "18:00",
    text: "Darshan Reopen",
  },
  {
    startTime: "18:00",
    endTime: "18:15",
    text: "",
  },
  {
    startTime: "18:15",
    endTime: "19:00",
    text: "Sandhya aarti",
  },
  {
    startTime: "19:00",
    endTime: "20:15",
    text: "Bhagavad-gita discourse",
  },
  {
    startTime: "20:15",
    endTime: "20:30",
    text: "Shayana aarti",
  },
];

/**
 *
 *
 * @return {JSX.Element} lower segment of hero section
 */
export default function TempleSchedule(): JSX.Element {
  const [currentText, setCurrentText] = useState<string>("Temple is Open");
  const [nextText, setNextText] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(true);
  useEffect(() => {
    const updateText = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = `${String(hours).padStart(2, "0")}:${String(
        minutes,
      ).padStart(2, "0")}`;

      // Iterate through the schedule to find the correct time range
      for (let i = 0; i < schedule.length; i++) {
        if (
          currentTime >= schedule[i].startTime &&
          currentTime < schedule[i].endTime
        ) {
          if (schedule[i].text === "") {
            setCurrentText("Temple is Open");
          } else {
            setCurrentText("Ongoing - " + schedule[i].text);
          }
          setIsOpen(true);
          if (schedule[i + 1] !== undefined) {
            if (schedule[i + 1].text === "") {
              setNextText("");
            } else {
              setNextText(
                schedule[i + 1].text + " @ " + schedule[i + 1].startTime,
              );
            }
          }
          return;
        }
      }

      // Default to closed if the current time does not match any range
      setCurrentText("Temple is Closed");
      setIsOpen(false);
      setNextText("");
    };

    updateText();
    const intervalId = setInterval(updateText, 60000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="text-center px-4 pt-2">
      <div className="flex items-start space-x-2 justify-center mb-2">
        <span
          className={
            "min-w-3 min-h-3 mt-2 rounded-full animate-pulse" +
            (isOpen ? " bg-green-500" : " bg-red-500")
          }
        ></span>
        <span className="text-lg sm:text-2xl text-center sm:text-left font-semibold">
          {isOpen ? "OPEN - " : "CLOSED - "}
          {currentText}
        </span>
      </div>
      <div className={"text-sm" + (nextText === "" ? " hidden" : " block")}>
        Upcoming: {nextText}
      </div>
      <div className="text-center mt-2 text-sm sm:text-xl text-gray-500">
        <p className="">Open all days from 04:15AM - 01PM,</p>
        <p className="">and 04:15PM - 09:00PM IST</p>
      </div>
    </div>
  );
}
