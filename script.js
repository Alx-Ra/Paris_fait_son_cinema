//Permet grâce à l'URL, quel est l'id de la carte, pour savoir de quelle carte il sagit.
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

//Un tableau avec le détails de toutes les cartes.
const cartes = [
    {
        id: "1",
        titre: "Sous la Seine",
        image: "images/Sous_la_Seine.jpg",
        texte: "Été 2024, Paris accueille pour la première fois les championnats du monde de triathlon sur la Seine. Sophia, brillante scientifique, est alertée par Mika, une jeune activiste dévouée à l'écologie, de la présence d'un grand requin dans les profondeurs du fleuve. Elles n'ont d'autre choix que de faire équipe avec Adil, commandant de la police fluviale pour éviter un bain de sang au cœur de la ville.",
    },
     {
        id: "2",
        titre: "Les Trois mousquetaires : D'artagnan",
        image: "https://img.bertrand.pt/images/os-tres-mosqueteiros-dartagnan-alexandre-dumas/NDV8MjkzNTk3NTR8MjU3NTc3NTV8MTY5NTgwNTEyMDAwMA==/500x",
        texte: "Les Trois Mousquetaires raconte l'histoire de D'Artagnan, un jeune Gascon de 18 ans qui se rend à Paris pour devenir mousquetaire. Il se lie d'amitié avec Athos, Porthos et Aramis, les célèbres mousquetaires du roi Louis XIII, et ensemble, ils se battent pour défendre l'honneur et la justice dans un royaume divisé par les guerres de religion et menacé par l'Angleterre. Dans cette aventure, ils affrontent des complots politiques et des duels, tout en cherchant à protéger la reine.",
    },
];
//Parcours le tableau de cartes pour trouver l'id de la carte
//  pour vérifier que c'est bien le même que l'id de l'URL.
const carte = cartes.find(c => c.id === id);

//Récupération de l'élément avec l'id card-details dans le fichier view.html.
const container = document.getElementById("card-details");

//Injecter dynamiquement les éléments de la carte dans le view.html.
if (carte) {
    container.innerHTML = `
    <h2>${carte.titre}</h2>
    <img src="${carte.image}" alt="${carte.titre}" style="width:400px;">
    <p>${carte.texte}</p>
    `;
} else {
    container.innerHTML = "<p>Carte non trouvée.</p>";

}
