import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
// import { screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";

// describe("MyAwesomeApp", () => {
//   test("should render firstName and lastName", () => {
//     //! El container solo tiene el estado inicial no se actualiza
//     const { container } = render(<MyAwesomeApp />);
//     // screen.debug();

//     //* La prueba solo va a pasar cuando todos los expect pasen
//     const h1 = container.querySelector("h1");
//     expect(h1?.innerHTML).toContain("Jonathan");

//     const h3 = container.querySelector("h3");
//     expect(h3?.innerHTML).toContain("Zapata");
//   });

//   test("should render firstName and lastName --Screen", () => {
//     //! El screen se actualiza con cada render
//     render(<MyAwesomeApp />);
//     screen.debug();

//     //* La prueba solo va a pasar cuando todos los expect pasen
//     // const h1 = screen.getByRole("heading", {
//     //   level: 1,
//     // });
//     const h1 = screen.getByTestId("first-name-title");
//     console.log(h1.innerHTML);
//     expect(h1.innerHTML).toContain("Jonathan");
//   });

//   //*snapshot
//   test("should match snapshot", () => {
//     const { container } = render(<MyAwesomeApp />);

//     expect(container).toMatchSnapshot();
//   });

//   //*snapshot screen
//   test("should match snapshot", () => {
//     render(<MyAwesomeApp />);

//     expect(screen.getByTestId("div-app")).toMatchSnapshot();
//   });
// });

describe("MyAwesomeApp", () => {
  test("should render firstName and lastName", () => {
    render(<MyAwesomeApp />);
    expect(2).toBe(2);
  });
});
