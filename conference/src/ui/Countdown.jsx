"use client";
import { useState, useEffect } from "react";

export default function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="w-[350px] bg-white/90 border border-blue-200 rounded-xl shadow-lg px-8 py-4 flex flex-col items-center backdrop-blur-md">
      <div className="flex  items-center gap-3 text-lg font-mono">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-extrabold text-blue-900 drop-shadow">
            {timeLeft.days ?? 0}
          </span>
          <span className="text-xs text-blue-700 font-medium uppercase tracking-wider">
            Days
          </span>
        </div>
        <span className="text-xl font-bold text-blue-400">:</span>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-extrabold text-blue-900 drop-shadow">
            {timeLeft.hours ?? 0}
          </span>
          <span className="text-xs text-blue-700 font-medium uppercase tracking-wider">
            Hours
          </span>
        </div>
        <span className="text-xl font-bold text-blue-400">:</span>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-extrabold text-blue-900 drop-shadow">
            {timeLeft.minutes ?? 0}
          </span>
          <span className="text-xs text-blue-700 font-medium uppercase tracking-wider">
            Minutes
          </span>
        </div>
        <span className="text-xl font-bold text-blue-400">:</span>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-extrabold text-blue-900 drop-shadow">
            {timeLeft.seconds ?? 0}
          </span>
          <span className="text-xs text-blue-700 font-medium uppercase tracking-wider">
            Seconds
          </span>
        </div>
      </div>
    </div>
  );
}
