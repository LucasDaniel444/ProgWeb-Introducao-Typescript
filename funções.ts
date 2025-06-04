//funções
function saudacao(nome: string): string {
  return `Olá, ${nome}!`;
}

console.log(saudacao("Lucas"));

//arrow function
const soma = (x: number, y: number): number => x + y;
console.log('Soma', soma(5, 3));

//função com valor padrão
function mensagem(texto: string = "Bem vindo"): void {
  console.log(texto);
}

//função com parametro opcional
function apresentar(nome?: string): void {
  if (nome) {
    console.log(`Olá, ${nome}!`);
  } else {
    console.log("Olá, visitante!");
  }

}