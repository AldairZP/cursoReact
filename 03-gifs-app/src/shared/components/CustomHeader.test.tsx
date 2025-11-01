import { describe, expect, test } from "vitest";
import { CustomHeader } from "./CustomHeader";
import { render, screen } from "@testing-library/react";

describe("CustomHeader", () => {
  const title = "testTitle";

  test("should render the title correctly", () => {
    const { container } = render(<CustomHeader title={title} />);
    const titleRender = container.querySelector("h1")?.innerHTML;

    expect(titleRender).toBe(title);
  });
  test("should render the description when provided", () => {
    const description = "test description";
    render(<CustomHeader title={title} description={description} />);

    const descriptionRender = screen.getByRole("paragraph").innerHTML;

    expect(descriptionRender).toBe(description);
  });
  test("should not render description when not provided", () => {
    const title = "testTitle";
    render(<CustomHeader title={title} />);

    // no funcionaria porque get afirma que si existe se tiene que poner query para consultar
    // expect(screen.getByRole("paragraph")).toBeNull();
    expect(screen.queryByRole("paragraph")).toBeNull();
  });
});
