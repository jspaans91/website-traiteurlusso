export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  veggie?: boolean;
}

export interface MenuCategory {
  title: string;
  note?: string;
  items: MenuItem[];
}

export const vosMenu: MenuCategory[] = [
  {
    title: "Belegde broodjes",
    note: "Ciabatta (wit/bruin) of focaccia — 0,50 extra",
    items: [
      { name: "Kaas", price: "5,00" },
      { name: "Luxe kazen", price: "5,50" },
      { name: "Filet American / Tartaar", price: "5,00" },
      { name: "Filet American / Tartaar Speciaal", price: "5,50" },
      { name: "Mortadella", price: "6,00" },
      { name: "Ham", price: "6,00" },
      { name: "Parmaham", price: "6,00" },
      { name: "Coppa di Parma", price: "6,00" },
      { name: "Pastrami", price: "6,00" },
      { name: "Rosbief", price: "6,00" },
      { name: "Salami", price: "6,00" },
      { name: "Italiaanse tonijnsalade", price: "6,00" },
      { name: "Gezond", price: "6,50" },
      { name: "Bal (huisgemaakt)", price: "6,00" },
      { name: "Zalm", price: "7,25" },
    ],
  },
  {
    title: "Gegrilde panini",
    items: [
      { name: "Caprese", price: "6,50", description: "Tomaat, mozzarella, pesto", veggie: true },
      { name: "Salami", price: "7,00", description: "Tomaat, mozzarella, salami, pesto" },
      { name: "Prosciutto", price: "7,00", description: "Tomaat, mozzarella, ham, pesto" },
      { name: "Provolone", price: "7,00", description: "Ham, provolone, kaas, champignons, pesto" },
      { name: "Coppa di Parma", price: "7,00", description: "Brie, rode ui, coppa di parma, pesto" },
      { name: "Salmone", price: "8,00", description: "Zalm, mascarpone, ui, kappertjes" },
    ],
  },
  {
    title: "Specials",
    note: "Keuze uit ciabatta of focaccia",
    items: [
      { name: "Milano", price: "8,00", description: "Tomaat, mozzarella, pesto & parmaham" },
      { name: "Sicilia", price: "8,00", description: "Salami picante, pecorino kaas, aubergines" },
      { name: "Umbria", price: "8,00", description: "Rosbief, rucola, parmezaanse kaas & truffelmayo" },
      { name: "Mafioso", price: "8,00", description: "Lamsfilet, paprika & pecorino kaas" },
      { name: "Palermo", price: "8,00", description: "Pancetta coppata, pecorino picante, rucola & olijventapenade" },
      { name: "Ortolana", price: "7,00", description: "Ricotta met bieslook, bospaddenstoelen, courgette & rucola", veggie: true },
      { name: "Vegetariana", price: "7,50", description: "Gegrilde aubergines, paprika, pesto, rucola & parmezaanse kaas", veggie: true },
      { name: "Venezia", price: "8,00", description: "Gegrilde kip, rode ui, honing-mosterdsaus & rucola" },
      { name: "Toscana", price: "7,00", description: "Provolone picante & drie soorten groenten", veggie: true },
      { name: "Bologna", price: "8,00", description: "Mortadella, gedroogde tomaat & mozzarella" },
      { name: "Caprese", price: "7,00", description: "Tomaat, mozzarella, basilicum & pesto", veggie: true },
      { name: "Carpaccio", price: "8,50", description: "Carpaccio, parmezaanse kaas, pijnboompitten, rucola & pesto of truffelmayo" },
      { name: "Vitello Tonnato", price: "8,50", description: "Kalfsvlees, kappertjes, rucola & tonijnsaus" },
      { name: "Roma", price: "8,00", description: "Provolone dolce, prosciutto al rosmarino & artisjok" },
      { name: "Catania", price: "8,00", description: "Mortadella, parmezaanse kaas, tomaat & pistacchio mayo" },
      { name: "Etna", price: "8,00", description: "Gegrilde kip, gekarameliseerde ui, parmezaanse kaas, lollo verde & pesto rosso" },
      { name: "Lampedusa", price: "9,50", description: "Zalm, rode ui, ei, roomkaas & lollo verde" },
      { name: "Puglia", price: "7,00", description: "Huisgemaakte spread, artisjok, zongedroogde tomaat, rucola & radicchio rosso", veggie: true },
    ],
  },
  {
    title: "Salades",
    items: [
      { name: "Caprese", price: "11,00", description: "Tomaat, mozzarella, basilicum & pesto", veggie: true },
      { name: "Vegetariana", price: "12,50", description: "Italiaanse gegrilde groenten, geitenkaas, walnoten, croutons & honing-balsamico dressing", veggie: true },
      { name: "Giulio Cesare", price: "13,00", description: "Gegrilde kip, gedroogde tomaat, ei, parmezaanse kaas, croutons & huisgemaakte caesardressing" },
      { name: "Salmone", price: "14,50", description: "Gerookte zalm, kappertjes, rode ui, rucola, ei & citroen-mosterddressing" },
      { name: "Caprino", price: "12,50", description: "Geitenkaas, sla, zongedroogde tomaat, komkommer, walnoten & honingdressing", veggie: true },
    ],
  },
  {
    title: "Pasta",
    note: "Keuze uit tortellini, tagliatelle of penne",
    items: [
      { name: "Bolognese", price: "14,00", description: "Rundergehakt" },
      { name: "Carbonara", price: "14,00", description: "Spek, ei, ui & roomsaus" },
      { name: "Funghi", price: "14,00", description: "Bospaddenstoelen, truffel, bosuitjes & roomsaus", veggie: true },
      { name: "Amatriciana", price: "14,00", description: "Spek, aubergines, tomatensaus & pecorino kaas" },
      { name: "Pollo", price: "14,00", description: "Kip, ui, pesto & roomsaus" },
      { name: "Gorgonzola", price: "14,00", description: "Ham, gorgonzola & roomsaus" },
      { name: "Lasagna", price: "14,50", description: "Traditioneel en huisgemaakt" },
      { name: "Gamberetti", price: "16,00", description: "Courgette, garnalen, bosuitjes & roomsaus" },
      { name: "Salmone", price: "16,00", description: "Zalm, courgette, bosuitjes & tomaten-roomsaus" },
    ],
  },
  {
    title: "Antipasti",
    items: [
      { name: "Antipasti schotel", price: "14,50", description: "Mix van gegrilde groenten, rolletjes van aubergine met tonijn, gamba's met bieslookolie & knoflookcrostini" },
      { name: "Carpaccio schotel", price: "14,50", description: "Runder carpaccio, parmezaanse kaas, rucola, walnoten & truffelmayo" },
      { name: "Vitello Tonnato schotel", price: "14,50", description: "Kalfsvlees, kappertjes, rucola & tonijnsaus" },
    ],
  },
  {
    title: "Dessert",
    items: [
      { name: "Tiramisu", price: "6,50", description: "Huisgemaakt" },
      { name: "Cannoli", price: "3,00 / 5,50", description: "Siciliaanse specialiteit" },
    ],
  },
  {
    title: "Dranken",
    items: [
      { name: "Koffie / Espresso", price: "2,80" },
      { name: "Doppio Espresso", price: "3,25" },
      { name: "Latte Macchiato", price: "3,80" },
      { name: "Espresso Macchiato", price: "3,00" },
      { name: "Cappuccino", price: "3,30" },
      { name: "Cappuccino Groot", price: "3,80" },
      { name: "Diverse soorten thee", price: "3,75" },
      { name: "Diverse frisdranken", price: "2,95 / 3,25" },
      { name: "Italiaanse frisdranken", price: "3,50" },
      { name: "Italiaans bier", price: "3,90" },
      { name: "Italiaanse wijn", price: "5,50" },
      { name: "Verse jus d'orange", price: "4,00 / 4,75" },
      { name: "Grapefruitsap", price: "4,50 / 5,00" },
      { name: "Melk / Karnemelk", price: "2,75 / 3,00" },
      { name: "Optimel", price: "2,75" },
    ],
  },
];

export const theresiastraatMenu: MenuCategory[] = [
  {
    title: "Belegde broodjes",
    items: [
      { name: "Kaas", price: "5,00" },
      { name: "Luxe kazen", price: "5,50" },
      { name: "Filet American / Tartaar", price: "5,00" },
      { name: "Filet American / Tartaar Speciaal", price: "5,50" },
      { name: "Mortadella", price: "6,00" },
      { name: "Prosciutto", price: "6,00" },
      { name: "Parmaham", price: "6,00" },
      { name: "Coppa di Parma", price: "6,00" },
      { name: "Pastrami", price: "6,00" },
      { name: "Rosbief", price: "6,00" },
      { name: "Salami", price: "6,00" },
      { name: "Salades", price: "6,00" },
      { name: "Gezond", price: "6,50" },
      { name: "Bal (huisgemaakt)", price: "6,00" },
      { name: "Zalm", price: "7,25" },
    ],
  },
  {
    title: "Gegrilde panini",
    items: [
      { name: "Caprese", price: "6,50", description: "Tomaat, mozzarella, pesto", veggie: true },
      { name: "Salami", price: "7,00", description: "Tomaat, mozzarella, salami, pesto" },
      { name: "Prosciutto", price: "7,00", description: "Tomaat, mozzarella, ham, pesto" },
      { name: "Provolone", price: "7,00", description: "Ham, provolone, kaas, champignons, pesto" },
      { name: "Coppa di Parma", price: "7,00", description: "Brie, rode ui, coppa di parma, pesto" },
      { name: "Salmone", price: "8,00", description: "Zalm, mascarpone, ui, kappertjes" },
    ],
  },
  {
    title: "Specials",
    note: "Keuze uit ciabatta of focaccia",
    items: [
      { name: "Milano", price: "8,00", description: "Tomaat, mozzarella, pesto & parmaham" },
      { name: "Umbria", price: "8,00", description: "Rosbief, rucola, parmezaanse kaas & truffelmayo" },
      { name: "Sicilia", price: "8,00", description: "Salami picante, pecorino kaas, aubergines" },
      { name: "Palermo", price: "8,00", description: "Pancetta coppata, pecorino picante, rucola & olijventapenade" },
      { name: "Mafioso", price: "7,00", description: "Lamsfilet, paprika & pecorino kaas" },
      { name: "Bologna", price: "7,00", description: "Mortadella, gedroogde tomaat & mozzarella" },
      { name: "Catania", price: "7,00", description: "Mortadella, parmezaanse kaas, tomaat & pistacchio mayo" },
      { name: "Roma", price: "7,00", description: "Provolone dolce, prosciutto al rosmarino & artisjok" },
      { name: "Lampedusa", price: "8,50", description: "Zalm, rode ui, ei, roomkaas & lollo verde" },
      { name: "Venezia", price: "8,00", description: "Gegrilde kip, rode ui, honing-mosterdsaus & rucola" },
      { name: "Etna", price: "8,00", description: "Gegrilde kip, gekarameliseerde ui, parmezaanse kaas, lollo verde & pesto rosso" },
      { name: "Carpaccio", price: "8,50", description: "Carpaccio, parmezaanse kaas, pijnboompitten, rucola & pesto of truffelmayo" },
      { name: "Vitello Tonnato", price: "8,50", description: "Kalfsvlees, kappertjes, rucola & tonijnsaus" },
      { name: "Caprese", price: "7,00", description: "Tomaat, mozzarella, basilicum & pesto", veggie: true },
      { name: "Vegetariana", price: "7,50", description: "Gegrilde aubergines, paprika, pesto, rucola & parmezaanse kaas", veggie: true },
      { name: "Toscana", price: "7,00", description: "Provolone picante & drie soorten groenten", veggie: true },
      { name: "Ortolana", price: "7,00", description: "Ricotta met bieslook, bospaddenstoelen, courgette & rucola", veggie: true },
      { name: "Puglia", price: "7,00", description: "Huisgemaakte spread, artisjok, zongedroogde tomaat, rucola & radicchio rosso", veggie: true },
    ],
  },
  {
    title: "Salades",
    items: [
      { name: "Caprese", price: "11,00", description: "Tomaat, mozzarella, basilicum & pesto", veggie: true },
      { name: "Vegetariana", price: "12,50", description: "Italiaanse gegrilde groenten, geitenkaas, walnoten, croutons & honing-balsamico dressing", veggie: true },
      { name: "Giulio Cesare", price: "13,00", description: "Gegrilde kip, gedroogde tomaat, ei, parmezaanse kaas, croutons & huisgemaakte caesardressing" },
      { name: "Salmone", price: "14,50", description: "Gerookte zalm, kappertjes, rode ui, rucola, ei & citroen-mosterddressing" },
      { name: "Caprino", price: "12,50", description: "Geitenkaas, sla, zongedroogde tomaat, komkommer, walnoten & honingdressing", veggie: true },
    ],
  },
  {
    title: "Pasta",
    items: [
      { name: "Diverse soorten", price: "14,50", description: "Huisgemaakt" },
    ],
  },
  {
    title: "Antipasti",
    items: [
      { name: "Antipasti Italiano", price: "14,50", description: "Mix van Italiaanse vleeswaren & kazen" },
      { name: "Carpaccio", price: "14,50", description: "Runder carpaccio, parmezaanse kaas, rucola, walnoten & truffelmayo" },
      { name: "Vitello Tonnato", price: "14,50", description: "Kalfsvlees, kappertjes, rucola & tonijnsaus" },
    ],
  },
  {
    title: "Dessert",
    items: [
      { name: "Tiramisu", price: "6,50", description: "Huisgemaakt" },
      { name: "Cannoli", price: "3,00 / 5,50", description: "Siciliaanse specialiteit" },
    ],
  },
  {
    title: "Dranken",
    items: [
      { name: "Koffie / Espresso", price: "2,80" },
      { name: "Latte Macchiato", price: "3,80" },
      { name: "Espresso Macchiato", price: "3,00" },
      { name: "Cappuccino", price: "3,30" },
      { name: "Cappuccino Groot", price: "3,80" },
      { name: "Diverse soorten thee", price: "3,75" },
      { name: "Diverse frisdranken", price: "2,95 / 3,25" },
      { name: "Italiaanse frisdranken", price: "3,50" },
      { name: "Verse jus d'orange", price: "4,00 / 4,75" },
      { name: "Grapefruitsap", price: "4,50 / 4,75" },
      { name: "Melk / Karnemelk", price: "2,75" },
      { name: "Optimel / Vifit", price: "2,75" },
    ],
  },
];

export const specials = vosMenu.find((c) => c.title === "Specials")!.items;
