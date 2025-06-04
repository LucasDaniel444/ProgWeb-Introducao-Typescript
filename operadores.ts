let a: number = 1;
let b: number = 2;

//Aritméticos
console.log("Soma ",a + b);
console.log("Subtrair ",a - b);
console.log("Multiplicar ",a * b);
console.log("Dividir ",a / b);
console.log(a, "elevado a ", b, " = ",a ** b); //elevar
console.log("Resto de",a % b);

//relacionais
console.log("Igual ", a == b);
console.log("Diferente ", a != b);
console.log("Maior que", a > b);
console.log("Menor que", b > a);
console.log("Maior ou igual", a >= b);
console.log("Menor ou igual", a <= b);

//identidades restrita
console.log("Identicos", a === b);
console.log("Não identico", a !== b);

//Logicos
let x: boolean = true;
let y: boolean =  false;

console.log("and", x && y);
console.log("or", a || y);
console.log("not", !x);

//Operador condicional (ternario)
let idade: number = 17
let acesso = idade >= 18 ? "Permitido beijar na boca" : "Não permitido";

