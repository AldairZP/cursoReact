import test from "node:test";
import { describe, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";
import { render } from "@testing-library/react";
// import { useCounter } from "../hooks/useCounter";

vi.mock("../hooks/useCounter");

describe("MyCounterApp", () => {
  test("should render the component", () => {
    render(<MyCounterApp />);
  });


});


