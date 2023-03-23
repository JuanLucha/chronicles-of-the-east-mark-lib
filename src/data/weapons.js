const weapons = {
  "Alabarda": {
    name: "Alabarda",
    cost: 8,
    damage: "1d10",
    weight: 5,
    VE: 5,
    range: "-"
  },
  "Arco corto": {
    name: "Arco corto",
    cost: 15,
    damage: "1d6",
    weight: 1,
    VE: 3,
    range: "20 metros"
  },
  "Arco corto compuesto": {
    name: "Arco corto compuesto",
    cost: 25,
    damage: "1d8",
    weight: 1,
    VE: 3,
    range: "25 metros"
  },
  "Arco largo": {
    name: "Arco largo",
    cost: 25,
    damage: "1d6",
    weight: 1.5,
    VE: 4,
    range: "30 metros"
  },
  "Arco largo compuesto": {
    name: "Arco largo compuesto",
    cost: 50,
    damage: "1d8",
    weight: 1.5,
    VE: 4,
    range: "35 metros"
  },
  "Ballesta ligera": {
    name: "Ballesta ligera",
    cost: 25,
    damage: "1d6",
    weight: 3,
    VE: 4,
    range: "25 metros"
  },
  "Ballesta de mano": {
    name: "Ballesta de mano",
    cost: 100,
    damage: "1d4",
    weight: 1.5,
    VE: 2,
    range: "10 metros"
  },
  "Ballesta pesada": {
    name: "Ballesta pesada",
    cost: 40,
    damage: "1d10",
    weight: 4.5,
    VE: 5,
    range: "40 metros"
  },
  "Ballesta de repetición": {
    name: "Ballesta de repetición",
    cost: 200,
    damage: "1d8",
    weight: 5,
    VE: 5,
    range: "30 metros"
  },
  "Bastón": {
    name: "Bastón",
    cost: 4,
    damage: "1d8",
    weight: 3,
    VE: 4,
    range: "-"
  },
  "Cachiporra": {
    name: "Cachiporra",
    cost: 2,
    damage: "1d6",
    weight: 1,
    VE: 2,
    range: "-"
  },
  "Cerbatana": {
    name: "Cerbatana",
    cost: 4,
    damage: "1d4",
    weight: 0.5,
    VE: 1,
    range: "15 metros"
  },
  "Cimitarra": {
    name: "Cimitarra",
    cost: 15,
    damage: "1d6",
    weight: 1.5,
    VE: 3,
    range: "-"
  },
  "Daga": {
    name: "Daga",
    cost: 3,
    damage: "1d4",
    weight: 0.5,
    VE: 1,
    range: "6 metros"
  },
  "Daga de plata": {
    name: "Daga de plata",
    cost: 30,
    damage: "1d4",
    weight: 0.5,
    VE: 1,
    range: "6 metros"
  },
  "Dardo": {
    name: "Dardo",
    cost: 5,
    damage: "1d3",
    weight: 0.25,
    VE: 1,
    range: "6 metros"
  },
  "Espada corta": {
    name: "Espada corta",
    cost: 5,
    damage: "1d6",
    weight: 1,
    VE: 2,
    range: "-"
  },
  "Espada larga": {
    name: "Espada larga",
    cost: 10,
    damage: "1d8/2d4",
    weight: 1.5,
    VE: 3,
    range: "-"
  },
  "Espada bastarda": {
    name: "Espada bastarda",
    cost: 20,
    damage: "1d10/1d12",
    weight: 2,
    VE: 4,
    range: "-"
  },
  "Espada a dos manos": {
    name: "Espada a dos manos",
    cost: 15,
    damage: "2d6",
    weight: 3,
    VE: 5,
    range: "-"
  },
  "Estoque": {
    name: "Estoque",
    cost: 15,
    damage: "1d6",
    weight: 1,
    VE: 3,
    range: "-"
  },
  "Garrote": {
    name: "Garrote",
    cost: 3,
    damage: "1d4",
    weight: 1,
    VE: 2,
    range: "-"
  },
  "Guadaña": {
    name: "Guadaña",
    cost: 18,
    damage: "2d4",
    weight: 6,
    VE: 4,
    range: "-"
  },
  "Gran hacha": {
    name: "Gran hacha",
    cost: 20,
    damage: "1d12",
    weight: 3.5,
    VE: 4,
    range: "-"
  },
  "Hacha de batalla": {
    name: "Hacha de batalla",
    cost: 7,
    damage: "1d8",
    weight: 2,
    VE: 3,
    range: "-"
  },
  "Hacha de mano": {
    name: "Hacha de mano",
    cost: 4,
    damage: "1d6",
    weight: 1.5,
    VE: 2,
    range: "6 metros"
  }
  "Honda": {
    name: "Honda",
    cost: 2,
    damage: "1d4",
    weight: "–",
    VE: 1,
    range: "15 metros"
  },
  "Hoz": {
    name: "Hoz",
    cost: 6,
    damage: "1d4",
    weight: "1,5 kilos",
    VE: 3,
    range: "–"
  },
  "Jabalina": {
    name: "Jabalina",
    cost: 1,
    damage: "1d4",
    weight: "1 kilo",
    VE: 2,
    range: "9 metros"
  },
  "Lanza": {
    name: "Lanza",
    cost: 4,
    damage: "1d6",
    weight: "1,5 kilo",
    VE: 2,
    range: "9 metros"
  },
  "Lanza de caballería": {
    name: "Lanza de caballería",
    cost: 10,
    damage: "1d8",
    weight: "5 kilos",
    VE: 7,
    range: "–"
  },
  "Látigo": {
    name: "Látigo",
    cost: 3,
    damage: "1d3",
    weight: "1 kilo",
    VE: 2,
    range: "4 metros"
  },
  "Lucero del alba": {
    name: "Lucero del alba",
    cost: 5,
    damage: "2d4",
    weight: "4 kilos",
    VE: 3,
    range: "–"
  },
  "Martillo de guerra": {
    name: "Martillo de guerra",
    cost: 7,
    damage: "1d8",
    weight: "4 kilos",
    VE: 4,
    range: "–"
  },
  "Martillo ligero": {
    name: "Martillo ligero",
    cost: 1,
    damage: "1d4",
    weight: "1 kilo",
    VE: 2,
    range: "9 metros"
  },
  "Maza": {
    name: "Maza",
    cost: 5,
    damage: "1d6",
    weight: "3 kilos",
    VE: 3,
    range: "–"
  },
  "Pica": {
    name: "Pica",
    cost: 8,
    damage: "1d8",
    weight: "7 kilos",
    VE: 6,
    range: "–"
  },
  "Tridente": {
    name: "Tridente",
    cost: 4,
    damage: "1d8",
    weight: "2,5 kilos",
    VE: 5,
    range: "3 metros"
  }
};
