var words = [
  "the","of","and","a","to","in","is","you","that","it","he",
  "was","for","on","are","as","with","his","they","I","at","be",
  "this","have","from","or","one","had","by","word","but","not",
  "what","all","were","we","when","your","can","said","there",
  "use","an","each","which","she","do","how","their","if","will",
  "up","other","about","out","many","then","them","these","so",
  "some","her","would","make","like","him","into","time","has",
  "look","two","more","write","go","see","number","no","way",
  "could","people","my","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"
];
// create random number
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// use random number as index to words to get a random word
const word = words[getRandomIntInclusive(0, words.length)];
// access dom for word
let elem = document.getElementById("word");
//make underscores for each letter of word
function makeUnders(word) {
  let letters = word.split('');
  return letters.map(function(letter) {
    return " _ "; 
  }).join("");
}
// put 
elem.textContent = makeUnders(word);

let letter = document.querySelector('#letter').value 
document.on
console.log(letter);



