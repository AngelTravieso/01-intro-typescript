import axios from 'axios';
import { Move, PokeAPIResponse } from '../interfaces/pokeapi-respnse.interface';

export class Pokemon {

    // public id: number;
    // public name: string;
    
    // constructor(id : number, name: string ) {
    //     console.log('constructor llamado')
    //     this.id = id;
    //     this.name = name;
    // }

    // Getter
    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }

    // Forma corta (más común)
    // readonly propiedad de solo lectura, no se puede cambiar
    constructor(
        public readonly id: number,
        public name: string,
    ) {}

    // Métodos
    public scream() { // por defecto es public
        console.log(`${ this.name.toUpperCase() }!!!`);
        this.speak();
    }

    public speak() { // private: solo se puede usar dentro de la clase
        console.log(`${ this.name}, ${this.name}`);
    }

    async getMoves(): Promise<Move[]> { // Retorna un arreglo de movimientos (Move)
        // const moves = 10;
        const { data } = await axios.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log( data.moves );

        return data.moves;
    }

}

export const charmander = new Pokemon( 4, 'Charmander' );

// charmander.id = 10;
// charmander.name = 'Mew';

console.log(charmander);
// charmander.scream();
// charmander.speak();

charmander.getMoves();





