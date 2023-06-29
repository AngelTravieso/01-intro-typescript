export class Pokemon {

    // public id: number;
    // public name: string;
    
    // constructor(id : number, name: string ) {
    //     console.log('constructor llamado')
    //     this.id = id;
    //     this.name = name;
    // }

    // Forma corta (más común)
    // readonly propiedad de solo lectura, no se puede cambiar
    constructor(public readonly id: number, public name: string) {}

}

export const charmander = new Pokemon(1, 'Charmander');

// charmander.id = 10;
// charmander.name = 'Mew';