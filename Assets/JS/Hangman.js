//const readlineSync = require("readline-sync");
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
    "BEAU",
    "BETE",
    "BOXE",
    "BRUN",
    "MONDIAL",
    "PETROLE",
    "TONNEAU",
    "TUNIQUE",
    "VAUTOUR",
    "CORTEGE",
    "BILLARD",
    "BASSINE",
    "FOURMIS",
    "JOURNAL",
    "POTERIE",
    "PANIQUE",
    "DRAPEAU",
    "CORBEAU",
    "AQUARIUM",
    "CLOPORTE",
    "DIAPASON",
    "OBJECTIF",
    "HERISSON",
    "SCORPION",
    "TABOURET",
    "TRIANGLE",
    "ASCENSEUR",

];

//let letter = readlineSync.question("Can you put a single letter on the keywoard please?");
//demander de choisir une lettre via le clavier

document.getElementById("1").style.display = "none";
document.getElementById("2").style.display = "none";
document.getElementById("3").style.display = "none";
document.getElementById("4").style.display = "none";
document.getElementById("5").style.display = "none";
document.getElementById("6").style.display = "none";
document.getElementById("7").style.display = "none";
document.getElementById("8").style.display = "none";

let fin = true;
let wordToGuess = motscaches[Math.floor(Math.random() * motscaches.length)];
//permet de donner un mot aléatoire parmis la liste

let letterToGuess = wordToGuess.split("");
console.log(letterToGuess)
//permet de séparer les lettres du mot cache

let wordCurrent = "-";

let lettersCurrent = [];
//variable qui stocke la lettre actuelle
 let lettersWrong = [];

 let wrong = "";

window.onload = function(){
    console.log(wordToGuess)
    }
//fonction qui permet de donner un nouveau mot à l'ouverture de la fenêtre
    function ChangeCurrentWord() {
        wordCurrent = "";
        for (x=0;x<lettersCurrent.length;x++){
            wordCurrent = wordCurrent + lettersCurrent[x] + " ";
        }
        document.getElementById("underscore").innerHTML = wordCurrent;
    };
    //fonction pour apporter les nouvelles lettres au mot de départ

    function changeLetterWrong() {
        wrong ="";
        for (x=0; x < lettersWrong.length;x++) {
            wrong = wrong + lettersWrong[x] + " ";
        }
    }

    for  (x=0; x< letterToGuess.length; x++) {
        if (letterToGuess[x] == " ") {
            lettersCurrent.push [" "];
        }
        else {
            lettersCurrent.push ("_");
        }
    };
     document.getElementById("underscore").innerHTML= wordCurrent;

     let GoodAttemp = 0;


//fonction qui place une alert pour dire qu'il a gagné (mais problème de fonctionnement)

//creation du clavier
let lettres = document.getElementsByClassName("lettre") ;

let lettresArray = document.querySelectorAll(".lettre");   

lettresArray.forEach(
    function (lettre) {
        lettre.addEventListener("click",function(event) {
          console.log(event.target.innerHTML);

          let letters = event.target.innerHTML;

           if (letterToGuess.includes(letters)=== true) {

                for (x=0; x<letterToGuess.length; x++) {

                    if (letterToGuess[x] == letters) {
                 lettersCurrent[x] = letters;
                 GoodAttemp++
                   ChangeCurrentWord();
                   console.log(GoodAttemp)
               }
            }
           
            }
            else {
                  lettersWrong.push (letters);
                 changeLetterWrong();
                 document.getElementById("letterUsed").innerHTML = wrong;

                 if (lettersWrong.length == 1) {
                     document.getElementById("1").style.display = "block";
                 }
                 if (lettersWrong.length == 2) {
                     document.getElementById("1").style.display = "none";
                     document.getElementById("2").style.display = "block";
                 }
                 if (lettersWrong.length == 3) {
                     document.getElementById("2").style.display = "none";
                     document.getElementById("3").style.display = "block";
                 }
                 if (lettersWrong.length == 4) {
                     document.getElementById("3").style.display = "none";
                     document.getElementById("4").style.display = "block";
                 }
                 if (lettersWrong.length == 5) {
                     document.getElementById("4").style.display = "none";
                     document.getElementById("5").style.display = "block";
                 }
                 if (lettersWrong.length == 6) {
                     document.getElementById("5").style.display = "none";
                     document.getElementById("6").style.display = "block";
                 }
                 if (lettersWrong.length == 7) {
                     document.getElementById("6").style.display = "none";
                     document.getElementById("7").style.display = "block";
                 }
                 if (lettersWrong.length == 8) {
                     document.getElementById("7").style.display = "none";
                     document.getElementById("8").style.display = "block";
                 }
                 }
           
        });
   }
)
//fonction qui permet de savoir si la lettre proposée fait partie du mot à découvrir
// si oui alors la lettre est push
// si non alors on push un underscore
function YouAreTheWinner(){
     
    if (wordCurrent == letterToGuess) {
        alert(" Vous avez gagné! ");$
        return;
    }
    console.log(GoodAttemp)
};




function  nouveauJeuBoutton () {
  window.location.reload();
}
//création de la fonction pour actionner le boutton NEWGAME


function putLetter(letter,) {
    let inputLetter  =  document.getElementById("goodLetters").innerHTML = letter; 
    console.log(letter);
}

function exit() {
    window.close();
}

