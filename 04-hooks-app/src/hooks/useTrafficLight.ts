import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
  gray: "bg-gray-500",
};

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {
  const [light, setLight] = useState<TrafficLightColor>("red");
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown < 1) {
      setCountdown(5);
    }

    const intervalId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [countdown]);

  useEffect(() => {
    if (countdown > 0) return;

    switch (light) {
      case "red":
        setLight("green");
        break;
      case "green":
        setLight("yellow");
        break;
      case "yellow":
        setLight("red");
        break;
      default:
        break;
    }
  }, [countdown, light]);

  return {
    // properties
    colors,
    countdown,
    light,

    // computed
    percentage: (countdown / 5) * 100,
    redLight: light === "red" ? colors.red : colors.gray,
    yellowLight: light === "yellow" ? colors.yellow : colors.gray,
    greenLight: light === "green" ? colors.green : colors.gray,
  };
};
