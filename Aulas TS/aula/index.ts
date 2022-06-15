// Criando primeiro código
// const input1 = document.getElementById("num1") as HTMLInputElement;
// const input2 = document.getElementById("num2") as HTMLInputElement;
// const button = document.getElementById("button")!;

// function sum(a: number, b: number) {
//   return a + b;
// }

// button.addEventListener("click", function () {
//   console.log(sum(Number(input1.value), Number(input2.value)));
// });

// ------------------------------------------------------------------------------------

// Types

// // boolean (true / false)
// let isOpen: boolean;
// isOpen = true;

// // string ('foo', "foo", `foo`)
// let message: string;
// message = `foo ${isOpen}`;

// // number (int, float, hex, binary)
// let total: number;
// total = 10;

// // array (type[])
// let items: string[];
// items = ["foo", "bar"];

// let values: Array<number>;
// values = [1, 2, 3];

// // tuple
// let title: [number, string, boolean];
// title = [1, "foo", true];

// // enum
// enum Colors {
//   white = "#ffffff",
//   black = "#0c0c0c",
// }

// // any (qualquer coisa) Não recomendável!
// let coisa: any;
// coisa = [1, 2, 3];

// // void (vazio, sem retorno)
// function logger(): void {
//   console.log("foo");
// }

// // null / undefined (nulo, indefinido)
// type Bla = string | undefined;

// // never (nunca retornará)
// // ex: retorna erros
// function error(): never {
//   throw new Error("error");
// }

// // object
// let cart: object;

// cart = {
//   key: "fi",
// };

// ---------------------------------------------------------------------------

// Type Inference -> permite definir a variável e o conteúdo
// let message = "mensagem definida";
// message = "string nova";

// window.addEventListener("click", (e) => {
//   console.log(e.target);
// });

// --------------------------------------------------------------------------------------

// Type Aliases e Union
// Alias cria uma variável com seus respectivos tipos
// O Union | define mais de um tipo

// type Uid = number | string | undefined;

// function logDetails(uid: Uid, item: string) {
//   console.log(`A product with ${uid} has a title as ${item}.`);
// }

// function logInfo(uid: Uid, user: string) {
//   console.log(`An user with ${uid} has a name as ${user}.`);
// }

// type Platform = "Windows" | "Linux" | "MacOS" | "iOS";

// function renderPlatform(platform: Platform) {
//   return platform;
// }

// renderPlatform("Windows");

// logDetails(123, "sapato");
// logDetails("123", "sapato");

// logInfo(123, "Matheus");
// logInfo("123", "Matheus");

// ----------------------------------------------------------------------------------

// Type Aliases com Intersection
// type AccountInfo = {
//   id: number;
//   name: string;
//   email?: string;
// };

// const account: AccountInfo = {
//   id: 123,
//   name: "Matheus",
// };

// type CharInfo = {
//   nickname: string;
//   level: number;
// };

// const char: CharInfo = {
//   nickname: "matheuscosta",
//   level: 100,
// };

// // Intersection -> união
// type PlayerInfo = AccountInfo & CharInfo;

// const player: PlayerInfo = {
//   name: "Matheus",
//   nickname: "matheuscosta",
//   id: 123,
//   level: 100,
// };

// --------------------------------------------------------------------------------------

// // Classes
// class UserAccount {
//   public name: string;
//   protected age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   logDetails(): void {
//     console.log(`The player ${this.name} is ${this.age} years old.`);
//   }
// }

// class CharAccount extends UserAccount {
//   private nickname: string;
//   //   readonly level: number;
//   level: number;

//   constructor(name: string, age: number, nickname: string, level: number) {
//     super(name, age);

//     this.nickname = nickname;
//     this.level = level;
//   }

//   get getLevel() {
//     console.log("GET LEVEL");
//     return this.level;
//   }

//   set setLevel(level: number) {
//     this.level = level;
//   }
// }

// const matheus = new UserAccount("Matheus", 23);
// console.log(matheus);
// matheus.logDetails();

// const john = new CharAccount("John", 45, "johnmaster", 80);

// console.log(john);
// john.logDetails();

// john.setLevel = 499;

// console.log(john.getLevel);

// -------------------------------------------------------------------------------------------

// // Interfaces
// interface Game {
//   title: string;
//   description: string;
//   readonly genre: string;
//   platform?: string[];
//   getSimilars?: (title: string) => void;
// }

// const tlou: Game = {
//   title: "The Last of Us",
//   description: "One of the best games ever",
//   genre: "Action",
//   //   platform: ["PS3", "PS4"],
//   getSimilars: (title: string) => {
//     console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
//   },
// };

// console.log(tlou.title);
// if (tlou.getSimilars) {
//   tlou.getSimilars(tlou.title);
// }

// interface DLC extends Game {
//   originalGame: Game;
//   newContent: string[];
// }

// const leftBehind: DLC = {
//   title: "The Last of Us - Left Behind",
//   description: "You play as Ellie before the original game",
//   genre: "Action",
//   platform: ["PS3", "PS4"],
//   originalGame: tlou,
//   newContent: ["3 hours story", "new characters"],
// };

// class CreateGame implements Game {
//   title: string;
//   description: string;
//   genre: string;
//   platform?: string[];

//   constructor(
//     title: string,
//     description: string,
//     genre: string,
//     platform?: string[]
//   ) {
//     this.title = title;
//     this.description = description;
//     this.genre = genre;
//   }
// }

// -------------------------------------------------------------------------------------------