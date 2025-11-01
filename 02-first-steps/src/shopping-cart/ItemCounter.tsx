import { useState } from "react";

import "./ItemCounter.css";
import styles from "./ItemCounter.module.css";

export interface Props {
  name: string;
  quantity?: number;
  // quantity: number | undefined; // Tiene que ponerse el prop en la etiqueta
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    setCount((value) => value + 1);
  };

  const handleSubtract = () => {
    if (count === 1) return;
    setCount((value) => value - 1);
  };

  return (
    <section
      className={styles["item-row"]}
      // style={{
      //   display: "flex",
      //   alignItems: "center",
      //   gap: 10,
      //   marginTop: 10,
      // }}
    >
      <span
        className={styles.itemText}
        style={{
          color: count === 1 ? "red" : "black",
        }}
      >
        {name}
      </span>
      <button onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button onClick={handleSubtract}>-1</button>
    </section>
  );
};
