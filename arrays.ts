//Arrays e metodos de manipulação
// Criando um array
let notas: number[] = [6, 7.5, 8, 5];

//forEach
notas.forEach((n => console.log("Nota:", n)))

//map
let notasAjustadas = notas.map(n => n + 0.5);

//filter
let aprovados = notas.filter(n => n >= 6);

//push e pop
notas.push(10); // Adiciona 10 ao final do array
notas.pop(); // Remove o último elemento do array