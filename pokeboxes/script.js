///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
//     _____      _     __ ____                          _             _______         _             _               //
//    |  __ \    | |   /_/|  _ \                        | |           |__   __|       | |           | |              //
//    | |__) |__ | | _____| |_) | _____  _____  ___     | |__  _   _     | |_   _  ___| | _____ _ __| |_ ___ ___     //
//    |  ___/ _ \| |/ / _ \  _ < / _ \ \/ / _ \/ __|    | '_ \| | | |    | | | | |/ __| |/ / _ \ '__| __/ __/ __|    //
//    | |  | (_) |   <  __/ |_) | (_) >  <  __/\__ \    | |_) | |_| |    | | |_| | (__|   <  __/ |  | || (__\__ \    //
//    |_|   \___/|_|\_\___|____/ \___/_/\_\___||___/    |_.__/ \__, |    |_|\__,_|\___|_|\_\___|_|   \__\___|___/    //
//                                                              __/ |                                                //
//                                                             |___/                                                 //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// --------------- INITIALIZATION --------------- //


"use strict";


// --------------- GLOBAL VARIABLES --------------- //


//how many pokemon are there currently? remember to add new pokemon to tables as well in the HTML document!
var TOTAL_POKEMON = 807;

//contains all pokemon names
var POKEMON_INFO = ["Bulbasaur",
                    "Ivysaur",
                    "Venusaur",
                    "Charmander",
                    "Charmeleon",
                    "Charizard",
                    "Squirtle",
                    "Wartortle",
                    "Blastoise",
                    "Caterpie",
                    "Metapod",
                    "Butterfree",
                    "Weedle",
                    "Kakuna",
                    "Beedrill",
                    "Pidgey",
                    "Pidgeotto",
                    "Pidgeot",
                    "Rattata",
                    "Raticate",
                    "Spearow",
                    "Fearow",
                    "Ekans",
                    "Arbok",
                    "Pikachu",
                    "Raichu",
                    "Sandshrew",
                    "Sandslash",
                    "Nidoranf",
                    "Nidorina",
                    "Nidoqueen",
                    "Nidoranm",
                    "Nidorino",
                    "Nidoking",
                    "Clefairy",
                    "Clefable",
                    "Vulpix",
                    "Ninetales",
                    "Jigglypuff",
                    "Wigglytuff",
                    "Zubat",
                    "Golbat",
                    "Oddish",
                    "Gloom",
                    "Vileplume",
                    "Paras",
                    "Parasect",
                    "Venonat",
                    "Venomoth",
                    "Diglett",
                    "Dugtrio",
                    "Meowth",
                    "Persian",
                    "Psyduck",
                    "Golduck",
                    "Mankey",
                    "Primeape",
                    "Growlithe",
                    "Arcanine",
                    "Poliwag",
                    "Poliwhirl",
                    "Poliwrath",
                    "Abra",
                    "Kadabra",
                    "Alakazam",
                    "Machop",
                    "Machoke",
                    "Machamp",
                    "Bellsprout",
                    "Weepinbell",
                    "Victreebel",
                    "Tentacool",
                    "Tentacruel",
                    "Geodude",
                    "Graveler",
                    "Golem",
                    "Ponyta",
                    "Rapidash",
                    "Slowpoke",
                    "Slowbro",
                    "Magnemite",
                    "Magneton",
                    "Farfetchd",
                    "Doduo",
                    "Dodrio",
                    "Seel",
                    "Dewgong",
                    "Grimer",
                    "Muk",
                    "Shellder",
                    "Cloyster",
                    "Gastly",
                    "Haunter",
                    "Gengar",
                    "Onix",
                    "Drowzee",
                    "Hypno",
                    "Krabby",
                    "Kingler",
                    "Voltorb",
                    "Electrode",
                    "Exeggcute",
                    "Exeggutor",
                    "Cubone",
                    "Marowak",
                    "Hitmonlee",
                    "Hitmonchan",
                    "Lickitung",
                    "Koffing",
                    "Weezing",
                    "Rhyhorn",
                    "Rhydon",
                    "Chansey",
                    "Tangela",
                    "Kangaskhan",
                    "Horsea",
                    "Seadra",
                    "Goldeen",
                    "Seaking",
                    "Staryu",
                    "Starmie",
                    "MrMime",
                    "Scyther",
                    "Jynx",
                    "Electabuzz",
                    "Magmar",
                    "Pinsir",
                    "Tauros",
                    "Magikarp",
                    "Gyarados",
                    "Lapras",
                    "Ditto",
                    "Eevee",
                    "Vaporeon",
                    "Jolteon",
                    "Flareon",
                    "Porygon",
                    "Omanyte",
                    "Omastar",
                    "Kabuto",
                    "Kabutops",
                    "Aerodactyl",
                    "Snorlax",
                    "Articuno",
                    "Zapdos",
                    "Moltres",
                    "Dratini",
                    "Dragonair",
                    "Dragonite",
                    "Mewtwo",
                    "Mew",
                    "Chikorita",
                    "Bayleef",
                    "Meganium",
                    "Cyndaquil",
                    "Quilava",
                    "Typhlosion",
                    "Totodile",
                    "Croconaw",
                    "Feraligatr",
                    "Sentret",
                    "Furret",
                    "Hoothoot",
                    "Noctowl",
                    "Ledyba",
                    "Ledian",
                    "Spinarak",
                    "Ariados",
                    "Crobat",
                    "Chinchou",
                    "Lanturn",
                    "Pichu",
                    "Cleffa",
                    "Igglybuff",
                    "Togepi",
                    "Togetic",
                    "Natu",
                    "Xatu",
                    "Mareep",
                    "Flaaffy",
                    "Ampharos",
                    "Bellossom",
                    "Marill",
                    "Azumarill",
                    "Sudowoodo",
                    "Politoed",
                    "Hoppip",
                    "Skiploom",
                    "Jumpluff",
                    "Aipom",
                    "Sunkern",
                    "Sunflora",
                    "Yanma",
                    "Wooper",
                    "Quagsire",
                    "Espeon",
                    "Umbreon",
                    "Murkrow",
                    "Slowking",
                    "Misdreavus",
                    "Unown",
                    "Wobbuffet",
                    "Girafarig",
                    "Pineco",
                    "Forretress",
                    "Dunsparce",
                    "Gligar",
                    "Steelix",
                    "Snubbull",
                    "Granbull",
                    "Qwilfish",
                    "Scizor",
                    "Shuckle",
                    "Heracross",
                    "Sneasel",
                    "Teddiursa",
                    "Ursaring",
                    "Slugma",
                    "Magcargo",
                    "Swinub",
                    "Piloswine",
                    "Corsola",
                    "Remoraid",
                    "Octillery",
                    "Delibird",
                    "Mantine",
                    "Skarmory",
                    "Houndour",
                    "Houndoom",
                    "Kingdra",
                    "Phanpy",
                    "Donphan",
                    "Porygon2",
                    "Stantler",
                    "Smeargle",
                    "Tyrogue",
                    "Hitmontop",
                    "Smoochum",
                    "Elekid",
                    "Magby",
                    "Miltank",
                    "Blissey",
                    "Raikou",
                    "Entei",
                    "Suicune",
                    "Larvitar",
                    "Pupitar",
                    "Tyranitar",
                    "Lugia",
                    "Ho-Oh",
                    "Celebi",
                    "Treecko",
                    "Grovyle",
                    "Sceptile",
                    "Torchic",
                    "Combusken",
                    "Blaziken",
                    "Mudkip",
                    "Marshtomp",
                    "Swampert",
                    "Poochyena",
                    "Mightyena",
                    "Zigzagoon",
                    "Linoone",
                    "Wurmple",
                    "Silcoon",
                    "Beautifly",
                    "Cascoon",
                    "Dustox",
                    "Lotad",
                    "Lombre",
                    "Ludicolo",
                    "Seedot",
                    "Nuzleaf",
                    "Shiftry",
                    "Taillow",
                    "Swellow",
                    "Wingull",
                    "Pelipper",
                    "Ralts",
                    "Kirlia",
                    "Gardevoir",
                    "Surskit",
                    "Masquerain",
                    "Shroomish",
                    "Breloom",
                    "Slakoth",
                    "Vigoroth",
                    "Slaking",
                    "Nincada",
                    "Ninjask",
                    "Shedinja",
                    "Whismur",
                    "Loudred",
                    "Exploud",
                    "Makuhita",
                    "Hariyama",
                    "Azurill",
                    "Nosepass",
                    "Skitty",
                    "Delcatty",
                    "Sableye",
                    "Mawile",
                    "Aron",
                    "Lairon",
                    "Aggron",
                    "Meditite",
                    "Medicham",
                    "Electrike",
                    "Manectric",
                    "Plusle",
                    "Minun",
                    "Volbeat",
                    "Illumise",
                    "Roselia",
                    "Gulpin",
                    "Swalot",
                    "Carvanha",
                    "Sharpedo",
                    "Wailmer",
                    "Wailord",
                    "Numel",
                    "Camerupt",
                    "Torkoal",
                    "Spoink",
                    "Grumpig",
                    "Spinda",
                    "Trapinch",
                    "Vibrava",
                    "Flygon",
                    "Cacnea",
                    "Cacturne",
                    "Swablu",
                    "Altaria",
                    "Zangoose",
                    "Seviper",
                    "Lunatone",
                    "Solrock",
                    "Barboach",
                    "Whiscash",
                    "Corphish",
                    "Crawdaunt",
                    "Baltoy",
                    "Claydol",
                    "Lileep",
                    "Cradily",
                    "Anorith",
                    "Armaldo",
                    "Feebas",
                    "Milotic",
                    "Castform",
                    "Kecleon",
                    "Shuppet",
                    "Banette",
                    "Duskull",
                    "Dusclops",
                    "Tropius",
                    "Chimecho",
                    "Absol",
                    "Wynaut",
                    "Snorunt",
                    "Glalie",
                    "Spheal",
                    "Sealeo",
                    "Walrein",
                    "Clamperl",
                    "Huntail",
                    "Gorebyss",
                    "Relicanth",
                    "Luvdisc",
                    "Bagon",
                    "Shelgon",
                    "Salamence",
                    "Beldum",
                    "Metang",
                    "Metagross",
                    "Regirock",
                    "Regice",
                    "Registeel",
                    "Latias",
                    "Latios",
                    "Kyogre",
                    "Groudon",
                    "Rayquaza",
                    "Jirachi",
                    "Deoxys",
                    "Turtwig",
                    "Grotle",
                    "Torterra",
                    "Chimchar",
                    "Monferno",
                    "Infernape",
                    "Piplup",
                    "Prinplup",
                    "Empoleon",
                    "Starly",
                    "Staravia",
                    "Staraptor",
                    "Bidoof",
                    "Bibarel",
                    "Kricketot",
                    "Kricketune",
                    "Shinx",
                    "Luxio",
                    "Luxray",
                    "Budew",
                    "Roserade",
                    "Cranidos",
                    "Rampardos",
                    "Shieldon",
                    "Bastiodon",
                    "Burmy",
                    "Wormadam",
                    "Mothim",
                    "Combee",
                    "Vespiquen",
                    "Pachirisu",
                    "Buizel",
                    "Floatzel",
                    "Cherubi",
                    "Cherrim",
                    "Shellos",
                    "Gastrodon",
                    "Ambipom",
                    "Drifloon",
                    "Drifblim",
                    "Buneary",
                    "Lopunny",
                    "Mismagius",
                    "Honchkrow",
                    "Glameow",
                    "Purugly",
                    "Chingling",
                    "Stunky",
                    "Skuntank",
                    "Bronzor",
                    "Bronzong",
                    "Bonsly",
                    "MimeJr",
                    "Happiny",
                    "Chatot",
                    "Spiritomb",
                    "Gible",
                    "Gabite",
                    "Garchomp",
                    "Munchlax",
                    "Riolu",
                    "Lucario",
                    "Hippopotas",
                    "Hippowdon",
                    "Skorupi",
                    "Drapion",
                    "Croagunk",
                    "Toxicroak",
                    "Carnivine",
                    "Finneon",
                    "Lumineon",
                    "Mantyke",
                    "Snover",
                    "Abomasnow",
                    "Weavile",
                    "Magnezone",
                    "Lickilicky",
                    "Rhyperior",
                    "Tangrowth",
                    "Electivire",
                    "Magmortar",
                    "Togekiss",
                    "Yanmega",
                    "Leafeon",
                    "Glaceon",
                    "Gliscor",
                    "Mamoswine",
                    "Porygon-Z",
                    "Gallade",
                    "Probopass",
                    "Dusknoir",
                    "Froslass",
                    "Rotom",
                    "Uxie",
                    "Mesprit",
                    "Azelf",
                    "Dialga",
                    "Palkia",
                    "Heatran",
                    "Regigigas",
                    "Giratina",
                    "Cresselia",
                    "Phione",
                    "Manaphy",
                    "Darkrai",
                    "Shaymin",
                    "Arceus",
                    "Victini",
                    "Snivy",
                    "Servine",
                    "Serperior",
                    "Tepig",
                    "Pignite",
                    "Emboar",
                    "Oshawott",
                    "Dewott",
                    "Samurott",
                    "Patrat",
                    "Watchog",
                    "Lillipup",
                    "Herdier",
                    "Stoutland",
                    "Purrloin",
                    "Liepard",
                    "Pansage",
                    "Simisage",
                    "Pansear",
                    "Simisear",
                    "Panpour",
                    "Simipour",
                    "Munna",
                    "Musharna",
                    "Pidove",
                    "Tranquill",
                    "Unfezant",
                    "Blitzle",
                    "Zebstrika",
                    "Roggenrola",
                    "Boldore",
                    "Gigalith",
                    "Woobat",
                    "Swoobat",
                    "Drilbur",
                    "Excadrill",
                    "Audino",
                    "Timburr",
                    "Gurdurr",
                    "Conkeldurr",
                    "Tympole",
                    "Palpitoad",
                    "Seismitoad",
                    "Throh",
                    "Sawk",
                    "Sewaddle",
                    "Swadloon",
                    "Leavanny",
                    "Venipede",
                    "Whirlipede",
                    "Scolipede",
                    "Cottonee",
                    "Whimsicott",
                    "Petilil",
                    "Lilligant",
                    "Basculin",
                    "Sandile",
                    "Krokorok",
                    "Krookodile",
                    "Darumaka",
                    "Darmanitan",
                    "Maractus",
                    "Dwebble",
                    "Crustle",
                    "Scraggy",
                    "Scrafty",
                    "Sigilyph",
                    "Yamask",
                    "Cofagrigus",
                    "Tirtouga",
                    "Carracosta",
                    "Archen",
                    "Archeops",
                    "Trubbish",
                    "Garbodor",
                    "Zorua",
                    "Zoroark",
                    "Minccino",
                    "Cinccino",
                    "Gothita",
                    "Gothorita",
                    "Gothitelle",
                    "Solosis",
                    "Duosion",
                    "Reuniclus",
                    "Ducklett",
                    "Swanna",
                    "Vanillite",
                    "Vanillish",
                    "Vanilluxe",
                    "Deerling",
                    "Sawsbuck",
                    "Emolga",
                    "Karrablast",
                    "Escavalier",
                    "Foongus",
                    "Amoonguss",
                    "Frillish",
                    "Jellicent",
                    "Alomomola",
                    "Joltik",
                    "Galvantula",
                    "Ferroseed",
                    "Ferrothorn",
                    "Klink",
                    "Klang",
                    "Klinklang",
                    "Tynamo",
                    "Eelektrik",
                    "Eelektross",
                    "Elgyem",
                    "Beheeyem",
                    "Litwick",
                    "Lampent",
                    "Chandelure",
                    "Axew",
                    "Fraxure",
                    "Haxorus",
                    "Cubchoo",
                    "Beartic",
                    "Cryogonal",
                    "Shelmet",
                    "Accelgor",
                    "Stunfisk",
                    "Mienfoo",
                    "Mienshao",
                    "Druddigon",
                    "Golett",
                    "Golurk",
                    "Pawniard",
                    "Bisharp",
                    "Bouffalant",
                    "Rufflet",
                    "Braviary",
                    "Vullaby",
                    "Mandibuzz",
                    "Heatmor",
                    "Durant",
                    "Deino",
                    "Zweilous",
                    "Hydreigon",
                    "Larvesta",
                    "Volcarona",
                    "Cobalion",
                    "Terrakion",
                    "Virizion",
                    "Tornadus",
                    "Thundurus",
                    "Reshiram",
                    "Zekrom",
                    "Landorus",
                    "Kyurem",
                    "Keldeo",
                    "Meloetta",
                    "Genesect",
                    "Chespin",
                    "Quilladin",
                    "Chesnaught",
                    "Fennekin",
                    "Braixen",
                    "Delphox",
                    "Froakie",
                    "Frogadier",
                    "Greninja",
                    "Bunnelby",
                    "Diggersby",
                    "Fletchling",
                    "Fletchinder",
                    "Talonflame",
                    "Scatterbug",
                    "Spewpa",
                    "Vivillon",
                    "Litleo",
                    "Pyroar",
                    "Flabebe",
                    "Floette",
                    "Florges",
                    "Skiddo",
                    "Gogoat",
                    "Pancham",
                    "Pangoro",
                    "Furfrou",
                    "Espurr",
                    "Meowstic",
                    "Honedge",
                    "Doublade",
                    "Aegislash",
                    "Spritzee",
                    "Aromatisse",
                    "Swirlix",
                    "Slurpuff",
                    "Inkay",
                    "Malamar",
                    "Binacle",
                    "Barbaracle",
                    "Skrelp",
                    "Dragalge",
                    "Clauncher",
                    "Clawitzer",
                    "Helioptile",
                    "Heliolisk",
                    "Tyrunt",
                    "Tyrantrum",
                    "Amaura",
                    "Aurorus",
                    "Sylveon",
                    "Hawlucha",
                    "Dedenne",
                    "Carbink",
                    "Goomy",
                    "Sliggoo",
                    "Goodra",
                    "Klefki",
                    "Phantump",
                    "Trevenant",
                    "Pumpkaboo",
                    "Gourgeist",
                    "Bergmite",
                    "Avalugg",
                    "Noibat",
                    "Noivern",
                    "Xerneas",
                    "Yveltal",
                    "Zygarde",
                    "Diancie",
                    "Hoopa",
                    "Volcanion",
                    "Rowlet",
                    "Dartrix",
                    "Decidueye",
                    "Litten",
                    "Torracat",
                    "Incineroar",
                    "Popplio",
                    "Brionne",
                    "Primarina",
                    "Pikipek",
                    "Trumbeak",
                    "Toucannon",
                    "Yungoos",
                    "Gumshoos",
                    "Grubbin",
                    "Charjabug",
                    "Vikavolt",
                    "Crabrawler",
                    "Crabominable",
                    "Oricorio",
                    "Cutiefly",
                    "Ribombee",
                    "Rockruff",
                    "Lycanroc",
                    "Wishiwashi",
                    "Mareanie",
                    "Toxapex",
                    "Mudbray",
                    "Mudsdale",
                    "Dewpider",
                    "Araquanid",
                    "Fomantis",
                    "Lurantis",
                    "Morelull",
                    "Shiinotic",
                    "Salandit",
                    "Salazzle",
                    "Stufful",
                    "Bewear",
                    "Bounsweet",
                    "Steenee",
                    "Tsareena",
                    "Comfey",
                    "Oranguru",
                    "Passimian",
                    "Wimpod",
                    "Golisopod",
                    "Sandygast",
                    "Palossand",
                    "Pyukumuku",
                    "TypeNull",
                    "Silvally",
                    "Minior",
                    "Komala",
                    "Turtonator",
                    "Togedemaru",
                    "Mimikyu",
                    "Bruxish",
                    "Drampa",
                    "Dhelmise",
                    "Jangmo-o",
                    "Hakamo-o",
                    "Kommo-o",
                    "TapuKoko",
                    "TapuLele",
                    "TapuBulu",
                    "TapuFini",
                    "Cosmog",
                    "Cosmoem",
                    "Solgaleo",
                    "Lunala",
                    "Nihilego",
                    "Buzzwole",
                    "Pheromosa",
                    "Xurkitree",
                    "Celesteela",
                    "Kartana",
                    "Guzzlord",
                    "Necrozma",
                    "Magearna",
                    "Marshadow",
                    "Poipole",
                    "Naganadel",
                    "Stakataka",
                    "Blacephalon",
                    "Zeraora"];

//serebii link (before number, after number)
var SEREBII_LINK = ["https://www.serebii.net/pokedex-sm/", ".shtml"];

//pokemon image file directories (file extension, normal, shiny)
var IMAGE_DIR = [".gif", "url('images/3d-128/", "url('images/3d-128-shiny/"];

//codes for SEED, POKEMON_DATA, and classes
var S = ["0", "1", "2", "#",
         "none", "have", "have-shiny", "prefix"];

//contains all pokemon checkbox state data
var POKEMON_DATA = [];

//fill POKEMON_DATA with none's
var ii = 0;
for (ii = 0; ii <= TOTAL_POKEMON; ii += 1) {
    if (ii === 0) {
        POKEMON_DATA.push(S[7]);
    } else {
        POKEMON_DATA.push(S[4]);
    }
}

//string of numbers to save all checkbox states (input/output)
var SEED = "";


// --------------- FUNCTIONS --------------- //


//turn 1 into 001
function zeropad(n) {
    var m = "";
    if (n < 10) {
        m = "00" + n.toString();
        
    } else if (n < 100) {
        m = "0" + n.toString();
    } else {
        m = n.toString();
    }
    return m;
}

//input, unpack, and read the seed, then process it into the checkboxes
function seedSubmit() {
    //get SEED from textbox
    SEED = document.getElementById("seed-form").elements[0].value;
    //if SEED is too short or long, add or remove end data
    if (SEED.length !== POKEMON_DATA.length) {
        while (SEED.length !== POKEMON_DATA.length) {
            if (SEED.length > POKEMON_DATA.length) {
                SEED -= SEED.charAt(SEED.length - 1);
            }
            if (SEED.length < POKEMON_DATA.length) {
                SEED += S[0];
            }
        }
    }
    //convert SEED string into POKEMON_DATA array
    var i = 0;
    for (i = 0; i < SEED.length; i += 1) {
        POKEMON_DATA[i] = SEED.charAt(i);
        if (POKEMON_DATA[i] === S[0]) {
            POKEMON_DATA[i] = S[4];
        }
        if (POKEMON_DATA[i] === S[1]) {
            POKEMON_DATA[i] = S[5];
        }
        if (POKEMON_DATA[i] === S[2]) {
            POKEMON_DATA[i] = S[6];
        }
        if (POKEMON_DATA[i] === S[3]) {
            POKEMON_DATA[i] = S[7];
        }
    }
    //update the table based on new SEED
    updateTable();
}

//put current SEED into textbox
function seedRetrieve() {
    document.getElementById("seed-form").elements[0].value = SEED;
}

//update the seed based on the current pokemon checkboxes
function updateSeed() {
    var temp_seed = [],
        t_seed = POKEMON_DATA,
        i = 0;
    SEED = "";
    //go through POKEMON_DATA
    for (i = 0; i < POKEMON_DATA.length; i += 1) {
        //convert state words (have) to state numbers, POKEMON_DATA word array to temp_seed number array
        if (POKEMON_DATA[i] === S[4]) {
            temp_seed[i] = S[0];
        } else if (POKEMON_DATA[i] === S[5]) {
            temp_seed[i] = S[1];
        } else if (POKEMON_DATA[i] === S[6]) {
            temp_seed[i] = S[2];
        } else if (POKEMON_DATA[i] === S[7]) {
            temp_seed[i] = S[3];
        }
        //convert to single SEED string
        SEED += temp_seed[i];
    }
    //put new SEED in textbox
    seedRetrieve();
}

//update table of pokemon checkboxes with current SEED
function updateTable() {
    var cells = document.getElementsByClassName("box-image"),
        image = "",
        image_number = "",
        number = 0,
        i = 0;
    //loop through each pokemon checkbox
    for (i = 0; i < cells.length; i += 1) {
        ////number = i + 1;
        image_number = zeropad(i + 1);
        
        //set dex number in checkbox corner
        cells.item(i).innerHTML = image_number;
        
        //remove checkbox class
        if (cells.item(i).classList.contains(S[5])) {
            cells.item(i).classList.remove(S[5]);
        }
        if (cells.item(i).classList.contains(S[6])) {
            cells.item(i).classList.remove(S[6]);
        }
        if (cells.item(i).classList.contains(S[4])) {
            cells.item(i).classList.remove(S[4]);
        }
        
        //set new checkbox class based on POKEMON_DATA
        cells.item(i).classList.add(POKEMON_DATA[i + 1]);

        //update checkbox image based on new class
        if (cells.item(i).classList.contains(S[5])) {
            image = IMAGE_DIR[1] + image_number + IMAGE_DIR[0];
        }
        if (cells.item(i).classList.contains(S[6])) {
            image = IMAGE_DIR[2] + image_number + IMAGE_DIR[0];
        }
        if (cells.item(i).classList.contains(S[4])) {
            image = IMAGE_DIR[1] + image_number + IMAGE_DIR[0];
        }
        
        //set finalized image
        cells.item(i).style.backgroundImage = image;
    }
}

//update captions and links
function updateCaptions() {
    var captions = document.getElementsByClassName("captiona"),
        n = "",
        i = 0;
    //loop through each caption
    for (i = 0; i < captions.length; i += 1) {
        n = zeropad(i + 1);
        //set serebii link
        captions.item(i).href = SEREBII_LINK[0] + n + SEREBII_LINK[1];
        //set name
        captions.item(i).innerHTML = POKEMON_INFO[i];
    }
}



//click on checkbox event
function boxClickEvent(box) {
    //check state class, decide new state class, remove state class
    var make = "";
    if (box.classList.contains(S[5])) { //have pokemon
        box.classList.remove(S[5]);
        make = S[6];
    }
    if (box.classList.contains(S[6])) { //have pokemon
        box.classList.remove(S[6]);
        make = S[4];
    }
    if (box.classList.contains(S[4])) { //have pokemon
        box.classList.remove(S[4]);
        make = S[5];
    }
    //set new state class
    box.classList.add(make);
    
    //mark as clicked
    box.classList.add("clicked");
    //loop through all checkboxes, find one marked for changing
    var cells = document.getElementsByClassName("box-image"),
        i = 0;
    for (i = 0; i < cells.length; i += 1) {
        //if marked as clicked
        if (cells.item(i).classList.contains("clicked")) {
            //update POKEMON_DATA based on new state
            if (cells.item(i).classList.contains(S[5])) { //have pokemon
                POKEMON_DATA[i + 1] = S[5];
            }
            if (cells.item(i).classList.contains(S[6])) { //have pokemon
                POKEMON_DATA[i + 1] = S[6];
            }
            if (cells.item(i).classList.contains(S[4])) { //have pokemon
                POKEMON_DATA[i + 1] = S[4];
            }
        }
    }
    //unmark for changing
    box.classList.remove("clicked");
    //update SEED with new POKEMON_DATA state
    updateSeed();
    //update checkbox table with new POKEMON_DATA
    updateTable();
}

//run things on page load
function pageLoad() {
    updateSeed();
    updateTable();
    updateCaptions();
}


// --------------- EVENTS --------------- //


//page load
window.onload = pageLoad;