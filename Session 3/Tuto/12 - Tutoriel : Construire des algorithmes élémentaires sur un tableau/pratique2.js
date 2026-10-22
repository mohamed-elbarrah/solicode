let prenoms = ["Ali", "Sara", "Yassine", "Nada", "Karim"];
let position = -1;

for (let i = 0; i < prenoms.length; i++) {
  if (prenoms[i] === "Nadia") {
    position = i;
  }
}

if (position === -1) {
  console.log(`Prénom introuvable`);
} else {
  console.log(`Nadia se trouve à l'index ${position}`);
}
