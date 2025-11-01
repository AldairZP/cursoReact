import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", () => {
  test("should decrease count when -1 is pressed", () => {
    const name = "Test Item";
    const quantity = 2;

    render(<ItemCounter name={name} quantity={quantity} />);
    const [, buttonSubtract] = screen.getAllByRole("button");

    fireEvent.click(buttonSubtract);

    expect(screen.getByText(quantity - 1)).toBeDefined();
  });

  test("should not decrease count when -1 is pressed and quantity is 1", () => {
    const name = "Test Item";
    const quantity = 1;

    render(<ItemCounter name={name} quantity={quantity} />);
    const [, buttonSubtract] = screen.getAllByRole("button");

    fireEvent.click(buttonSubtract);

    expect(screen.getByText(1)).toBeDefined();
  });

  test("snapshot", () => {
    const name = "Test Item";
    const quantity = 3;
    const { container } = render(
      <ItemCounter name={name} quantity={quantity} />
    );

    expect(container).toMatchSnapshot();
  });
});
