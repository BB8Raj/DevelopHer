export interface Pet {
  id: number;
  name: string;
  type: string;
  fave_toy: string;
  age: number;
}

//create a hard coded list of pets
export const pets: Pet[] = [
  { id: 1, name: "cooper", type: "dog", fave_toy: "ball", age: 5 },
  { id: 2, name: "missy", type: "dog", fave_toy: "sticks", age: 1 },
];

export function findPetByAge(age: number): Pet[] {
  return pets.filter((pets) => pets.age <= age);
}

export function findPetByName(name: string): Pet[] {
  return pets.filter((pet) => pet.name.toLowerCase() === name.toLowerCase());
}

export function getAllPets(): Pet[] {
  return pets;
}
