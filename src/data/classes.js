import { armors } from "./armors";

const classes = {
  Assassin: {
    name: "Asesino",
    mainAttribute: "dex",
    hitDice: 6,
    weapons: ["all"],
    armor: [
      armors["Armadura de cuero acolchado"],
      armors["Armadura de cuero endurecido"],
      armors["Armadura de cuero tachonado"]
    ],
    level: {
      1: {
        experiencePoints: 0,
        attackBonus: 0,
        hitDice: ["1d6"],
        abilities: [
          "Ataque furtivo",
          "Ataque letal",
          "Detectar punto débil (Sab)",
          "Disfraz (Car)",
          "Envenenar",
          "Escalar (Des)",
          "Esconderse",
          "Escuchar (Sab)",
          "Montar y desmontar trampas (Int)",
          "Moverse en silencio (Des)"
        ]
      },
      2: {
        experiencePoints: 1751,
        attackBonus: 1,
        hitDice: ["1d6"]
      },
      3: {
        experiencePoints: 3501,
        attackBonus: 1,
        hitDice: ["1d6"]
      },
      4: {
        experiencePoints: 7001,
        attackBonus: 1,
        hitDice: ["1d6"]
      },
      5: {
        experiencePoints: 14001,
        attackBonus: 2,
        hitDice: ["1d6"]
      },
      6: {
        experiencePoints: 25001,
        attackBonus: 2,
        hitDice: ["1d6"]
      },
      7: {
        experiencePoints: 50001,
        attackBonus: 2,
        hitDice: ["1d6"]
      },
      8: {
        experiencePoints: 90001,
        attackBonus: 3,
        hitDice: ["1d6"]
      },
      9: {
        experiencePoints: 150001,
        attackBonus: 3,
        hitDice: ["1d6"]
      },
      10: {
        experiencePoints: 200001,
        attackBonus: 3,
        hitDice: ["1d6"]
      },
      11: {
        experiencePoints: 350001,
        attackBonus: 4,
        hitDice: ["1d6"]
      },
      12: {
        experiencePoints: 500001,
        attackBonus: 4,
        hitDice: ["+2 PG"]
      }
    }
  },
  Barbarian: {
    name: "Bárbaro",
    mainAttribute: "str",
    hitDice: 12,
    weapons: ["all"],
    armor: ["all"],
    level: {
      1: {
        experiencePoints: 0,
        attackBonus: 0,
        hitDice: ["1d12"],
        abilities: [
          "Alerta",
          "Instintos primitivos",
          "Intimidar (CON)",
          "Rastreador nato"
        ]
      },
      2: {
        experiencePoints: 2101,
        attackBonus: 1,
        hitDice: ["1d12"],
        abilities: []
      },
      3: {
        experiencePoints: 4701,
        attackBonus: 2,
        hitDice: ["1d12"],
        abilities: []
      },
      4: {
        experiencePoints: 9401,
        attackBonus: 3,
        hitDice: ["1d12"],
        abilities: ["Furia desatada"]
      },
      5: {
        experiencePoints: 20001,
        attackBonus: 4,
        hitDice: ["1d12"],
        abilities: []
      },
      6: {
        experiencePoints: 40001,
        attackBonus: 5,
        hitDice: ["1d12"],
        abilities: ["Aguante"]
      },
      7: {
        experiencePoints: 80001,
        attackBonus: 6,
        hitDice: ["1d12"],
        abilities: []
      },
      8: {
        experiencePoints: 170001,
        attackBonus: 7,
        hitDice: ["1d12"],
        abilities: []
      },
      9: {
        experiencePoints: 340001,
        attackBonus: 8,
        hitDice: ["1d12"],
        abilities: []
      },
      10: {
        experiencePoints: 600001,
        attackBonus: 9,
        hitDice: ["1d12"],
        abilities: ["Llamada ancestral"]
      },
      11: {
        experiencePoints: 800001,
        attackBonus: 10,
        hitDice: ["+5 PG"],
        abilities: []
      },
      12: {
        experiencePoints: 1000001,
        attackBonus: 11,
        hitDice: ["+5 PG"],
        abilities: []
      }
    }
  },
  Bard: {
    name: "Bardo",
    mainAttribute: "car",
    hitDice: 10,
    weapons: [
      weapons["Arco largo"],
      weapons["Arco corto"],
      weapons["Bastón"],
      weapons["Cachiporra"],
      weapons["Cerbatana"],
      weapons["Cimitarra"],
      weapons["Daga"],
      weapons["Dardos"],
      weapons["Espada corta"],
      weapons["Espada larga"],
      weapons["Hacha de mano"],
      weapons["Jabalina"],
      weapons["Lanza"],
      weapons["Martillo de guerra"],
      weapons["Martillo ligero"]
    ],
    armor: [
      armors["Armadura de cuero"],
      armors["Armadura de anillas"],
      armors["Camisote de mallas"],
      armors["Cota de escamas"],
      armors["Armadura laminada"],
      armors["Peto de coraza"]
    ],
    level: {
      1: {
        experiencePoints: 0,
        attackBonus: 0,
        hitDice: ["1d10"],
        abilities: ["Conocimiento de bardo (CAR)", "Exaltar (CAR)"]
      },
      2: {
        experiencePoints: 1501,
        attackBonus: 1,
        hitDice: ["1d10"],
        abilities: []
      },
      3: {
        experiencePoints: 3251,
        attackBonus: 2,
        hitDice: ["1d10"],
        abilities: []
      },
      4: {
        experiencePoints: 7501,
        attackBonus: 3,
        hitDice: ["1d10"],
        abilities: ["Fascinar"]
      },
      5: {
        experiencePoints: 15001,
        attackBonus: 4,
        hitDice: ["1d10"],
        abilities: []
      },
      6: {
        experiencePoints: 30001,
        attackBonus: 5,
        hitDice: ["1d10"],
        abilities: []
      },
      7: {
        experiencePoints: 60001,
        attackBonus: 6,
        hitDice: ["1d10"],
        abilities: []
      },
      8: {
        experiencePoints: 120001,
        attackBonus: 7,
        hitDice: ["1d10"],
        abilities: []
      },
      9: {
        experiencePoints: 240001,
        attackBonus: 8,
        hitDice: ["1d10"],
        abilities: ["Infundir valor"]
      },
      10: {
        experiencePoints: 450001,
        attackBonus: 9,
        hitDice: ["1d10"],
        abilities: []
      },
      11: {
        experiencePoints: 625001,
        attackBonus: 10,
        hitDice: ["+4 PG"],
        abilities: []
      },
      12: {
        experiencePoints: 800001,
        attackBonus: 11,
        hitDice: ["+4 PG"],
        abilities: []
      }
    }
  },
  knight: {
    name: "Caballero",
    mainAttribute: "car",
    hitDice: 10,
    weapons: ["all"],
    armor: ["all"],
    level: {
      1: {
        experiencePoints: 0,
        attackBonus: 0,
        hitDice: ["1d10"],
        abilities: [
          "Inspirar coraje",
          "Montura de caballero",
          "Jinete experto (DES)"
        ]
      },
      2: {
        experiencePoints: 2251,
        attackBonus: 1,
        hitDice: ["1d10"],
        abilities: []
      },
      3: {
        experiencePoints: 4501,
        attackBonus: 2,
        hitDice: ["1d10"],
        abilities: ["Arrojo"]
      },
      4: {
        experiencePoints: 9001,
        attackBonus: 3,
        hitDice: ["1d10"],
        abilities: []
      },
      5: {
        experiencePoints: 18001,
        attackBonus: 4,
        hitDice: ["1d10"],
        abilities: ["Desmoralizar"]
      },
      6: {
        experiencePoints: 36001,
        attackBonus: 5,
        hitDice: ["1d10"],
        abilities: []
      },
      7: {
        experiencePoints: 72001,
        attackBonus: 6,
        hitDice: ["1d10"],
        abilities: []
      },
      8: {
        experiencePoints: 150001,
        attackBonus: 7,
        hitDice: ["1d10"],
        abilities: ["Dominio del campo de batalla"]
      },
      9: {
        experiencePoints: 300001,
        attackBonus: 8,
        hitDice: ["1d10"],
        abilities: []
      },
      10: {
        experiencePoints: 600001,
        attackBonus: 9,
        hitDice: ["1d10"],
        abilities: ["Llamada a las armas"]
      },
      11: {
        experiencePoints: 725001,
        attackBonus: 10,
        hitDice: ["+4 PG"],
        abilities: []
      },
      12: {
        experiencePoints: 900001,
        attackBonus: 11,
        hitDice: ["+4 PG"],
        abilities: []
      }
    }
  },
  Cleric: {
    name: "Clérigo",
    mainAttribute: "sab",
    hitDice: 8,
    weapons: [
      weapons["Bastón"],
      weapons["Cachiporra"],
      weapons["Garrote"],
      weapons["Honda"],
      weapons["Lucero del alba"],
      weapons["Martillo de guerra"],
      weapons["Martillo ligero"],
      weapons["Maza"]
    ],
    armor: ["all"],
    level: {
      1: {
        experiencePoints: 0,
        attackBonus: 0,
        hitDice: ["1d8"],
        abilities: ["Conjuros divinos", "Expulsar muertos vivientes"]
      },
      2: {
        experiencePoints: 2251,
        attackBonus: 1,
        hitDice: ["1d8"],
        abilities: []
      },
      3: {
        experiencePoints: 5001,
        attackBonus: 1,
        hitDice: ["1d8"],
        abilities: []
      },
      4: {
        experiencePoints: 9001,
        attackBonus: 2,
        hitDice: ["1d8"],
        abilities: []
      },
      5: {
        experiencePoints: 18001,
        attackBonus: 2,
        hitDice: ["1d8"],
        abilities: []
      },
      6: {
        experiencePoints: 35000,
        attackBonus: 3,
        hitDice: ["1d8"],
        abilities: []
      },
      7: {
        experiencePoints: 70001,
        attackBonus: 3,
        hitDice: ["1d8"],
        abilities: []
      },
      8: {
        experiencePoints: 140001,
        attackBonus: 4,
        hitDice: ["1d8"],
        abilities: []
      },
      9: {
        experiencePoints: 300001,
        attackBonus: 4,
        hitDice: ["1d8"],
        abilities: []
      },
      10: {
        experiencePoints: 425001,
        attackBonus: 5,
        hitDice: ["1d8"],
        abilities: []
      },
      11: {
        experiencePoints: 640001,
        attackBonus: 5,
        hitDice: ["+3 PG"],
        abilities: []
      },
      12: {
        experiencePoints: 900001,
        attackBonus: 6,
        hitDice: ["+3 PG"],
        abilities: []
      }
    }
  },
  Druid: {
    name: "Druida",
    mainAttribute: "sab",
    hitDice: 8,
    weapons: [
      weapons["Arco largo"],
      weapons["Arco corto"],
      weapons["Bastón"],
      weapons["Cimitarra"],
      weapons["Daga"],
      weapons["Espada corta"],
      weapons["Espada larga"],
      weapons["Garrote"],
      weapons["Guadaña"],
      weapons["Hacha de mano"],
      weapons["Honda"],
      weapons["Hoz"],
      weapons["Martillo de guerra"],
      weapons["Martillo ligero"],
      weapons["Maza"],
      weapons["Lanza"]
    ],
    // armor incluye todas las armaduras de cuero
    armor: [
      armors["Armadura de cuero acolchado"],
      armors["Armadura de cuero endurecido"],
      armors["Armadura de cuero tachonada"]
    ],
    level: {
      1: {
        experiencePoints: 0,
        attackBonus: 0,
        hitDice: ["1d8"],
        abilities: [
          "Conjuros divinos",
          "Conocimiento de la naturaleza (SAB)",
          "Lenguaje druídico"
        ]
      },
      2: {
        experiencePoints: 2251,
        attackBonus: 1,
        hitDice: ["1d8"],
        abilities: ["Resistencia a los elementos"]
      },
      3: {
        experiencePoints: 5001,
        attackBonus: 1,
        hitDice: ["1d8"],
        abilities: ["Zancada de la foresta"]
      },
      4: {
        experiencePoints: 9001,
        attackBonus: 2,
        hitDice: ["1d8"],
        abilities: []
      },
      5: {
        experiencePoints: 18001,
        attackBonus: 2,
        hitDice: ["1d8"],
        abilities: []
      },
      6: {
        experiencePoints: 35000,
        attackBonus: 3,
        hitDice: ["1d8"],
        abilities: ["Forma salvaje"]
      },
      7: {
        experiencePoints: 70001,
        attackBonus: 3,
        hitDice: ["1d8"],
        abilities: []
      },
      8: {
        experiencePoints: 140001,
        attackBonus: 4,
        hitDice: ["1d8"],
        abilities: []
      },
      9: {
        experiencePoints: 300001,
        attackBonus: 4,
        hitDice: ["1d8"],
        abilities: []
      },
      10: {
        experiencePoints: 425001,
        attackBonus: 5,
        hitDice: ["1d8"],
        abilities: []
      },
      11: {
        experiencePoints: 640001,
        attackBonus: 5,
        hitDice: ["+3 PG"],
        abilities: []
      },
      12: {
        experiencePoints: 900001,
        attackBonus: 6,
        hitDice: ["+3 PG"],
        abilities: []
      }
    }
  },
  Explorer: {
    name: "Explorador",
    mainAttribute: "fue",
    hitDice: 10,
    weapons: ["all"],
    armor: [
      armors["Armadura de cuero acolchado"],
      armors["Armadura de cuero endurecido"],
      armors["Armadura de cuero tachonada"],
      armors["Armadura de anillas"],
      armors["Armadura de varillas"],
      armors["Cota de escamas"],
      armors["Cota de malla"],
      armors["Peto de coraza"]
    ],
    level: {
      1: {
        experiencePoints: 0,
        attackBonus: 0,
        hitDice: ["1d10"],
        abilities: [
          "Camuflaje (DES)",
          "Escalar (DES)",
          "Maestría en combate",
          "Moverse en silencio (DES)"
          "Neutralizar venenos (SAB)",
          "Rastrear (SAB)",
          "Supervivencia (SAB)",
          "Trampero (SAB)",
        ]
      },
      2: {
        experiencePoints: 2251,
        attackBonus: 1,
        hitDice: ["1d10"],
        abilities: []
      },
      3: {
        experiencePoints: 4501,
        attackBonus: 2,
        hitDice: ["1d10"],
        abilities: []
      },
      4: {
        experiencePoints: 9001,
        attackBonus: 3,
        hitDice: ["1d10"],
        abilities: []
      },
      5: {
        experiencePoints: 18001,
        attackBonus: 4,
        hitDice: ["1d10"],
        abilities: []
      },
      6: {
        experiencePoints: 40001,
        attackBonus: 5,
        hitDice: ["1d10"],
        abilities: ["Enemigo usual"]
      },
      7: {
        experiencePoints: 75001,
        attackBonus: 6,
        hitDice: ["1d10"],
        abilities: []
      },
      8: {
        experiencePoints: 150001,
        attackBonus: 7,
        hitDice: ["1d10"],
        abilities: []
      },
      9: {
        experiencePoints: 250001,
        attackBonus: 8,
        hitDice: ["1d10"],
        abilities: []
      },
      10: {
        experiencePoints: 500001,
        attackBonus: 9,
        hitDice: ["1d10"],
        abilities: []
      },
      11: {
        experiencePoints: 725001,
        attackBonus: 10,
        hitDice: ["+4 PG"],
        abilities: []
      },
      12: {
        experiencePoints: 950001,
        attackBonus: 11,
        hitDice: ["+4 PG"],
        abilities: []
      }
    }
  },
  Fighter: {
    name: "Guerrero",
    mainAttribute: "fue",
    hitDice: 10,
    weapons: ["all"],
    armor: ["all"],
    level: {
      1: {
        experiencePoints: 0,
        attackBonus: 1,
        hitDice: ["1d10"],
        abilities: [
          "Especialización en armas"
        ]
      },
      2: {
        experiencePoints: 2001,
        attackBonus: 2,
        hitDice: ["1d10"],
        abilities: []
      },
      3: {
        experiencePoints: 4001,
        attackBonus: 3,
        hitDice: ["1d10"],
        abilities: []
      },
      4: {
        experiencePoints: 8501,
        attackBonus: 4,
        hitDice: ["1d10"],
        abilities: [
          "Maestría en combate",
        ]
      },
      5: {
        experiencePoints: 17001,
        attackBonus: 5,
        hitDice: ["1d10"],
        abilities: []
      },
      6: {
        experiencePoints: 34001,
        attackBonus: 6,
        hitDice: ["1d10"],
        abilities: ["Enemigo usual"]
      },
      7: {
        experiencePoints: 68001,
        attackBonus: 7,
        hitDice: ["1d10"],
        abilities: []
      },
      8: {
        experiencePoints: 136001,
        attackBonus: 8,
        hitDice: ["1d10"],
        abilities: []
      },
      9: {
        experiencePoints: 272001,
        attackBonus: 9,
        hitDice: ["1d10"],
        abilities: []
      },
      10: {
        experiencePoints: 500001,
        attackBonus: 10,
        hitDice: ["1d10"],
        abilities: ["Ataque extra"]
      },
      11: {
        experiencePoints: 750001,
        attackBonus: 11,
        hitDice: ["+4 PG"],
        abilities: []
      },
      12: {
        experiencePoints: 1000001,
        attackBonus: 12,
        hitDice: ["+4 PG"],
        abilities: []
      }
    }
  },
  Warrior: "Guerrero",
  Illusionist: "Ilusionista",
  Thief: "Ladrón",
  Wizard: "Mago",
  Mystic: "Místico",
  Paladin: "Paladín"
};

export { classes };
