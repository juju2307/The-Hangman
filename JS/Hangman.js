const readlineSync = require("readline-sync");
let motscaches = [
    "GARAGE",
    "CIRAGE",
    "GRAMME",
    "GRELOT",
    "HUMOUR",
    "LIMITE",
    "BALADE",
    "ALARME",
    "ANANAS",
    "OISEAU",
    "RAPIDE",
    "GUENON",
    "PUZZLE",
    "TOMATE",
    "SEISME",
    "WHISKY",
    "TETINE",
    "PODIUM",
    "MENTHE",
    "LIONNE",
    "HURLER",
    "COCCYX",
    "BOUCHE",
    "BILLET",
    "BRONZE",
    "GOSPEL",
    "CABANE",
];
    let letter = readlineSync.question("Can you put a single letter on the keywoard please?");
document.getElementById("Nouveaujeu").addEventListener("click", function() {
    let word = [];
    for (i=1; i<= motscaches.length; i++) {
        let w = Math.floor(Math.random() * motscaches.length);
        word.push(w);
    }
});
