let produits = ["Clavier", "Souris", "Ecran", "Casque"];
let prix = [150, 80, 1200, 250];
let stocks = [10, 0, 5, 3];
let total = 0;
let produitCher = prix[0];

for (let x = 0; x < produits.length; x++) {
  console.log(`${produits[x]} -> ${prix[x]} dhs -> ${stocks[x]} en stock`);
  if (stocks[x] === 0) {
    console.log(`le produit ${produits[x]} en repture de stock (stock null)!!`);
  }

  total += Number(prix[x]) * Number(stocks[x]);

  // =============== produit plus cher ===============
  if (prix[x] > produitCher) {
    produitCher = produits[x];
  }
}

// =============== produit dont le stock est inferieur a 5 ===============

console.log(`=============== total des produits en stock ===============`);
console.log(`total prix des produit en stock est ${total}`);
console.log(`=============== produit plus cher ===============`);
console.log(`produit plus cher est ${produitCher}`);

// Vérification des stocks inférieurs à 5
for (let index = 0; index < produits.length; index++) {
  // Vérification des stocks inférieurs à 5
  if (stocks[index] < 5) {
    console.log(
      `${produits[index]} a un stock inférieur à 5 (${stocks[index]})`,
    );
  }
}
