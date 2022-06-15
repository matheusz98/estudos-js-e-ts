"use strict";
// Criando primeiro código
// const input1 = document.getElementById("num1") as HTMLInputElement;
// const input2 = document.getElementById("num2") as HTMLInputElement;
// const button = document.getElementById("button")!;
const tlou = {
    title: "The Last of Us",
    description: "One of the best games ever",
    genre: "Action",
    //   platform: ["PS3", "PS4"],
    getSimilars: (title) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
    },
};
console.log(tlou.title);
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}
const leftBehind = {
    title: "The Last of Us - Left Behind",
    description: "You play as Ellie before the original game",
    genre: "Action",
    platform: ["PS3", "PS4"],
    originalGame: tlou,
    newContent: ["3 hours story", "new characters"],
};
class CreateGame {
    constructor(title, description, genre, platform) {
        this.title = title;
        this.description = description;
        this.genre = genre;
    }
}
