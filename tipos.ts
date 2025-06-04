//===TIPOS EM TYPESCRIPT===

//Tipos Primitivos
let texto: string  = "Olá Mundo";
let numero: number = 42;
let ativo: boolean =  true;

//Arrays
let numeros: number[] = [1, 2, 3, 4, 5];  //Primeira Forma 
let palavras: Array<string> = ["TypeScript", "JavaScript"];  //Segunda Forma

//Tuplas
let pessoa: [string, number] = ['João', 25];

//Enum
enum Cores {
    Vermelho,
    Verde,
    Azul
}

let corFavorita: Cores = Cores.Azul;

//Any (evitar sempre que possivel)~
let dadoAleatorio: any = 5;
dadoAleatorio = 'Texto';
dadoAleatorio = true;

//unknow (tipo mais seguro do any)
let dadoDesconhecido: unknown = 19;


//void
function mostrarAlerta(): void{
    console.log("Atenção! preste atençao na aula.")
}

//null ou undefined
let nada: null = null;
let indefinido: undefined = undefined;

//never (usado quando a função nunca retorna)
function erroFatal(mensagem:string): never{
    throw new Error(mensagem)
}

//type aliases (Type seria o equivalente ao python de dicionario)
type Usuario = {
    nome: String;
    idade: number
}

let usuario: Usuario = {nome:"Kauan", idade:17}
