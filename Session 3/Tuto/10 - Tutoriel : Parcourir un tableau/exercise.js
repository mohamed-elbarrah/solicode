const prompt = require("prompt-sync")();

let notes = [];
let taille = 5;
let somme = 0;

for (let i = 0; i < taille; i++) {
  notes[i] = Number(prompt(`enter note of student ${i + 1}: `));

  somme += notes[i]; 
}
let moyenne = somme / taille;

console.log(`list of notes: ${notes}`);
console.log(`total of notes: ${somme}`);
console.log(`moyen of notes: ${moyenne}`);
