//Permet grâce à l'URL, quel est l'id de la carte, pour savoir de quelle carte il sagit.
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

//Un tableau avec le détails de toutes les cartes.
const cartes = [
    {
        id: "1",
        titre: "Sous la Seine",
        image: "images/Sous_la_Seine.jpg",
        video: "https://www.tf1info.fr/player/897939d3-a9b3-4f6d-9673-c3f2333982c9/?autoplay=1&mute=1",
        heroImage: "https://i.headtopics.com/images/2024/8/28/bfmtv/sous-la-seine-depasse-les-100-millions-de-vues-et--sous-la-seine-depasse-les-100-millions-de-vues-et--B84BEB6CFCA0BE5055D59178A0BC2B5C.webp",
        herosubtitle: "En plein été, Paris est menacé par un mystérieux danger venu des profondeurs.Entre suspense et action, une course contre la montre s'engage pour sauver la ville.",
        texte: "Été 2024, Paris accueille pour la première fois les championnats du monde de triathlon sur la Seine. Sophia, brillante scientifique, est alertée par Mika, une jeune activiste dévouée à l'écologie, de la présence d'un grand requin dans les profondeurs du fleuve. Elles n'ont d'autre choix que de faire équipe avec Adil, commandant de la police fluviale pour éviter un bain de sang au cœur de la ville.",
        realisateur: "Xavier Gens",
        acteurs: [
            {acteur: "Bérénice Bejo"},
            {acteur: "Nassim Lyes"},
            {acteur: "Léa Léviant"},
        ],
        pins: [
            {coords: [48.8853207, 2.3721572], label: "Quai de Seine"},
            {coords: [48.833981, 2.332506], label: "Catacombe de Paris"},
            {coords: [48.8570226, 2.352859], label: "Hôtel de ville"},
        ],
        zoom: 16,
         // NOUVEAU : itinéraire détaillé pour la balade
        itineraire: "Votre balade commence sur <strong>les quais de Seine</strong> : dans un décor central du film mais surtout l'un des plus beaux points de vue de Paris. En longeant le fleuve, vous profitez des ponts, des péniches et de cette ambiance typiquement parisienne qui contraste avec la tension du film. Vous quittez ensuite les quais pour rejoindre <strong>les catacombes de Paris</strong>, lieu de tournage incontournable où le mystère du film rencontre l'un des sites les plus fascinants de la capitale. Après cette parenthèse souterraine, vous remontez vers la lumière pour terminer devant le majestueux <strong>Hôtel de Ville</strong>, un bâtiment emblématique et véritable scène à ciel ouvert. Une fin de parcours parfaite pour admirer l'architecture parisienne tout en retrouvant l'ambiance du film."
    },

     {
        id: "2",
        titre: "DaVinci Code",
        image: "images/DaVinci_code.jpg",
        video: "",
        heroImage: "https://tse3.mm.bing.net/th/id/OIP.cCVpKT-uRSBjTccM4c81gAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        herosubtitle: "Véritable plongée dans un labyrinthe de mystères, Da Vinci Code entraîne le spectateur dans une enquête haletante où l’histoire, l’art et les secrets cachés de l’humanité s’entremêlent dangereusement.",
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
        heroImage: "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2024/09/13133309/emily-in-paris-s4-1.jpg",
        herosubtitle: "Entre glamour, romance et chocs culturels, Emily in Paris suit les aventures pétillantes d’une jeune Américaine propulsée dans la capitale française, où chaque jour devient un mélange de défis professionnels et de découvertes enchantées.",
        texte: "Emily Jane Cooper, une Américaine de Chicago, déménage à Paris, en France, suite à une promotion dans sa «boîte». En effet, la société de marketing où elle travaille vient d'acquérir Savoir, une société du même domaine basée en France, à laquelle l'agence d'Emily souhaite apporter une touche américaine.",
        realisateur: "Darren Star",
        acteurs: [
            {acteur: "Lily Collins"},
            {acteur: "Philippine Leroy-Beaulieu"},
            {acteur: "Ashley Park"},
            {acteur: "Lucas Bravo"},
        ],
        pins: [
            {coords: [48.845263, 2.3448184], label: "Place de l'Estrapade"},
            {coords: [48.8631233, 2.3382205], label: "Place de Valois"},
            {coords: [48.8632276, 2.3360987], label: "Le Palais-Royal"},
            {coords: [48.8628402, 2.287142], label: "Café de l'Homme"},
            {coords: [48.8634697, 2.3135181], label: "Pont Alexandre III"},
        ],
        zoom: 16,
    },

    {
        id: "4",
        titre: "Le fabuleux destin d'Amélie Poulain",
        image: "images/Amelie_Poulain.jpg",
        video: "https://www.tf1info.fr/player/f067f2ae-0461-442a-8fd3-c5aa9af11c82/",
        heroImage: "https://wallpaperaccess.com/full/4062537.jpg",
        herosubtitle: "Amélie Poulain raconte l’histoire tendre et poétique d’une jeune femme qui transforme le quotidien en magie, un petit geste à la fois.",
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
        heroImage: "https://image.tmdb.org/t/p/original/ekCfR5ap8guLLmV9hMR9LCwPFoT.jpg",
        herosubtitle: "Paris, je t’aime est un voyage sensible à travers la capitale, où chaque quartier révèle une histoire d’amour unique et inattendue.",
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
        zoom: 16,
    },

    {
        id: "6",
        titre: "Mission Impossible : Fallout",
        image: "images/mission_impossible.jpg",
        heroImage: "https://th.bing.com/th/id/R.623370820ddf74e7bc2db07d6138d492?rik=7gaMUmo2j7J4oA&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-10%2fMission-Impossible-Fallout-HD-Desktop-Wallpaper-29486.jpg&ehk=Jpk225%2bwUtfSX%2fwlFM8lh4UIMzxa1VfwPAa1q3%2fffAg%3d&risl=&pid=ImgRaw&r=0",
        herosubtitle: "Dans Mission: Impossible – Fallout, Ethan Hunt affronte sa mission la plus explosive et dangereuse.",
        texte: "Ethan Hunt et l'équipe du FMI se joignent à August Walker, l'assassin de la CIA, pour éviter une catastrophe d'une ampleur extrême. Le marchand d'armes John Lark et un groupe de terroristes connus prévoient utiliser trois noyaux de plutonium pour une attaque nucléaire simultanée sur le Vatican, Jérusalem et La Mecque. Quand les armes disparaissent, Ethan et son équipe se retrouvent dans une course désespérée contre la montre pour les empêcher de tomber entre de mauvaises mains.",
        realisateur: "Christopher McQuarrie",
        acteurs: [
            {acteur: "Tom Cruise"},
            {acteur: "Rebecca Ferguson"},
            {acteur: "Simon Pegg"},
            {acteur: "Henry Cavill"},
            {acteur: "Ving Rhames"},
        ],
        pins: [
            {coords: [48.8666865, 2.3138946], label: "Le Grand Palais"},
            {coords: [48.8604503, 2.3578119], label: "Hôtel Soubise"},
            {coords: [48.8628402, 2.287142], label: "Place du Trocadéro"},
            {coords: [48.8404811, 2.3698977], label: "Quai d'Austerlitz"},
            {coords: [48.8737673, 2.2954441], label: "Arc de Triomphe"},
        ],
        zoom: 16,
    },

    {
        id: "7",
        titre: "Le diable s'habille en Prada",
        image: "images/Diable_habille_en_prada.jpg",
        heroImage: "https://media.ngroup.be/IMAGE/IMAGE-S1-00031/297554-le-diable-s-habille-en-prada.jpg",
        herosubtitle: "Le Diable s’habille en Prada propulse une débutante au cœur du monde de la mode, où l’ambition se paie au prix fort.",
        texte: "Son diplôme de journalisme en poche, Andrea débarque à New York où elle décroche un premier emploi en tant qu'assistante de la rédactrice en chef d'un prestigieux magazine de mode. Un job de rêve. En apparence seulement car sa boss est en réalité un monstre tyrannique et caractériel ; Andrea, qui envisage son nouveau travail comme un tremplin vers une illustre carrière de journaliste, décide d'endurer les sévices de sa diablesse de patronne.",
        realisateur: "David Frankel",
        acteurs: [
            {acteur: "Meryl Streep"},
            {acteur: "Anne Hathaway"},
            {acteur: "Emily Blunt"},
            {acteur: "Stanley Tucci"},
            {acteur: "Adrien Grenier"},
        ],
        pins: [
            {coords: [48.8511529, 2.3494884], label: "Paris Médiéval"},
            {coords: [48.8584075, 2.3375477], label: "Pont des Arts"},
            {coords: [48.8655715, 2.3212248], label: "Place de la Concorde"},
            {coords: [48.8657028, 2.2965064], label: "Palais Galliera"},
            {coords: [48.8676934, 2.307626], label: "Avenue Montaigne"},
            {coords: [48.866042, 2.3153496], label: "Petit Palais"},
        ],
        zoom: 16,
    },

    {
        id: "8",
        titre: "Moulin Rouge",
        image: "images/Moulin_Rouge.jpg",
        heroImage: "https://medias.moulinrouge.fr/app/uploads/2022/02/2010-moulin-rouge-at-night-scaled.jpg",
        herosubtitle: "Dans Moulin Rouge, un jeune artiste se retrouve emporté dans un tourbillon de passion et de lumière, où l’amour devient le numéro le plus périlleux de tous.",
        texte: "A la fin du XIXe siècle, dans le Paris de la Belle Epoque, Christian, un jeune poète désargenté, s'installe dans le quartier de Montmartre et découvre un univers où se mêlent sexe, drogue et french cancan, mais se rebelle contre ce milieu décadent en menant une vie de bohème. Il rêve d'écrire une grande pièce, et le peintre Henri de Toulouse-Lautrec est prêt à lui donner sa chance.",
        realisateur: "Baz Luhrmann",
        acteurs: [
            {acteur: "Nicole Kidman"},
            {acteur: "Natalie Mendoza"},
            {acteur: "Ewan McGregor"},
            {acteur: "Richard Roxburgh"},
            {acteur: "John Leguizamo"},
        ],
        pins: [
            {coords: [48.8841094, 2.3323564], label: "Moulin Rouge"},
            {coords: [48.8582599, 2.2945006], label: "Tour Eiffel"},
            {coords: [48.8867054, 2.3415715], label: "Montmartre"},
        ],
        zoom: 16,
    },

    {
        id: "9",
        titre: "Minuit à Paris",
        image: "images/Minuit_a_Paris.jpg",
        heroImage: "https://img.lemde.fr/2011/04/14/0/0/5616/3744/1440/960/60/0/ill_1507466_5f26_minuit-paris-allen.jpg",
        herosubtitle: "Dans Minuit à Paris, un rêveur en quête d’inspiration plonge chaque nuit dans un Paris secret, où les époques s’entrelacent pour réveiller ses plus grands désirs.",
        texte: "Gil Pender est un scénariste et romancier. Séjournant à Paris avec sa fiancée, Gil décide de visiter la ville seule. Une nuit, Gil rencontre un groupe de fêtards qui l'entraînent dans le passé pendant une nuit et lui font connaître les icônes de l'art et de la littérature. Plus Gil passe du temps avec ces héros culturels du passé, plus il est insatisfait du présent.",
        realisateur: "Woody Allen",
        acteurs: [
            {acteur: "Owen Wilson"},
            {acteur: "Rachel McAdams"},
            {acteur: "Marion Cotillard"},
            {acteur: "Léa Seydoux"},
            {acteur: "Tom Hiddleston"},
        ],
        pins: [
            {coords: [48.8497734, 2.340117], label: "Restaurant Polidor"},
            {coords: [48.847467, 2.3424636], label: "Cinéma du Panthéon"},
            {coords: [48.8525747, 2.3471123], label: "Shakespeare and Company"},
            {coords: [48.8446766, 2.3472341], label: "Montagne Sainte-Geneviève"},
            {coords: [48.8532085, 2.3546873], label: "Quai de Bourbon"},
        ],
        zoom: 16,
    },

    {
        id: "10",
        titre: "Inception",
        image: "images/Inception.jpg",
        heroImage: "https://www.odyssee-carriere.com/wp-content/uploads/2019/11/incpetion-3.jpg",
        herosubtitle: "Un maître voleur des rêves s’enfonce dans des labyrinthes mentaux vertigineux, où chaque idée volée peut tout faire basculer.",
        texte: "Dom Cobb est un voleur expérimenté dans l'art périlleux de l'extraction : sa spécialité consiste à s'approprier les secrets les plus précieux d'un individu, enfouis au plus profond de son subconscient, pendant qu'il rêve et que son esprit est particulièrement vulnérable. Très recherché pour ses talents dans l'univers trouble de l'espionnage industriel, Cobb est aussi devenu un fugitif traqué dans le monde entier. Cependant, une ultime mission pourrait lui permettre de retrouver sa vie d'avant.",
        realisateur: "Christopher Nolan",
        acteurs: [
            {acteur: "Leonardo DiCaprio"},
            {acteur: "Cillian Murphy"},
            {acteur: "Joseph Gordon-Levitt"},
            {acteur: "Tom Hardy"},
            {acteur: "Elliot Page"},
        ],
        pins: [
            {coords: [48.8470126, 2.3440371], label: "Université Panthéon-Sorbonne"},
            {coords: [48.8474472, 2.309954], label: "Café Debussy (Restaurant Il Russo"},
            {coords: [48.8557254, 2.2875477], label: "Pont de Bir-Hakeim"},
            {coords: [48.8657028, 2.2965064], label: "palais galliera"},
        ],
        zoom: 16,
    },

    {
        id: "11",
        titre: "Inglorious Basterds",
        image: "images/Inglorious_Basterds.jpg",
        heroImage: "https://img.lemde.fr/2009/05/11/0/0/600/400/1440/960/60/0/ill_1191648_cannes-basterds.jpg",
        herosubtitle: "Une équipe de soldats déterminés mène une guerre de l’ombre audacieuse, où chaque opération rapproche un peu plus d’un destin explosif pour le régime nazi.",
        texte: "Dans la France occupée de 1940, Shosanna Dreyfus assiste à l'exécution de sa famille tombée entre les mains du colonel nazi Hans Landa. Shosanna s'échappe de justesse et s'enfuit à Paris où elle se construit une nouvelle identité en devenant exploitante d'une salle de cinéma. Quelque part ailleurs en Europe, le lieutenant Aldo Raine forme un groupe de soldats juifs américains pour mener des actions punitives particulièrement sanglantes contre les nazis.",
        realisateur: "Quentin Tarantino",
        acteurs: [
            {acteur: "Christoph Waltz"},
            {acteur: "Brad Pitt"},
            {acteur: "Eli Roth"},
            {acteur: "Mélanie Laurent"},
            {acteur: "Diane Kruger"},
        ],
        pins: [
            {coords: [48.8958796, 2.3395348], label: "Bistrot La Renaissance"},
            {coords: [48.8348685, 2.3296415], label: "Chez Maurice"},
        ],
        zoom: 16,
    },

    {
        id: "12",
        titre: "fear the Walking Dead",
        image: "images/Fear_the_walkingdead.jpg",
        heroImage: "https://gonzomusic.fr/files/fear-walking-dead-season-2-images-details.jpg",
        herosubtitle: "Sur une terre ravagée par l’effondrement, des survivants en quête d’espoir affrontent des choix impossibles où chaque pas peut être le dernier.",
        texte: "Fear The Walking Dead est un drame osé qui s’intéresse au début de l’apocalypse zombie au travers d’une famille brisée. Se passant dans une ville où l’on vient pour fuir, pour cacher des secrets et pour enterrer son passé, une mystérieuse épidémie menace le peu de stabilité que Madison Clark, une conseillère dans un lycée, et Travis Manawa, un professeur d’anglais, ont réussi à instaurer. ",
        realisateur: "Adam Davidson",
        acteurs: [
            {acteur: "Alycia Debman-Carey"},
            {acteur: "Lennie James"},
            {acteur: "Colman Domingo"},
            {acteur: "Kim Dickens"},
            {acteur: "Frank Dillane"},
        ],
        pins: [
            {coords: [48.8499618, 2.3631985], label: "Club Bonnie"},
            {coords: [48.8557254, 2.2875477], label: "Pont Bir-Hakeim"},
            {coords: [48.8777457, 2.4082584], label: "métro Porte des Lilas"},
            {coords: [48.8784656, 2.3376312], label: "Place Saint-George"},
            {coords: [48.8626847, 2.2713928], label: "Rue Eugène Labiche"},
        ],
        zoom: 16,
    },

    {
        id: "13",
        titre: "Killing Eve",
        image: "images/Killing_eve.jpg",
        heroImage: "https://thumb.canalplus.pro/http/unsafe/1440x810/filters:quality(80)/img-hapi.canalplus.pro:80/ServiceImage/ImageID/104555985",
        herosubtitle: "Une agente brillante et une tueuse insaisissable s’engagent dans un jeu dangereux où l’obsession devient aussi captivante que mortelle.",
        texte: "Eve Polastri est une agent du MI-5 chargée d'enquêter et d'arrêter la terrible et talentueuse Villanelle, une tueuse psychopathe. Mais les deux femmes vont commencer à être obsédées l'une par l'autre. Commence alors un sombre jeu du chat et de la souris.",
        realisateur: "Damon Thomas",
        acteurs: [
            {acteur: "Jodie Comer"},
            {acteur: "Sandra Oh"},
            {acteur: "Fiona Shaw"},
            {acteur: "Kim Bodnia"},
            {acteur: "Owen Mcdonnel"},
        ],
        pins: [
            {coords: [48.8554872, 2.3367441], label: "Rue de Seine"},
            {coords: [48.8545089, 2.3364351], label: "Rue de l'Echaudé"},
            {coords: [48.8553897, 2.3378192], label: "Le Balto"},
            {coords: [48.8696591, 2.3606541], label: "Rue de Lancry"},
            {coords: [48.8689561, 2.3671691], label: "Canal Saint-Martin"},
        ],
        zoom: 16,
    },

    {
        id: "14",
        titre: "Lupin",
        image: "images/lupin.jpg",
        heroImage: "https://medias.gazette-drouot.com/prod/medias/mediatheque/69604.jpg",
        herosubtitle: "Un maître du déguisement mène un jeu d’ombre et de lumière pour venger son père, défiant Paris et ceux qui croient pouvoir le piéger.",
        texte: "En 1995, le jeune Assane Diop est bouleversé par le suicide de son père, accusé d'un vol qu'il n'a pas commis. Vingt-cinq ans plus tard, Assane organise le vol d'un collier ayant appartenu à Marie-Antoinette d'Autriche. Le bijou, aujourd'hui exposé au musée du Louvre, appartenait à la riche famille Pellegrini. Il veut se venger de cette famille ayant accusé à tort son père, en s'inspirant de son personnage fétiche : le « gentleman cambrioleur » Arsène Lupin",
        realisateur: "Louis Leterrier",
        acteurs: [
            {acteur: "Omar Sy"},
            {acteur: "Ludivine Sagnier"},
            {acteur: "Clotilde Hesme"},
            {acteur: "Hervé Pierre"},
            {acteur: "Soufiane Guerrab"},
        ],
        pins: [
            {coords: [48.8613223, 2.3354573], label: "Louvre"},
            {coords: [48.8868058, 2.3430153], label: "Sacré Coeur"},
            {coords: [48.907471, 2.3364783], label: "Les puces de Saint Ouen"},
            {coords: [48.8415535, 2.3368524], label: "Jardin du Luxembourg"},
            {coords: [48.8643028, 2.3305559], label: "Rue de Rivoli"},
        ],
        zoom: 16,
    },

    {
        id: "15",
        titre: "Gossip Girl",
        image: "images/Gossip_girl.jpg",
        heroImage: "https://media.gqmagazine.fr/photos/611b70d5fc0bc6c36d332639/16:9/w_2560%2Cc_limit/1783359.jpg-r_1920_1080-f_jpg-q_x-xxyxx.jpg",
        herosubtitle: "Dans un monde où luxe et secrets règnent en maître, chaque rumeur peut tout faire basculer pour l’élite de Manhattan.",
        texte: "La vie de la jeunesse dorée des élèves de deux écoles privées new-yorkaises, vue à travers les yeux ironiques d'une mystérieuse bloggeuse surnommée Gossip Girl. Entre amour et amitié, chacun tente de tirer son épingle du jeu, mais rien n'est jamais simple derrière des apparences parfaites",
        realisateur: "Joshua Schwartz",
        acteurs: [
            {acteur: "Blake Lively"},
            {acteur: "Leighton Meester"},
            {acteur: "Penn Badgley"},
            {acteur: "Chace Crawford"},
            {acteur: "Ed Westwick"},
        ],
        pins: [
            {coords: [48.8677391, 2.2936393], label: "Musée Baccarat"},
            {coords: [48.860006, 2.3252248], label: "Musée d'Orsay"},
            {coords: [48.8546118, 2.3547285], label: "Café Louis Phillipe"},
            {coords: [48.873887, 2.3290507], label: "Printemps Haussmann"},
            {coords: [48.8584075, 2.3375477], label: "Pont des Arts"},
        ],
        zoom: 16,
    },

    {
        id: "16",
        titre: "Dix pour cent",
        image: "images/dix-pour-cent.jpg",
        heroImage: "https://bullesdeculture.com/bdc-content/uploads/2015/10/DIXPOURCENT-affiche-e1742049491203-660x330.jpg",
        herosubtitle: "Au cœur d’une agence où tout peut déraper, les agents jonglent entre crises de stars et urgences improbables pour sauver l’image de leurs talents.",
        texte: "Chaque jour, Andréa, Mathias, Gabriel et Arlette, agents artistiques et associés principaux de l’agence artistique ASK (l’agence Samuel-Kerr), jonglent avec de délicates situations et défendent leur vision du métier d'acteur. Ils mêlent savamment art et business, quitte à manipuler les gens du métier pour leur faire accepter leur vision.",
        realisateur: "Danièle Thompson",
        acteurs: [
            {acteur: "Camille Cottin"},
            {acteur: "Thibault de Montalembert"},
            {acteur: "Grégory Montel"},
            {acteur: "Liliane Rovère"},
            {acteur: "Fanny Sidney"},
        ],
        pins: [
            {coords: [48.8619915, 2.339735], label: "Extérieur Agence ASK"},
            {coords: [48.8705334, 2.3476486], label: "Le Grand Rex"},
            {coords: [48.8636181, 2.3353282], label: "Brasserie du Louvre"},
            {coords: [48.8655715, 2.3212248], label: "Place de la Concorde"},
            {coords: [48.8648492, 2.3384224], label: "Galerie de Valois"},
        ],
        zoom: 16,
    },

    {
        id: "17",
        titre: "Family Business",
        image: "images/family-business.jpg",
        heroImage: "https://www.doitinparis.com/files/2019/culture/cine-series/series/06/family-business/family-business-serie-netflix.jpg",
        herosubtitle: "Quand une famille bancale transforme une idée folle en business improbable, chaque plan dérape en aventures aussi risquées qu’hilarantes.",
        texte: "Apprenant que le cannabis sera légalisé, Joseph, un entrepreneur en faillite décide avec l'aide de sa famille et de ses amis de transformer la boucherie casher de son père et d'ouvrir le premier coffee shop de marijuana en France.",
        realisateur: "Igor Gotesman",
        acteurs: [
            {acteur: "Gérard Darmon"},
            {acteur: "Jonathan Cohen"},
            {acteur: "Julia Piaton"},
            {acteur: "Liliane Rovère"},
            {acteur: "Louise Coldefy"},
        ],
        pins: [
            {coords: [48.8603823, 2.360742], label: "Le Marais"},
        ],
        zoom: 16,
    },

    {
        id: "18",
        titre: "Modern Family",
        image: "images/modern-family.jpg",
        heroImage: "https://www.looper.com/img/gallery/modern-family-scenes-that-had-fans-bawling/the-family-bids-farewell-with-one-last-selfie-in-the-finale-part-two-1695419598.jpg",
        herosubtitle: "Entre amour, chaos et situations improbables, une famille pas vraiment ordinaire transforme chaque jour en aventure tendre et hilarante.",
        texte: "La série montre les trois foyers de la famille américaine Pritchett, sous la forme de documentaire. Jay Pritchett, le père, s'est remarié à Gloria Delgado, une femme colombienne bien plus jeune que lui qui a un fils, Manny. De son premier mariage, Jay a eu Claire, mariée à Phil Dunphy avec qui elle a trois enfants, Haley, Alex et Luke, et Mitchell, marié à Cameron. La série commence alors que Mitchell et Cameron reviennent du Viet Nam où ils ont adopté une fillette de huit mois, Lily.",
        realisateur: "Steven Levitan",
        acteurs: [
            {acteur: "Sofía Vergara"},
            {acteur: "Ed O'Neill"},
            {acteur: "Julie Bowen"},
            {acteur: "Ty Burrell"},
            {acteur: "Jesse Tyler Ferguson"},
            {acteur: "Eric Stonestreet"},
        ],
        pins: [
            {coords: [48.8673446, 2.3653087], label: "Hôtel Crowne Plaza"},
            {coords: [48.8652214, 2.3618083], label: "Quartier du Temple"},
            {coords: [48.8603823, 2.360742], label: "Le Marais"},
            {coords: [48.8547614, 2.3552119], label: "Bistrot Chez Julien"},
            {coords: [48.8530896, 2.3533138], label: "La Brasserie de l'Isle Saint-Louis"},
        ],
        zoom: 16,
    },

    {
        id: "19",
        titre: "Dynastie",
        image: "images/dynastie.jpg",
        heroImage: "https://fr.web.img3.acsta.net/newsv7/20/05/27/11/55/36464500.jpg",
        herosubtitle: "Au sein d’un empire où pouvoir, luxe et trahisons s’entremêlent, chaque rivalité peut faire exploser l’équilibre fragile des Carrington.",
        texte: "Fallon Carrington revient au domicile familial dans le but d'être choisie comme nouvelle PDG de la société de son père. Mais une fois arrivée, elle a la mauvaise surprise de découvrir que son père est fiancé à Cristal Flores, une jeune femme latino travaillant comme secrétaire pour la société.",
        realisateur: "Stephanie Savage",
        acteurs: [
            {acteur: "Elizabeth Gillies"},
            {acteur: "Robert Christopher Riley"},
            {acteur: "Sam Adegoke"},
            {acteur: "Rafael de La Fuente"},
            {acteur: "Grant Show"},
            {acteur: "Alan Dale"},
        ],
        pins: [
            {coords: [48.8707573, 2.3053312], label: "Champs Elysées"},
            {coords: [48.8693921, 2.3085133], label: "Hôtel d'Espeyran"},
            {coords: [48.8681477, 2.3121933], label: "Métro Franklin D. Roosevelt"},
            {coords: [48.8660439, 2.3253041], label: "Rue de Rivoli"},
            {coords: [48.851774, 2.3500794], label: "Pont de Montebello"},
        ],
        zoom: 16,
    },

    {
        id: "20",
        titre: "The Good Place",
        image: "images/the-good-place.jpg",
        heroImage: "https://cache.marieclaire.fr/data/photo/w1200_h630_c17/5m/lecons-vies-the-good-place.jpg",
        herosubtitle: "Propulsée dans un paradis pas si parfait, une femme imparfaite doit apprendre à devenir meilleure pour éviter que tout l’au-delà ne s’effondre avec elle.",
        texte: "À sa mort, Eleanor Shellstrop se retrouve au Bon Endroit [N 1], là où seules les personnes exceptionnelles aux âmes pures arrivent, les autres étant envoyées au Mauvais Endroit. Chaque nouvel arrivant est logé dans une maison idéale, aménagée selon ses goûts, puis fait connaissance avec son âme sœur. Mais en réalité, Eleanor n'est pas vraiment une bonne personne et elle comprend qu'elle a été envoyée au Bon Endroit par erreur. Peu après son arrivée, des choses étranges se produisent.",
        realisateur: "Rebecca Asher",
        acteurs: [
            {acteur: "Kristen Bell"},
            {acteur: "Ted Danson"},
            {acteur: "Jameela Jamil"},
            {acteur: "William Jackson Harper"},
            {acteur: "Manny Jacinto"},
            {acteur: "D'Arcy Carden"},
        ],
        pins: [
            {coords: [48.8542327, 2.33321], label: "Les Deux Magots"},
            {coords: [48.8584075, 2.3375477], label: "Pont des Arts"},
            {coords: [48.8865274, 2.3408043], label: "Place du Tertre"},
            {coords: [48.8882277, 2.3389391], label: "Rue de l'Abreuvoir"},
            {coords: [48.8868058, 2.3430153], label: "Basilique du Sacré-Coeur"},
        ],
        zoom: 16,
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

    <section class="hero" style="background-image: url('${carte.heroImage || carte.image}');">
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
    <h3>Réalisateur/Réalisatrice : </h3>
    <p>${carte.realisateur}</p>
    </div>
    <div id="act">
    <h3>Cast : </h3>
    <ul>${acteurs}</ul>
    </div>
    </div>
    </div>
    <div class="vidéo">
    <iframe width="420" height="315"
    src="${carte.video}">
    </iframe>
    </div>
    <div class="map-lieu">
    <div id="labels">
    <h3>Lieux de tournage : </h3>
    <ul>${labels}</ul>
    </div>
    <div id="map" style="width:400px;height:300px;margin-top:20px;border-radius:10px;"></div>
    </div>
    ${carte.itineraire ? `
    <div class="itineraire-section">
        <div class="itineraire-box">
            <div class="itineraire-header">
                <h3>Votre balade parisienne</h3>
                <span class="duration-badge">Environ 2h30</span>
            </div>
            <p class="itineraire-text">${carte.itineraire}</p>
        </div>
        <div class="lieux-cliquables">
            <h3>Lieux a visiter :</h3>
            <ul>
                ${carte.pins.map((pin, index) => `
                    <li>${index + 1}. ${pin.label}</li>
                `).join('')}
            </ul>
        </div>
    </div>
    ` : ''}
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








