import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: "Nintendo Switch 2", quantity: 1 },
  { productName: "Pro Controller", quantity: 2 },
  { productName: "Super Smash", quantity: 5 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>

      {itemsInCart.map(({ productName, quantity }: ItemInCart) => (
        <ItemCounter key={productName} name={productName} quantity={quantity} />
      ))}

      {/* <ItemCounter quantity={2} name="Nintendo Switch 2"></ItemCounter>
      <ItemCounter quantity={2} name="Pro Controller"></ItemCounter>
      <ItemCounter quantity={2} name="Super Smash"></ItemCounter> */}
    </>
  );
}
