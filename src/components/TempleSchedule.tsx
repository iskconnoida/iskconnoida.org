// TempleSchedule.tsx
import React, { useEffect, useState } from 'react';

interface Schedule {
  time: string;
  text: string;
}

const schedule: Schedule[] = [
    { time: '04:30', text: 'OPEN - Ongoing Mangala arati' },
    { time: '05:00', text: 'OPEN - Ongoing Tulsi-Puja' },
    { time: '07:30', text: 'OPEN - Ongoing Sringar darshan' },
    { time: '07:40', text: 'OPEN - Ongoing Guru puja' },
    { time: '08:00', text: 'OPEN - Ongoing Bhagavatam class' },
    { time: '12:30', text: 'OPEN - Ongoing Raj Bhoga arati' },
    { time: '18:30', text: 'OPEN - Ongoing Sandhya arati' },
    { time: '19:00', text: 'OPEN - Ongoing Bhagavad-gita discourse' },
    { time: '20:15', text: 'OPEN - Ongoing Shayana arati' },
    { time: '21:00', text: 'Temple is closed' },
  ];

const TempleSchedule: React.FC = () => {
  const [currentText, setCurrentText] = useState<string>('Temple is closed');

  useEffect(() => {
    const updateCurrentText = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

      // Iterate through the schedule to find the correct time range
      for (let i = 0; i < schedule.length - 1; i++) {
        if (currentTime >= schedule[i].time && currentTime < schedule[i + 1].time) {
          setCurrentText(schedule[i].text);
          return;
        }
      }
      
      // Default to closed if the current time does not match any range
      setCurrentText('Temple is closed');
    };

    updateCurrentText();
    const intervalId = setInterval(updateCurrentText, 60000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="text-center p-4">
      <div className="flex items-center justify-center space-x-2 mb-2">
        <span className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></span>
        <span className="text-lg sm:text-2xl text-center sm:text-left font-semibold">{currentText}</span>
      </div>
      <div className="text-center mt-2 text-sm sm:text-xl text-gray-500">
          <p className="">Open all days from 4:30 am- 1 pm </p>
          <p className="">4:15 pm - 9 pm IST</p>
        </div>
    </div>
  );
};

export default TempleSchedule;
