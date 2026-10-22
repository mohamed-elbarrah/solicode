let ventes = [110, 75, 150, 180, 90, 130, 100, 160];

const SEUIL_EXCEPTIONNEL = 130;

let caTotal = 0;
let venteMax = ventes[0];
let venteMin = ventes[0];
let nbVentesExceptionnelles = 0;
let caVentesExceptionnelles = 0;

for (let i = 0; i < ventes.length; i++) {
  let venteActuelle = ventes[i];

  caTotal += venteActuelle;

  if (venteActuelle > venteMax) {
    venteMax = venteActuelle;
  }

  if (venteActuelle < venteMin) {
    venteMin = venteActuelle;
  }

  if (venteActuelle >= SEUIL_EXCEPTIONNEL) {
    nbVentesExceptionnelles++;
    caVentesExceptionnelles += venteActuelle;
  }
}

let totalVentes = ventes.length;

// Affichage des résultats
console.log("=== SYNTHÈSE DES VENTES ===");
console.log(`1. Nombre total de ventes : ${totalVentes}`);
console.log(`2. Chiffre d'affaires total : ${caTotal}`);
console.log(`3. Vente la plus élevée (Max) : ${venteMax}`);
console.log(`Vente la plus faible (Min) : ${venteMin}`);
console.log(`4. Nombre de ventes exceptionnelles : ${nbVentesExceptionnelles}`);
console.log(
  `5. CA issu des ventes exceptionnelles : ${caVentesExceptionnelles}`,
);
