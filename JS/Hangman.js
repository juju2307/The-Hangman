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
];

//let letter = readlineSync.question("Can you put a single letter on the keywoard please?");
//demander de choisir une lettre via le clavier

let wordToGuess = motscaches[Math.floor(Math.random() * motscaches.length)];
//permet de donner un mot aléatoire parmis la liste

let letterToGuess = wordToGuess.split("");
console.log(letterToGuess)
//permet de séparer les lettres du mot cache

let wordCurrent = "-";

let lettersCurrent = [];
//variable qui stocke la lettre actuelle

window.onload = function(){
    console.log(wordToGuess)
    }

//creation du clavier
let lettres = document.getElementsByClassName("lettre") ;

let lettresArray = document.querySelectorAll(".lettre");   

lettresArray.forEach(
    function (lettre) {
        lettre.addEventListener("click",function(event) {
          console.log(event.target.innerHTML)
          for (x=0; x<letterToGuess.length; x++) {
             if (letterToGuess.includes(event.target.innerHTML)=== true) {
                 lettersCurrent.push (""); 
                   
              //permet de savoir si la lettre proposée fait partie du mot à découvrir
            }else {
                  lettersCurrent.push ("_");
                  console.log(lettersCurrent)
    }
       }
        })
        
    }
)

function ChangeCurrentWord() {
    wordCurrent = "";
    for (x=0;x<lettersCurrent.length;x++){
        wordCurrent = wordCurrent + lettersCurrent[x] + " ";
        
    }
}
//fonction pour apporter les nouvelles lettres au mot de départ

var WrongLetters = [];
//Letters previously guessed but incorrect

var Wrong = "";
//Wrong letters, for displaying purposes




    
    


function  nouveauJeuBoutton () {
  
   
  
}




//création de la fonction pour actionner le boutton NEWGAME






//fonction pour changer le mot courant 


function putLetter(letter,) {
    let inputLetter  =  document.getElementById("goodLetters").innerHTML = letter; 
    console.log(letter);
}

function exit() {
    window.close();
}

