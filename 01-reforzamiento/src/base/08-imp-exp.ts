import { heroes } from "../data/heroes.data";
import { type Hero } from "../data/heroes.data";
import { Owner } from "../data/heroes.data";
// import { heroes as heroesFavoritos } from "../data/heroes.data";

const getHeroById = (id: number): Hero | undefined => {
  const hero = heroes.find((hero) => {
    return hero.id === id;
  });

  //   if (!hero) {
  //     throw new Error(`no existe un heroe con el id ${id}`);
  //   }
  return hero;
};

// console.log(getHeroById(7));

export const getHeroesByOwner = (owner: Owner): Hero[] => {
  const heroesByOwner: Hero[] = heroes.filter((hero) => hero.owner == owner);
  return heroesByOwner;
};
