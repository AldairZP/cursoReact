import type { CSSProperties } from "react";

const firstName = "Jonathan";
const lastName = "Zapata";

const favoriteGames: string[] = ["Hollow Knight", "Silksong"];
const isActive: boolean = true;

const address = {
  zipCode: "abc-123",
  country: "saltilo",
};
const myStyles: CSSProperties = {
  backgroundColor: "#a8a8a8",
  borderRadius: 10,
  padding: 10,
};

export function MyAwesomeApp() {
  return (
    <div data-testid="div-app">
      <h1 data-testid="first-name-title">{firstName}</h1>
      <h3>{lastName}</h3>
      <p className="mi-clase-favorita">{favoriteGames.join(", ")}</p>
      <p>{2 + 2}</p>
      <h1>{isActive ? "Activo" : "no Activo"}</h1>
      <p style={myStyles}>{JSON.stringify(address)}</p>
    </div>
  );
}
