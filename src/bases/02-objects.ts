export const pokemonsIds = [1,20,30,40,50,60];

interface Pokemon {
    id: number,
    name: string,
    age: number,
}

const bulbasaur: Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    age: 2,
}

const charmander: Pokemon = {
    id: 2,
    name: 'Charmander',
    age: 4,
}

export const pokemons: Pokemon[] = [];

pokemons.push(bulbasaur, charmander);

console.log(pokemons);
