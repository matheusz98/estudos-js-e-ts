// filter

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

// map

const products = [
  { name: "Camisa", price: 10.99, category: "Roupas" },
  { name: "Chaleira Elétrica", price: 49.99, category: "Eletro" },
  { name: "Fogão", price: 400, category: "Eletro" },
  { name: "Calça Jeans", price: 50.99, category: "Roupas" },
];

products.map((product) => {
  if (product.category === "Roupas") {
    product.onSale = true;
  }
});

console.log(products);

// destructuring

const fruits = ["Maçã", "Laranja", "Mamão"];

const [f1, f2, f3] = fruits;

console.log(f1);
console.log(f2);
console.log(f3);

const productDetails = {
  name: "Mouse",
  price: 39.99,
  category: "Periféricos",
  color: "Cinza",
};

const {
  name: productName,
  price,
  category: productCategory,
  color,
} = productDetails;

console.log(
  `O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory} e é da cor ${color}`
);

// spread

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

console.log(a3);

const a4 = [0, ...a1, ...a2];

console.log(a4);

const carName = { name: "Gol" };
const carBrand = { brand: "VW" };
const otherInfos = { km: 100000, price: 49000 };

const car = { ...carName, ...carBrand, ...otherInfos, wheels: 4 };

console.log(car);
