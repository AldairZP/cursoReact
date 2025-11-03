import { useTrafficLight } from "../hooks/useTrafficLight";

export const TrafficLightWithHook = () => {
  const {
    // colors,
    countdown,
    // light,
    percentage,
    redLight,
    yellowLight,
    greenLight,
  } = useTrafficLight();
  
  return (
    <div className="min-h-screen bg-gradient from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-3xl font-thin">Semáforo con useEffect</h1>
        <h2 className="text-2xl font-bold">{countdown}</h2>
        <div className="w-full h-2 ">
          <div
            className="h-full bg-blue-400"
            style={{
              width: `${percentage}%`,
            }}
          ></div>
        </div>
        <div className={`w-32 h-32 ${redLight} rounded-full`}></div>
        <div className={`w-32 h-32 ${yellowLight} rounded-full`}></div>
        <div className={`w-32 h-32 ${greenLight} rounded-full`}></div>
      </div>
    </div>
  );
};
