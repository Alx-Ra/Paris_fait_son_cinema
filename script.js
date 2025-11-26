//Permet grâce à l'URL, quel est l'id de la carte, pour savoir de quelle carte il sagit.
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

//Un tableau avec le détails de toutes les cartes.
const cartes = [
    {
        id: "1",
        titre: "Sous la Seine",
        image: "images/Sous_la_Seine.jpg",
        herosubtitle: "En plein été, Paris est menacé par un mystérieux danger venu des profondeurs.Entre suspense et action, une course contre la montre s'engage pour sauver la ville.",
        texte: "Été 2024, Paris accueille pour la première fois les championnats du monde de triathlon sur la Seine. Sophia, brillante scientifique, est alertée par Mika, une jeune activiste dévouée à l'écologie, de la présence d'un grand requin dans les profondeurs du fleuve. Elles n'ont d'autre choix que de faire équipe avec Adil, commandant de la police fluviale pour éviter un bain de sang au cœur de la ville.",
        realisateur: "Xavier Gens",
        acteurs: [
            {acteur: "Bérénice Bejo"},
            {acteur: "Nassim Lyes"},
            {acteur: "Léa Léviant"},
        ],
        pins: [
            {coords: [48.82623, 2.36085], label: "lieu"},
        ],
        zoom: 16,
    },

     {
        id: "2",
        titre: "DaVinci Code",
        image: "images/DaVinci_code.jpg",
        texte: "Une nuit, le professeur Robert Langdon, éminent spécialiste de l'étude des symboles, est appelé d'urgence au Louvre : le conservateur du musée a été assassiné, mais avant de mourir, il a laissé de mystérieux symboles... Avec l'aide de la cryptologue Sophie Neveu, Langdon va mener l'enquête et découvrir des signes dissimulés dans les oeuvres de Léonard de Vinci.",
        realisateur: "Ron Howard",
        acteurs: [
            {acteur: "Tom Hanks"},
            {acteur: "Audrey Tautou"},
            {acteur: "Paul Bettany"},
            {acteur: "Jean Reno"},
            {acteur: "Ian McKellen"},
        ],
        pins: [
            {coords: [48.864824, 2.334595], label: "Musée du Louvre"},
            {coords: [48.8507,  2.3342], label: "Eglise Saint Sulpice"},
            {coords: [48.8679858, 2.3288795], label: "Hôtel Ritz"},
            {coords: [48.8588, 2.2505], label: "Bois de Boulogne"},
        ],
        zoom: 16,
    },

    {
        id: "3",
        titre: "Emily in Paris",
        image: "images/Emily_in_Paris.jpg",
        texte: "Emily Jane Cooper, une Américaine de Chicago, déménage à Paris, en France, suite à une promotion dans sa «boîte». En effet, la société de marketing où elle travaille vient d'acquérir Savoir, une société du même domaine basée en France, à laquelle l'agence d'Emily souhaite apporter une touche américaine.",
        realisateur: "Darren Star",
        acteurs: [
            {acteur: "Lily Collins"},
            {acteur: "Philippine Leroy-Beaulieu"},
            {acteur: "Ashley Park"},
            {acteur: "Lucas Bravo"},
        ],
        pins: [
            {coords: [48.82623, 2.36085], label: "lieu"},
        ],
        zoom: 16,
    },

    {
        id: "4",
        titre: "Le fabuleux destin d'Amélie Poulain",
        image: "images/Amelie_Poulain.jpg",
        texte: "Amélie, une jeune serveuse dans un bar de Montmartre, passe son temps à observer les gens et à laisser son imagination divaguer. Elle s'est fixé un but : faire le bien de ceux qui l'entourent. Elle invente alors des stratagèmes pour intervenir incognito dans leur existence. Le chemin d'Amélie est jalonné de rencontres : Georgette, la buraliste hypocondriaque ; Lucien, le commis d'épicerie ; Madeleine Wallace, la concierge portée sur le porto et les chiens empaillés ; Raymond Dufayel, son voisin.",
        realisateur: "Jean-Pierre Jeunet",
        acteurs: [
            {acteur: "Audrey Tautou"},
            {acteur: "Mathieu Kassovitz"},
            {acteur: "Rufus"},
            {acteur: "Serge Merlin"},
            {acteur: "Jamel Debbouze"},
        ],
        pins: [
            {coords: [48.8925, 2.3444], label: "Butte Montmartre"},
            {coords: [48.884979, 2.333568], label: "Café des deux Moulins"},
            {coords: [48.882324, 2.381923], label: "Marché de la Butte"},
            {coords: [48.88500, 2.34333], label: "Square Louise-Michel"},
            {coords: [48.8716, 2.3580], label: "Canal Saint-Martin"},
        ],
        zoom: 16,
    },

    {
        id: "5",
        titre: "Paris, je t'aime",
        image: "images/Paris_je_taime.jpg",
        texte: "Dix-huit histoires sur le thème de l'amour se déroulant dans des arrondissements parisiens: un célibataire vient en aide à une femme qui s'est évanouie sur la rue; un touriste américain regrette d'avoir fait de l'oeil à une fille dans le métro; une immigrée brésilienne dépose son bébé à la crèche afin d'aller s'occuper de celui d'une famille bourgeoise.",
        realisateur: "Olivier Assayas",
        acteurs: [
            {acteur: "Juliette Binoche"},
            {acteur: "Wes Craven"},
            {acteur: "Gaspard Ulliel"},
            {acteur: "Elijah Wood"},
            {acteur: "Steve Buscemi"},
        ],
        pins: [
            {coords: [48.8655359, 2.3412944], label: "Place des Victoires"},
            {coords: [48.8603823, 2.360742], label: "Le Marais"},
            {coords: [48.8508, 2.3392], label: "Quartier Latin"},
            {coords: [48.8822982, 2.3380899], label: "Pigalle"},
            {coords: [48.8611296, 2.3940087], label: "Cimetière du Père Lachaise"},
        ],
    },
];
//Parcours le tableau de cartes pour trouver l'id de la carte
//  pour vérifier que c'est bien le même que l'id de l'URL.
const carte = cartes.find(c => c.id === id);

//Garder dans const container l'élèment avec  l'id card-details
// qui se trouve dans le fichier view.html.
const container = document.getElementById("card-details");

//Injecter dynamiquement² les éléments de la carte dans le view.html.
if (carte) { // Verifie si l'objet carte existe.

    const acteurs = carte.acteurs
    ? carte.acteurs.map(i => `<li>${i.acteur}</li>`).join("")
    : "Aucun acteurs renseignés";

    const labels = carte.pins
    ? carte.pins.map(j => `<li>${j.label}</li>`).join("")
    : "Aucun lieux renseignés";
    // Insère dynamiquement le contenu HTML dans le container.
    // + J'insère la section hero.
    container.innerHTML = `

    <section class="hero" style="background-image: url('${carte.image}');">
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <h1 class="hero-title">${carte.titre}</h1>
            <p class="hero-subtitle">${carte.herosubtitle}</p>
        </div>
    </section>

    <div class="page-content">
    <h2>${carte.titre}</h2>
    <div class="img-infos">
    <img src="${carte.image}" alt="${carte.titre}" style="width:400px;">
    <div class="infos-droite">
    <p id="resume">${carte.texte}</p>
    <div id="real">
    <h3>Réalisateur : </h3>
    <p>${carte.realisateur}</p>
    </div>
    <div id="act">
    <h3>Acteurs : </h3>
    <ul>${acteurs}</ul>
    </div>
    </div>
    </div>
    <div class="map-lieu">
    <div id="labels">
    <h3>Lieux de tournage : </h3>
    <ul>${labels}</ul>
    </div>
    <div id="map" style="width:400px;height:300px;margin-top:20px;border-radius:10px;"></div>
    </div>
    `;

    //Initialise une map Leaflet.
    const map = L.map("map"); 
    //Récupère les coordonnées des pins pour chaque carte.
    const latlngs = carte.pins.map(pin => pin.coords);
    //Englobe et zoom sur les pins pour qu'ils soient tous visible.
    //avec de l'espace entre les pins et les côtés de la map.
    map.fitBounds(latlngs, {padding: [50, 50]});
    
    //Ajout du fond de map openstreetmap.
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19, //Zoom maximum autorisé.
    attribution: '© OpenStreetMap' //ajout de l'attribution de la map (mention légale).
  }).addTo(map);

  //Supprime le prefix "Leaflet".
  map.attributionControl.setPrefix(false);
  
  //Parcours chaque pin de la carte.
  carte.pins.forEach(pin => {
    //Crée un marqueur à ses coordonnées, l'ajoute à la map,
    //associe au marqueur une popup avec son label.
    L.marker(pin.coords).addTo(map).bindPopup(`${pin.label}`);
});

} else { //Si l'objet carte n'est pas trouvé.
    //Le texte s'affiche.
    container.innerHTML = "<p>Carte non trouvée.</p>";
}




