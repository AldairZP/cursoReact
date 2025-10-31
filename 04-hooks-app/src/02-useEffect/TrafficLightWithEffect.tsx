import { useEffect, useState } from "react";

// type TrafficLightColor = "red" | "yellow" | "green";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
  gray: "bg-gray-500",
};

type TrafficLightColor = keyof typeof colors;

export const TrafficLightWithEffect = () => {
  const [light, setLight] = useState<TrafficLightColor>("red");
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown < 1) return;

    const intervalId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [countdown]);

  return (
    <div className="min-h-screen from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-3xl font-thin">Semáforo con useEffect</h1>
        <h2 className="text-2xl font-bold">{countdown}</h2>
        <div
          className={`w-32 h-32 ${
            light == "red" ? colors.red : colors.gray
          } rounded-full`}
        ></div>

        <div
          className={`w-32 h-32 ${
            light == "yellow" ? colors.yellow : colors.gray
          } rounded-full`}
        ></div>
        <div
          className={`w-32 h-32 ${
            light == "green" ? colors.green : colors.gray
          } rounded-full`}
        ></div>
      </div>
    </div>
  );
};
