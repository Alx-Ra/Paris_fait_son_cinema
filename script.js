const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const cartes = [
    {
        id: "1",
        titre: "Sous la Seine",
        image: "images/Sous_la_Seine.jpg",
        texte: "Été 2024, Paris accueille pour la première fois les championnats du monde de triathlon sur la Seine. Sophia, brillante scientifique, est alertée par Mika, une jeune activiste dévouée à l'écologie, de la présence d'un grand requin dans les profondeurs du fleuve. Elles n'ont d'autre choix que de faire équipe avec Adil, commandant de la police fluviale pour éviter un bain de sang au cœur de la ville.",
    },
];
const carte = cartes.find(c => c.id === id);

const container = document.getElementById("card-details");

if (carte) {
    container.innerHTML = `
    <h2>${carte.titre}</h2>
    <img src="${carte.image}" alt="${carte.titre}" style="width:400px;">
    <p>${carte.texte}</p>
    `;
} else {
    container.innerHTML = "<p>Carte non trouvée.</p>";
}