let a: number = 10;
let b: number = 14;

//Aritmeticos
console.log('soma', a + b)
console.log('subtração', a - b)
console.log('multiplicação', a * b)
console.log('divisão', a / b)
console.log('resto', a % b) //percente

//Relacionais
console.log('Igual (==)', a == b);
console.log('Diferente ', a != b);
console.log('Maior que', a > b);
console.log('Menor que', a < b);
console.log('Maior igual', a >= b);
console.log('Menor igual', a <= b);

//Identidade restrita
console.log('Identico', a === b);
console.log('Não identico', a !== b);

//Lógicos
let x: boolean = true;
let y: boolean = false;

console.log('AND', x && y);
console.log('OR', x || y);
console.log('NOT', !x);

//Operador condicional (ternario)
let idade: number = 17;
let acesso = idade >= 18 ? 'permitido beijar na boca' : 'Não permitido'