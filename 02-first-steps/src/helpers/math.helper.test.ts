import { describe, expect, test } from "vitest";
import { add, multiply, subtract } from "./math.helper";

describe("add", () => {
  test("should add two positive numbers", () => {
    //! 1. Arrange : Prepara
    const a = 1;
    const b = 3;

    //! 2. Act     : Aplicar estimulos
    const result = add(a, b);

    //! 3. Assert  : Afirmar (comprobar resultados)
    expect(result).toBe(a + b);
  });

  test("should add two positive numbers", () => {
    //! 1. Arrange : Prepara
    const a = -1;
    const b = -3;

    //! 2. Act     : Aplicar estimulos
    const result = add(a, b);

    //! 3. Assert  : Afirmar (comprobar resultados)
    expect(result).toBe(a + b);
  });
});

describe("subtract", () => {
  test("should subtract two positive numbers", () => {
    const a = 2;
    const b = 3;

    const result = subtract(a, b);

    expect(result).toBe(a - b);
  });

  test("should subtract two negative numbers", () => {
    const a = -3;
    const b = -4;

    const result = subtract(a, b);

    expect(result).toBe(a - b);
  });
});

describe("multiply", () => {
  test("shoult multiply two positive numbers", () => {
    const a = 2;
    const b = 4;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });

  test("shoult multiply two negative numbers", () => {
    const a = -2;
    const b = -4;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });
});
