import { useState } from "react";

export const useCounter = (initialValue: number = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => {
    setCounter((value) => ++value);
  };
  const handleSubtract = () => {
    setCounter((prevState) => --prevState);
  };
  const handleReset = () => {
    setCounter(initialValue);
  };

  return {
    // Properties
    counter,

    // Methods /  Actions
    handleAdd,
    handleSubtract,
    handleReset,
  };
};
