// Esto es considerado un modulo porque ya está exportando

// Es recomendado no colocar codigo que se ejecute cuando el archivo sea leído la primera vez

export let name: string = 'Angel';
export const age: number = 35;
export const isValid: boolean = true;

// ❌
// console.log({isValid});

// Lo que se exporta después de la definición es lo que se va a consumir
name = 'Melissa';
// name = 123
// name = true;

export const templateString = ` Esto es un string
multilinea
que puede tener
" dobles
' simple
inyectar valores ${ name }
expresiones: ${ 1 + 1}
números: ${ age }
booleanos: ${ isValid }
`;

console.log( templateString );