/*funny-words
random-words
one-liner-joke
figlet
cowsay*/

let funnyWords = require('funny-words');
let randomWords = require('random-words');
let oneLinerJoke = require('one-liner-joke');
let getRandomJoke = oneLinerJoke.getRandomJoke();
let figlet = require('figlet');
let cowsay = require("cowsay");

// funny words
console.log("--------- Funny and Random words ----------")
let  RandomFunnySentences = () => {
    //let funnyWords = require('funny-words');
    //let randomWords = require('random-words');
     let text  = randomWords({ exactly: 5, join: ' ' });
     let funny = funnyWords(text);
     console.log(funny)
}
RandomFunnySentences();
console.log ( "------------- One line joker ----------------")

let randomJoke = oneLinerJoke.getRandomJoke();
console.log(randomJoke);
let randomJoke1 = oneLinerJoke.getRandomJokeWithTag('stupid')
console.log(randomJoke1);

console.log("---------- Moooodle ----------");

console.log(cowsay.say({
  text : "I'm a moooodule",
  e : "oO",
  T : "U "
}));

console.log("---------- Figlet ----------");

let randomWord = randomWords();
figlet(randomWord, (err, data) => {
    if (err) {
      console.log("Something went wrong ....");
      console.dir(err);
      return;
    }
    console.log(data);
  });
  figlet();