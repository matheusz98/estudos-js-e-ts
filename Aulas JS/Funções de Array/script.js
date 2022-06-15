// map -> percorrer todos elementos de um array

const numbers = [1, 4, 5, 9, 14, 23];

const doubledNumbers = numbers.map((e) => {
  return e * 2;
});

const otherDoubledNumbers = numbers.map((num) => num * 2);

console.log(doubledNumbers);
console.log(otherDoubledNumbers);

const fahrenheit = [0, 32, 45, 50, 75, 80, 120];

const celsius = fahrenheit.map((e) => {
  return Math.round(((e - 32) * 5) / 9);
});

console.log(celsius);

// -------------------------------------------------------------------------

// filter -> remover elementos indesejados com base em algumas condições

const arr = [1, 2, 3, 4, 5];

const highNumbers = arr.filter((n) => {
  if (n >= 3) {
    return n;
  }
});

console.log(highNumbers);

const users = [
  { name: "Matheus", avaliable: true },
  { name: "Pedro", avaliable: false },
  { name: "João", avaliable: true },
  { name: "Marcos", avaliable: false },
];

const avaliableUsers = users.filter((user) => user.avaliable);
const notAvaliableUsers = users.filter((user) => !user.avaliable);

console.log(avaliableUsers);
console.log(notAvaliableUsers);

// reduce -> quando é preciso encontrar um valor comulativo/concatenado com base em elementos de todo array

const rockets = [
  { country: "Russia", launches: 32 },
  { country: "US", launches: 23 },
  { country: "Canada", launches: 16 },
  { country: "Europe", launches: 7 },
  { country: "India", launches: 4 },
  { country: "Japan", launches: 3 },
];

const totalLaunches = rockets.reduce((prev, curr) => prev + curr.launches, 0);

console.log(totalLaunches);

// every -> quando for preciso testar se todos os elementos de um array passam por um teste específico
// o filter retorna um novo array obj, o every retorna um resultado booleano

const anotherArray = [12, 15, 18, 130, 44];

const allAbove10 = anotherArray.every((e) => e > 10);

console.log(allAbove10);

const turma = [
  { id: 12, name: "Frederico", age: 8 },
  { id: 47, name: "Francisca", age: 7 },
  { id: 77, name: "Ramon", age: 48 },
  { id: 85, name: "Zenon", age: 52 },
];

const allAbove18 = turma.every((t) => t.age > 18);

console.log(allAbove18);

// some -> quando é preciso testar se pelo menos um elemento do array passa por um teste específico

const isPrimo = (value) => {
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }

  return value > 1;
};

const oneMoreArray = [6, 8, 11, 14, 42];

console.log(oneMoreArray.some(isPrimo));

const team = [
  { id: 12, name: "Tooper Marley", pilot: true },
  { id: 44, name: "Ramada Thompson", pilot: true },
  { id: 59, name: "Pete Thompson", pilot: false },
  { id: 122, name: "Kowalski", pilot: false },
];

const isPilot = team.some((person) => person.pilot);

console.log(isPilot);

// find -> quando for preciso procurar ou verificar por um valor dentro de um array objeto, sendo que esse retorno será do primeiro elemento que irá satisfazer o teste

const pizzas = ["mussarela", "calabresa", "lombo", "marguerita"];

const foundPizza = pizzas.find((p) => p.startsWith("m"));

console.log(foundPizza);

const fruits = [
  { name: "jaca", quantity: 2 },
  { name: "banana", quantity: 0 },
  { name: "cereja", quantity: 5 },
];

const foundFruit = fruits.find((fruit) => fruit.name === "cereja");

console.log(foundFruit);

// includes -> quando for preciso saber se um array objeto possui determiando valor
// ele irá retornar um booleano

const randomNumbers = [1, 2, 3, 4, 5, NaN];

const numberInclude = randomNumbers.includes(5);

console.log(numberInclude);

const people = [
  { id: 11, name: "Adamastor", age: 23, group: "editor"},
  { id: 47, name: "Joana", age: 28, group: "user"},
  { id: 85, name: "Maurício", age: 34, group: "editor"},
  { id: 97, name: "Lalau", age: 74, group: "admin"},
];

const includePeople = people.filter((p) => p.name.includes("au"))

console.log(includePeople);

/* ==========================================================================
   API real!
   ========================================================================== */

   async function getPeople() {
    const response = await fetch( 'https://randomuser.me/api/?results=10' )
  
    return response.json()
  }
  
  // getPeople().then( data => console.log( data ) )
  
  /* Somente mulheres
     ========================================================================== */
  
  getPeople().then( data => {
    const people = data.results
  
    // console.log( people.filter( p => p.gender === 'female' ) )
  } )
  
  /* Trabalhando com dados
     ========================================================================== */
  
  getPeople().then( data => {
    const result = data.results.filter( p => p.dob.age >= 30 )
    const people = []
  
    for ( let p of result ) {
      people.push( {
        "Nome" : `${ p.name.first } ${ p.name.last }`,
        "Sexo" : p.gender,
        "Idade": p.dob.age
      } )
    }
  
    console.table( people )
  } )