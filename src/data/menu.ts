export type Product = {
  name: string;
  price: number;
  description?: string;
};

export type Category = {
  id: string;
  title: string;
  note?: string;
  products: Product[];
};

export const promo = {
  title: "Promo Septiembre",
  name: "60 Makis Mixtos",
  price: 309,
  validFrom: "2026-09-01",
  validTo: "2026-09-30",
  includes: [
    "California Roll: pepino, queso crema, aguacate y surimi. Encima ajonjolí.",
    "Furai Maki: surimi, queso crema y aguacate. Por fuera empanizado.",
    "Kakiague Roll: surimi, queso crema, aguacate y pepino. Encima mezcla de zanahoria y calabacita fritas.",
    "Maki Tempura: arrachera, queso manchego, aguacate. Bañado en tempura.",
    "Monkey Roll: cangrejo, queso manchego y aguacate. Por fuera plátano macho empanizado.",
    "Ninja Roll: cangrejo, queso crema, aguacate. Por fuera alga bañada en tempura.",
  ],
};

export const menu: Category[] = [
  {
    id: "charolas",
    title: "Charolas de Sushi",
    note: "Los rollos no incluyen camarón, salmón o atún.",
    products: [
      { name: "Grande (la Peque)", price: 210, description: "25 pzas mixtas + soya + chipotle. Furai Maki, Monkey Roll, Norimaki, Maki Tempura y Uramaki." },
      { name: "Jumbo", price: 279, description: "45 pzas mixtas + 4 balls empanizadas + soya + chipotle + tampico. Furai Maki, Monkey Roll, Norimaki, Maki Tempura y Uramaki." },
      { name: "Familiar", price: 250, description: "36 pzas mixtas + 3 balls empanizadas + soya + chipotle." },
      { name: "Mega", price: 459, description: "70 pzas mixtas + 7 balls empanizadas + soya + chipotle + tampico. Furai Maki, Monkey Roll, Norimaki, Maki Tempura y Uramaki." },
      { name: "Extra Mega", price: 610, description: "100 pzas mixtas + 10 balls empanizadas + soya + chipotle + tampico. Furai Maki, Monkey Roll, Norimaki, Maki Tempura y Uramaki." },
      { name: "Pakete Fiesta", price: 710, description: "120 pzas mixtas + soya + chipotle + tampico + 10 balls empanizadas. Furai Maki, Monkey Roll, Norimaki, Maki Tempura, Uramaki, Cheese, Doritos Roll, Caterpillar Roll." },
    ],
  },
  {
    id: "combox",
    title: "Combox",
    note: "Se acompaña de papas gajo, dedos de queso soja, catsup y ranch. Los rollos no incluyen camarón, salmón o atún.",
    products: [
      { name: "Individual", price: 149, description: "1 rollo + 3 alitas/boneless." },
      { name: "Mediana", price: 310, description: "3 rollos + 6 alitas/boneless." },
      { name: "Grande", price: 499, description: "5 rollos + 10 alitas/boneless." },
    ],
  },
  {
    id: "alitas",
    title: "Alitas & Boneless",
    note: "Sabores: BBQ Ahumada, BBQ Picosa, Cajun, Lemon Pepper, Tamarindo, Red Hot, Piña Hot, Mango Habanero, Habanero Cream.",
    products: [
      { name: "Paquete de Boneless", price: 139, description: "250gr acompañado de aderezo ranch y verduras." },
      { name: "Paquete 10 Alitas", price: 139, description: "Acompañado de aderezo ranch y verduras." },
      { name: "Paquete 20 Alitas", price: 259, description: "Acompañado de aderezo ranch y verduras." },
    ],
  },
  {
    id: "rollos",
    title: "Rollos",
    note: "Los rollos de promoción no llevan camarón, atún ni salmón.",
    products: [
      { name: "Avocado Roll", price: 89, description: "Calamar tempura, zanahoria, queso crema y aguacate. Encima mango y aguacate." },
      { name: "Afrodai Roll", price: 89, description: "Camarón empanizado, pepino, zanahoria y aguacate. Envuelto en plátano empanizado." },
      { name: "Bacon Roll", price: 99, description: "Queso manchego y aguacate. Envuelto en tocino horneado." },
      { name: "Crunchy Roll", price: 89, description: "Camarón empanizado, queso crema y aguacate. Cubierto de crunchy." },
      { name: "Furia Roll", price: 89, description: "Mango, pepino, zanahoria. Cubierto de queso crema y camarón cocido, espolvoreado con piquín." },
      { name: "Veggie Roll", price: 72, description: "Lechuga, pepino y pimiento. Envuelto en queso crema y pepino." },
      { name: "Ikari Roll", price: 89, description: "Aguacate, camarón cocido y pasta ikari. Envuelto en alga." },
      { name: "Gio Roll", price: 89, description: "Res, germen de alfalfa, chile toreado. Envuelto en queso crema y kakiague." },
      { name: "California Roll", price: 89, description: "Zanahoria, queso crema y camarón empanizado. Por fuera ajonjolí." },
      { name: "Caterpillar Roll", price: 89, description: "Camarón empanizado, queso crema y pepino. Encima aguacate." },
      { name: "Cheese Roll", price: 89, description: "Pepino, aguacate y camarón empanizado. Con queso crema por encima." },
      { name: "Hanaya Roll", price: 96, description: "Camarón cocido picado, cangrejo, spicy, queso crema, aguacate. Alga por fuera." },
      { name: "Doritos Roll", price: 82, description: "Aguacate, queso crema y cangrejo. Por fuera empanizado." },
      { name: "Furai Maki", price: 89, description: "Aguacate, queso crema y camarón empanizado. Por fuera empanizado." },
      { name: "Gratin Roll", price: 99, description: "Aguacate y camarón empanizado. Encima queso manchego gratinado." },
      { name: "Happy Roll", price: 89, description: "Relleno de cerdo BBQ, zanahoria, lechuga y queso crema. Por fuera cebollín picado." },
      { name: "Makimono", price: 85, description: "Pepino, aguacate, queso crema, atún. Envuelto en alga." },
      { name: "Maki Tempura", price: 85, description: "Aguacate, manchego y arrachera. Bañado en tempura." },
      { name: "Monkey Roll", price: 85, description: "Queso manchego, aguacate y cangrejo. Envuelto en plátano frito." },
      { name: "Norimaki", price: 70, description: "Pepino, zanahoria, queso crema y surimi. Envuelto en alga." },
      { name: "Sakemaki", price: 95, description: "Wasabi, salmón, queso crema. Envuelto en alga." },
      { name: "Sweet Roll", price: 79, description: "Fruta de temporada, queso crema, cubierto de Hersheys y cereza." },
      { name: "Uramaki", price: 75, description: "Pepino, aguacate, surimi. Encima ajonjolí negro." },
    ],
  },
  {
    id: "rollos-primavera",
    title: "Rollos Primavera",
    note: "¡Nuevo!",
    products: [
      { name: "Rollos Primavera de Verduras", price: 110 },
      { name: "Rollos Primavera de Pollo o Camarón", price: 136 },
      { name: "Edamames", price: 79 },
    ],
  },
  {
    id: "balls",
    title: "Balls",
    products: [
      { name: "Balls Empanizadas (5 pzas)", price: 95, description: "Bolitas de arroz rellenas de surimi y queso crema, empanizadas por fuera." },
      { name: "Ikari Balls (5 pzas)", price: 95, description: "Bolitas de arroz rellenas de queso crema, plátano macho y pasta ikari, empanizadas." },
      { name: "Bananna Balls (5 pzas)", price: 99, description: "Bolitas de arroz rellenas de cangrejo y queso crema, envueltas en plátano." },
      { name: "Esferas del Dragón (5 pzas)", price: 99, description: "Bolitas de arroz rellenas de camarón y queso crema, empanizadas por fuera." },
    ],
  },
  {
    id: "arroz",
    title: "Arroz",
    products: [
      { name: "Yakimeshi Mixto", price: 135, description: "Arroz frito, pollo, puerco, camarón, verduras mixtas y soja de la casa." },
      { name: "Yakimeshi Sencillo", price: 110, description: "Arroz frito con verduras mixtas y soja de la casa." },
    ],
  },
  {
    id: "kushiages",
    title: "Kushiages",
    products: [
      { name: "Plátano Macho (4 pzas)", price: 75, description: "Con queso crema, empanizado en panko." },
      { name: "Camarón (4 pzas)", price: 75, description: "Relleno de pasta ikari, empanizado en panko." },
      { name: "Queso Manchego (6 pzas)", price: 110, description: "Empanizado en panko." },
    ],
  },
  {
    id: "aderezos",
    title: "Aderezos",
    products: [
      { name: "Aderezo de Chipotle", price: 25 },
      { name: "Chiles Toreados", price: 25 },
      { name: "Ensalada de Tampico", price: 25 },
      { name: "Salsa de Soya", price: 25 },
      { name: "Salsa de Anguila", price: 30 },
    ],
  },
  {
    id: "tempura-mix",
    title: "Tempura Mix",
    products: [
      { name: "Verduras Tempura", price: 99 },
      { name: "Calamar Tempura", price: 110 },
    ],
  },
  {
    id: "snacks",
    title: "Snacks",
    products: [
      { name: "Dedos de Queso (8 pzas)", price: 110 },
      { name: "Papas Gajo (250gr)", price: 85 },
      { name: "Papas a la Francesa (250gr)", price: 85 },
      { name: "Papas Francesas con Boneless", price: 135, description: "250gr de papas francesas + 150gr de boneless." },
    ],
  },
  {
    id: "ramen",
    title: "Ramen",
    products: [
      { name: "Ramen de Marisco", price: 185 },
      { name: "Ramen de Cerdo", price: 185 },
    ],
  },
  {
    id: "postres",
    title: "Postres",
    products: [
      { name: "Helado Tempura", price: 65 },
      { name: "Helado", price: 55 },
      { name: "Pocky Galletas Choco Banana", price: 89 },
      { name: "Pocky Galletas Cookies & Cream", price: 59 },
      { name: "Pocky Galletas Strawberrie", price: 59 },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    products: [
      { name: "Limón con Chía", price: 27 },
      { name: "Limón con Fresa", price: 27 },
      { name: "Agua Mineral", price: 28 },
      { name: "Calpi Vaso", price: 28 },
      { name: "Refrescos de Sabor", price: 29 },
      { name: "Sparkling Soda", price: 35 },
      { name: "Lady Boba Sabores", price: 38 },
      { name: "Calpi Sui Botella", price: 37 },
      { name: "Buda", price: 89 },
      { name: "Jarra de Té Helado", price: 99 },
      { name: "Jarra de Limón Sabores", price: 110 },
      { name: "Sake", price: 129 },
      { name: "Jarra de Calpi", price: 139 },
    ],
  },
];
