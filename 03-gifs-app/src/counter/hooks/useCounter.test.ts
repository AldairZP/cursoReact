import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";
import { act, renderHook } from "@testing-library/react";

describe("useCounter", () => {
  test("should initialize with default value of 10", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
  });

  test("should initialize with default custom value", () => {
    const initialValue = 14;
    const { result } = renderHook(() => useCounter(initialValue));

    expect(result.current.counter).toBe(initialValue);
  });

  test("should increment counter when handleAdd is called", () => {
    const initialValue = 15;
    const { result } = renderHook(() => useCounter(initialValue));

    act(() => {
      result.current.handleAdd();
    });

    expect(result.current.counter).toBe(initialValue + 1);
  });

  test("should decrement counter when handleSubtract is called", () => {
    const initialValue = 15;
    const { result } = renderHook(() => useCounter(initialValue));

    act(() => {
      result.current.handleSubtract();
    });

    expect(result.current.counter).toBe(initialValue - 1);
  });

  test("should reset initialValue counter when handleReset is called", () => {
    const initialValue = 15;
    const { result } = renderHook(() => useCounter(initialValue));

    act(() => {
      result.current.handleSubtract();
    });

    expect(result.current.counter).toBe(initialValue - 1);

    act(() => {
      result.current.handleReset();
    });

    expect(result.current.counter).toBe(initialValue);
  });
});
