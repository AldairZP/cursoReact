interface Person {
  fistName: string;
  lastName: string;
  age: number;
  address?: Address;
}

interface Address {
  postalCode: string;
  city: string;
}

const ironman: Person = {
  fistName: "Tony",
  lastName: "Stark",
  age: 45,
  address: {
    postalCode: "25115",
    city: "New York",
  },
};

const spiderman : Person = {
  fistName: "",
  lastName: "",
  age: 0,
  address: {
    postalCode: "25115",
    city: "New York",
  }
}

console.log(ironman);
console.log(spiderman);

// // const spiderman = {...ironman};// desestructura a primer nivel
// const spiderman = structuredClone(ironman); // no tiene ninguna referencia a algun objeto, crea un o nuevo

// spiderman.fistName = "Peter"
// spiderman.lastName = "Parker"
// spiderman.age = 32
// spiderman.address.city = "Texas"

// console.log(ironman);
// console.log(spiderman);
