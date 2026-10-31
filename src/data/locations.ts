export interface Location {
  name: string;
  street: string;
  postal: string;
  city: string;
  phone: string;
  phoneHref: string;
  email: string;
  mapsQuery: string;
}

export const locations: Location[] = [
  {
    name: "Vos in Tuinstraat",
    street: "Vos in Tuinstraat 1A",
    postal: "2514 BX",
    city: "Den Haag",
    phone: "070 392 7204",
    phoneHref: "+31703927204",
    email: "info@traiteurlusso.nl",
    mapsQuery: "Vos+in+Tuinstraat+1A+2514+BX+Den+Haag",
  },
  {
    name: "Theresiastraat",
    street: "Theresiastraat 48",
    postal: "2593 AP",
    city: "Den Haag",
    phone: "070 211 0673",
    phoneHref: "+31702110673",
    email: "theresiastraat@traiteurlusso.nl",
    mapsQuery: "Theresiastraat+48+2593+AP+Den+Haag",
  },
];

export const openingHours = [
  { days: "Maandag t/m vrijdag", hours: "09:00 - 17:00" },
  { days: "Zaterdag", hours: "10:00 - 17:00" },
  { days: "Zondag", hours: "Gesloten" },
];
