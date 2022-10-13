import forkify from "./assets/img-preview/forkify.jpg";
import bank from "./assets/img-preview/bank.jpg";
import guess from "./assets/img-preview/guess.png";
import amigos from "./assets/img-preview/amigos.jpg";
import banking from "./assets/img-preview/homepage1.png";
import commerce from "./assets/img-preview/commerce.jpg";
import listenfy from "./assets/img-preview/listenfy.jpg";

import planet1 from "./assets/planets/planet-1.png";
import planet2 from "./assets/planets/planet-2.png";
import planet3 from "./assets/planets/planet-3.png";
import planet4 from "./assets/planets/planet-4.png";
import earth from "./assets/planets/planet-earth.png";
import jupiter from "./assets/planets/jupiter.png";
import uranus from "./assets/planets/uranus.png";

const data = [
  {
    color: "drop-shadow(5px 5px 50px rgba(101, 213, 32, 0.5))",
    path: earth,
    name: "earth",
    key: "m7",
    img: listenfy,
    title: "Listenfy",
    github: "https://github.com/Mayooo31/listen-my-music",
    netlify: "https://listenfy-mario.netlify.app/",
    about: "Předělal jsem spotify do svého designu za pomocí tailwind css a spotify api.",
    icons: ["REACT", "TAILWIND CSS", "SPOTIFY API"],
  },
  {
    color: "drop-shadow(5px 5px 50px rgba(213, 210, 32, 0.7))",
    path: planet4,
    name: "planet4",
    key: "m8",
    img: commerce,
    title: "E-Commerce",
    github: "https://github.com/Mayooo31/e-commerce",
    netlify: "https://e-commerce-mario.netlify.app/",
    about:
      "Obchod s mechanickými klávesnicemi. S vyhledáváním a s možností vložení do košíku za pomocí redux toolkit. Použil jsem i Swiper.js a local storage.",
    icons: ["HTML", "CSS", "JS", "REACT", "REDUX", "TS"],
  },
  {
    color: "drop-shadow(5px 5px 50px rgba(32, 210, 213, 0.7))",
    path: planet2,
    name: "planet2",
    key: "m9",
    img: banking,
    title: "Internet banking",
    github: "https://github.com/Mayooo31/internet-banking-mern",
    netlify: "https://internet-banking-mario.netlify.app/",
    about:
      "Ověření registrace a přihlášení. List plateb s informacemi o dané platbě. Převod peněz, změna hesla nebo dokonce i smazání celého účtu. ",
    icons: ["HTML", "CSS", "JS", "REACT", "NODEJS", "MONGODB"],
  },
  {
    color: "drop-shadow(5px 5px 50px rgba(182, 52, 196, 0.7))",
    path: planet1,
    name: "planet1",
    key: "m5",
    img: amigos,
    title: "Restaurace",
    github: "https://github.com/Mayooo31/order-meal-react",
    netlify: "https://order-meal-mario.netlify.app/",
    about:
      "Můžeš si vybrat z několika jídel. Dát do košíku, objednat, zadat jméno, adresu a objednávka bude odeslána. ( zaslána na firebase )",
    icons: ["HTML", "CSS", "JS", "REACT", "FIREBASE"],
  },
  {
    color: "drop-shadow(5px 5px 50px rgba(255, 209, 43, 0.7))",
    path: jupiter,
    name: "jupiter",
    key: "m1",
    img: forkify,
    title: "Forkify - Vyhledávaní Receptů",
    github: "https://github.com/Mayooo31/forkify",
    netlify: "https://forkify-mario.netlify.app/",
    about:
      "Stránka kde se dá vyhledat recept podle ingredience nebo názvu jídla. Dá se i nastavit pro kolik lidí by mělo být jídlo, uložit si recept nebo klidně i napsat vlastní.",
    icons: ["HTML", "CSS", "JS"],
  },
  {
    color: "drop-shadow(5px 5px 50px rgba(72, 173, 255, 0.7))",
    path: uranus,
    name: "uranus",
    key: "m2",
    img: bank,
    title: "Simple Bank",
    github: "https://github.com/Mayooo31",
    netlify: "https://simple-bank-mario.netlify.app/",
    about:
      "Minimalistická stránka banky, kde jsem chtěl udělat jednoduchý design s kalkulačkou která vypočítá měsíční splátku podle toho kolik si chci půjčit.",
    icons: ["HTML", "CSS"],
  },
  {
    color: "drop-shadow(5px 5px 50px rgba(255, 72, 96, 0.7))",
    path: planet3,
    name: "planet3",
    key: "m3",
    img: guess,
    title: "Guess My Number!",
    github: "https://github.com/Mayooo31/Guess-My-Number",
    netlify: "https://guess-my-number-mario.netlify.app/",
    about:
      "Hádej moje číslo mezi 1 a 20. A jestli uhádneš, skóre se ti uloží a můžeš hrát znovu. A můžeš si zkusit vylepšit svoje skóre nebo změnit do kolika chceš hrát třeba mezi 1 a 100.",
    icons: ["HTML", "CSS", "JS"],
  },
];

export default data;

// {
//   color: "drop-shadow(5px 5px 50px rgba(213, 210, 32, 0.7))",
//   path: planet4,
//   name: "planet4",
//   key: "m8",
//   img: booking,
//   title: "Booking.com",
//   github: "https://github.com/Mayooo31/Booking-mern",
//   netlify: "https://booking-mario.netlify.app/",
//   about:
//     "Klon stránky Booking.com. Registrace a Login na backend. Poté se dá zabookovat jeden z hotelů který je také na backendu. A určit si svůj pokoj. Následně jsi přesměrován zpět na home page.",
//   icons: ["HTML", "CSS", "JS", "REACT", "NODEJS", "MONGODB"],
// },
