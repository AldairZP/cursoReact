import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import { HooksApp } from './HooksApp'

import "./index.css";
import { PokemonPage } from "./03-examples/pokemosPage";
// import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightWithEffect";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp/> */}
    {/* <TrafficLight/> */}
    {/* <TrafficLightWithEffect/> */}
    {/* <TrafficLightWithEffect/> */}
    {/* <TrafficLightWithHook/> */}
    <PokemonPage />
  </StrictMode>
);
