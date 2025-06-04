 //***TIPOS EM TYPESCRIPT***** *

 // TIPOS PRIMITIVOS
  let texto: string = "Ola mundo";
  let numero: number = 42;
  let ativo: boolean = true;

  //Arrays
  let numeros: number[] = [1, 2, 3, 4, 5] //primeira forma de declarar array
  let palavras: Array<string> = ['Typescript', 'é', 'daora'] //segunda forma de declarar array

  //Tuplas
  let pessoa: [string, number] = ['Zezão',24]

  //Enum -- enumeração
  enum Cores{
    Azul,
    Branco,
    Preto
  }

let corfavorita: Cores.Branco


//Any(evitar sempre que possivei)
let dadoAleatorio: any = 5;
dadoAleatorio = 'Texto dahora';
dadoAleatorio = true; //(any recebe todo tipo de valor)

//unknow(tipos mais seguro do que any)
let dadoDesconehecido: unknown = 10;

//Void
function mostarAlerta(): void(
    console.log('Atenção preste atenção na aula')
)
//Null e undefined
let nada: null = null;
let indefinido: undefined;

//Never (usado quando a função nunca retorna)
function erroFatal(mensagem:string): never{
    throw new Error(mensagem)
}

//Type aliases
type Usuario = {
    nome: string;
    idade: number;
};

let usuario: Usuario = {
    nome: "Lucas",
    idade: 16,
};
