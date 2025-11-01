const person = {
  name: "Tony",
  age: 45,
  key: "Ironman",
};

const { name, age, key } = person;

console.log(name, age, key);

interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
}

const useContext = ({ name, age, key, rank }: Hero) => {
  return {
    keyName: key,
    user: {
      name,
      age,
    },
    rank,
  };
};

const context = useContext(person);
// const {rank, keyName, user:{name} } = useContext(person);

// console.log(rank, keyName, UserActivation )

console.log(context);
