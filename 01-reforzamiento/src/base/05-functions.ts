function greet(name: string): string {
  return `hola ${name}`;
}

interface User {
  uid: string;
  username: string;
}

const greet2 = (name: string): string => `hola ${name}`;

const message = greet("Jonathan");
const message2 = greet2("Aldair");

console.log(message);
console.log(message2);

function getUser() {
  return {
    uid: "abc-123",
    username: "Usuario1",
  };
}

const getUser2 = (): User => ({
  uid: "abc-123",
  username: "Usuario2",
});

const user = getUser();
const user2 = getUser2();

console.log(user);
console.log(user2);

const myNumbers: number[] = [1, 2, 3, 4, 5];

myNumbers.forEach((value) => {
  console.log({ value });
});


myNumbers.forEach(value => console.log({value}));


myNumbers.forEach(console.log);