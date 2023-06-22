import { armors } from "./armors";
import { weapons } from "./weapons";

const classes = {
  assassin: {
    name: "Asesino",
    mainAttribute: "dex",
    hitDice: 6,
    extraHitPoints: 2,
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
        attackBonus: 1
      },
      3: {
        experiencePoints: 3501,
        attackBonus: 1
      },
      4: {
        experiencePoints: 7001,
        attackBonus: 1
      },
      5: {
        experiencePoints: 14001,
        attackBonus: 2
      },
      6: {
        experiencePoints: 25001,
        attackBonus: 2
      },
      7: {
        experiencePoints: 50001,
        attackBonus: 2
      },
      8: {
        experiencePoints: 90001,
        attackBonus: 3
      },
      9: {
        experiencePoints: 150001,
        attackBonus: 3
      },
      10: {
        experiencePoints: 200001,
        attackBonus: 3
      },
      11: {
        experiencePoints: 350001,
        attackBonus: 4
      },
      12: {
        experiencePoints: 500001,
        attackBonus: 4
      }
    }
  },
  barbarian: {
    name: "Bárbaro",
    mainAttribute: "str",
    hitDice: 12,
    extraHitPoints: 5,
    weapons: ["all"],
    armor: ["all"],
    level: {
      1: {
        experiencePoints: 0,
        attackBonus: 0,
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
        abilities: []
      },
      3: {
        experiencePoints: 4701,
        attackBonus: 2,
        abilities: []
      },
      4: {
        experiencePoints: 9401,
        attackBonus: 3,
        abilities: ["Furia desatada"]
      },
      5: {
        experiencePoints: 20001,
        attackBonus: 4,
        abilities: []
      },
      6: {
        experiencePoints: 40001,
        attackBonus: 5,
        abilities: ["Aguante"]
      },
      7: {
        experiencePoints: 80001,
        attackBonus: 6,
        abilities: []
      },
      8: {
        experiencePoints: 170001,
        attackBonus: 7,
        abilities: []
      },
      9: {
        experiencePoints: 340001,
        attackBonus: 8,
        abilities: []
      },
      10: {
        experiencePoints: 600001,
        attackBonus: 9,
        abilities: ["Llamada ancestral"]
      },
      11: {
        experiencePoints: 800001,
        attackBonus: 10,
        abilities: []
      },
      12: {
        experiencePoints: 1000001,
        attackBonus: 11,
        abilities: []
      }
    }
  },
  bard: {
    name: "Bardo",
    mainAttribute: "car",
    hitDice: 10,
    extraHitPoints: 4,
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
        abilities: ["Conocimiento de bardo (CAR)", "Exaltar (CAR)"]
      },
      2: {
        experiencePoints: 1501,
        attackBonus: 1,
        abilities: []
      },
      3: {
        experiencePoints: 3251,
        attackBonus: 2,
        abilities: []
      },
      4: {
        experiencePoints: 7501,
        attackBonus: 3,
        abilities: ["Fascinar"]
      },
      5: {
        experiencePoints: 15001,
        attackBonus: 4,
        abilities: []
      },
      6: {
        experiencePoints: 30001,
        attackBonus: 5,
        abilities: []
      },
      7: {
        experiencePoints: 60001,
        attackBonus: 6,
        abilities: []
      },
      8: {
        experiencePoints: 120001,
        attackBonus: 7,
        abilities: []
      },
      9: {
        experiencePoints: 240001,
        attackBonus: 8,
        abilities: ["Infundir valor"]
      },
      10: {
        experiencePoints: 450001,
        attackBonus: 9,
        abilities: []
      },
      11: {
        experiencePoints: 625001,
        attackBonus: 10,
        abilities: []
      },
      12: {
        experiencePoints: 800001,
        attackBonus: 11,
        abilities: []
      }
    }
  },
  knight: {
    name: "Caballero",
    mainAttribute: "car",
    hitDice: 10,
    extraHitPoints: 4,
    weapons: ["all"],
    armor: ["all"],
    level: {
      1: {
        experiencePoints: 0,
        attackBonus: 0,
        abilities: [
          "Inspirar coraje",
          "Montura de caballero",
          "Jinete experto (DES)"
        ]
      },
      2: {
        experiencePoints: 2251,
        attackBonus: 1,
        abilities: []
      },
      3: {
        experiencePoints: 4501,
        attackBonus: 2,
        abilities: ["Arrojo"]
      },
      4: {
        experiencePoints: 9001,
        attackBonus: 3,
        abilities: []
      },
      5: {
        experiencePoints: 18001,
        attackBonus: 4,
        abilities: ["Desmoralizar"]
      },
      6: {
        experiencePoints: 36001,
        attackBonus: 5,
        abilities: []
      },
      7: {
        experiencePoints: 72001,
        attackBonus: 6,
        abilities: []
      },
      8: {
        experiencePoints: 150001,
        attackBonus: 7,
        abilities: ["Dominio del campo de batalla"]
      },
      9: {
        experiencePoints: 300001,
        attackBonus: 8,
        abilities: []
      },
      10: {
        experiencePoints: 600001,
        attackBonus: 9,
        abilities: ["Llamada a las armas"]
      },
      11: {
        experiencePoints: 725001,
        attackBonus: 10,
        abilities: []
      },
      12: {
        experiencePoints: 900001,
        attackBonus: 11,
        abilities: []
      }
    }
  },
  cleric: {
    name: "Clérigo",
    mainAttribute: "sab",
    hitDice: 8,
    extraHitPoints: 3,
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
        abilities: ["Conjuros divinos", "Expulsar muertos vivientes"]
      },
      2: {
        experiencePoints: 2251,
        attackBonus: 1,
        abilities: []
      },
      3: {
        experiencePoints: 5001,
        attackBonus: 1,
        abilities: []
      },
      4: {
        experiencePoints: 9001,
        attackBonus: 2,
        abilities: []
      },
      5: {
        experiencePoints: 18001,
        attackBonus: 2,
        abilities: []
      },
      6: {
        experiencePoints: 35000,
        attackBonus: 3,
        abilities: []
      },
      7: {
        experiencePoints: 70001,
        attackBonus: 3,
        abilities: []
      },
      8: {
        experiencePoints: 140001,
        attackBonus: 4,
        abilities: []
      },
      9: {
        experiencePoints: 300001,
        attackBonus: 4,
        abilities: []
      },
      10: {
        experiencePoints: 425001,
        attackBonus: 5,
        abilities: []
      },
      11: {
        experiencePoints: 640001,
        attackBonus: 5,
        abilities: []
      },
      12: {
        experiencePoints: 900001,
        attackBonus: 6,
        abilities: []
      }
    }
  },
  druid: {
    name: "Druida",
    mainAttribute: "sab",
    hitDice: 8,
    extraHitPoints: 3,
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
        abilities: [
          "Conjuros divinos",
          "Conocimiento de la naturaleza (SAB)",
          "Lenguaje druídico"
        ]
      },
      2: {
        experiencePoints: 2251,
        attackBonus: 1,
        abilities: ["Resistencia a los elementos"]
      },
      3: {
        experiencePoints: 5001,
        attackBonus: 1,
        abilities: ["Zancada de la foresta"]
      },
      4: {
        experiencePoints: 9001,
        attackBonus: 2,
        abilities: []
      },
      5: {
        experiencePoints: 18001,
        attackBonus: 2,
        abilities: []
      },
      6: {
        experiencePoints: 35000,
        attackBonus: 3,
        abilities: ["Forma salvaje"]
      },
      7: {
        experiencePoints: 70001,
        attackBonus: 3,
        abilities: []
      },
      8: {
        experiencePoints: 140001,
        attackBonus: 4,
        abilities: []
      },
      9: {
        experiencePoints: 300001,
        attackBonus: 4,
        abilities: []
      },
      10: {
        experiencePoints: 425001,
        attackBonus: 5,
        abilities: []
      },
      11: {
        experiencePoints: 640001,
        attackBonus: 5,
        abilities: []
      },
      12: {
        experiencePoints: 900001,
        attackBonus: 6,
        abilities: []
      }
    }
  },
  explorer: {
    name: "Explorador",
    mainAttribute: "fue",
    hitDice: 10,
    extraHitPoints: 4,
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
        abilities: [
          "Camuflaje (DES)",
          "Escalar (DES)",
          "Maestría en combate",
          "Moverse en silencio (DES)",
          "Neutralizar venenos (SAB)",
          "Rastrear (SAB)",
          "Supervivencia (SAB)",
          "Trampero (SAB)"
        ]
      },
      2: {
        experiencePoints: 2251,
        attackBonus: 1,
        abilities: []
      },
      3: {
        experiencePoints: 4501,
        attackBonus: 2,
        abilities: []
      },
      4: {
        experiencePoints: 9001,
        attackBonus: 3,
        abilities: []
      },
      5: {
        experiencePoints: 18001,
        attackBonus: 4,
        abilities: []
      },
      6: {
        experiencePoints: 40001,
        attackBonus: 5,
        abilities: ["Enemigo usual"]
      },
      7: {
        experiencePoints: 75001,
        attackBonus: 6,
        abilities: []
      },
      8: {
        experiencePoints: 150001,
        attackBonus: 7,
        abilities: []
      },
      9: {
        experiencePoints: 250001,
        attackBonus: 8,
        abilities: []
      },
      10: {
        experiencePoints: 500001,
        attackBonus: 9,
        abilities: []
      },
      11: {
        experiencePoints: 725001,
        attackBonus: 10,
        abilities: []
      },
      12: {
        experiencePoints: 950001,
        attackBonus: 11,
        abilities: []
      }
    }
  },
  fighter: {
    name: "Guerrero",
    mainAttribute: "fue",
    hitDice: 10,
    extraHitPoints: 4,
    weapons: ["all"],
    armor: ["all"],
    level: {
      1: {
        experiencePoints: 0,
        attackBonus: 1,
        abilities: ["Especialización en armas"]
      },
      2: {
        experiencePoints: 2001,
        attackBonus: 2,
        abilities: []
      },
      3: {
        experiencePoints: 4001,
        attackBonus: 3,
        abilities: []
      },
      4: {
        experiencePoints: 8501,
        attackBonus: 4,
        abilities: ["Maestría en combate"]
      },
      5: {
        experiencePoints: 17001,
        attackBonus: 5,
        abilities: []
      },
      6: {
        experiencePoints: 34001,
        attackBonus: 6,
        abilities: ["Enemigo usual"]
      },
      7: {
        experiencePoints: 68001,
        attackBonus: 7,
        abilities: []
      },
      8: {
        experiencePoints: 136001,
        attackBonus: 8,
        abilities: []
      },
      9: {
        experiencePoints: 272001,
        attackBonus: 9,
        abilities: []
      },
      10: {
        experiencePoints: 500001,
        attackBonus: 10,
        abilities: ["Ataque extra"]
      },
      11: {
        experiencePoints: 750001,
        attackBonus: 11,
        abilities: []
      },
      12: {
        experiencePoints: 1000001,
        attackBonus: 12,
        abilities: []
      }
    }
  },
  illusionist: {
    name: "Ilusionista",
    mainAttribute: "int",
    hitDice: 4,
    extraHitPoints: 1,
    weapons: [
      weapons["Bastón"],
      weapons["Daga"],
      weapons["Dardo"],
      weapons["Garrote"]
    ],
    armor: [],
    level: {
      1: {
        experiencePoints: 0,
        attackBonus: 0,
        abilities: ["Conjuros arcanos", "Sentidos aguzados", "Disfraz (CAR)"]
      },
      2: {
        experiencePoints: 2601,
        attackBonus: 1,
        abilities: []
      },
      3: {
        experiencePoints: 5201,
        attackBonus: 1,
        abilities: []
      },
      4: {
        experiencePoints: 10401,
        attackBonus: 1,
        abilities: []
      },
      5: {
        experiencePoints: 20801,
        attackBonus: 1,
        abilities: []
      },
      6: {
        experiencePoints: 42501,
        attackBonus: 2,
        abilities: []
      },
      7: {
        experiencePoints: 85001,
        attackBonus: 2,
        abilities: []
      },
      8: {
        experiencePoints: 170001,
        attackBonus: 2,
        abilities: []
      },
      9: {
        experiencePoints: 340001,
        attackBonus: 2,
        abilities: []
      },
      10: {
        experiencePoints: 500001,
        attackBonus: 3,
        abilities: []
      },
      11: {
        experiencePoints: 750001,
        attackBonus: 3,
        abilities: []
      },
      12: {
        experiencePoints: 900001,
        attackBonus: 3,
        abilities: []
      }
    }
  },
  thief: {
    name: "Ladrón",
    mainAttribute: "des",
    hitDice: 6,
    extraHitPoints: 2,
    weapons: ["all"],
    armor: [
      armors["Armadura de cuero"],
      armors["Armadura de cuero acolchado"],
      armors["Armadura de cuero endurecido"]
    ],
    level: {
      1: {
        experiencePoints: 0,
        attackBonus: 0,
        abilities: [
          "Abrir cerraduras (DES)",
          "Ataque por la espalda",
          "Descifrar escritura (INT)",
          "Escalar muros (DES)",
          "Esconderse (DES)",
          "Escuchar (SAB)",
          "Germanía",
          "Montar y desmontar trampas (INT)",
          "Moverse en silencio (DES)",
          "Hurtar (DES)"
        ]
      },
      2: {
        experiencePoints: 1251,
        attackBonus: 1,
        abilities: []
      },
      3: {
        experiencePoints: 2501,
        attackBonus: 1,
        abilities: []
      },
      4: {
        experiencePoints: 6001,
        attackBonus: 1,
        abilities: ["Ataque furtivo"]
      },
      5: {
        experiencePoints: 12001,
        attackBonus: 2,
        abilities: []
      },
      6: {
        experiencePoints: 24001,
        attackBonus: 2,
        abilities: []
      },
      7: {
        experiencePoints: 48001,
        attackBonus: 2,
        abilities: []
      },
      8: {
        experiencePoints: 80001,
        attackBonus: 3,
        abilities: []
      },
      9: {
        experiencePoints: 120001,
        attackBonus: 3,
        abilities: []
      },
      10: {
        experiencePoints: 175001,
        attackBonus: 3,
        abilities: []
      },
      11: {
        experiencePoints: 325001,
        attackBonus: 4,
        abilities: []
      },
      12: {
        experiencePoints: 450001,
        attackBonus: 4,
        abilities: []
      }
    }
  },
  wizard: {
    name: "Mago",
    mainAttribute: "int",
    hitDice: 4,
    extraHitPoints: 1,
    weapons: [
      weapons["Bastón"],
      weapons["Daga"],
      weapons["Dardo"],
      weapons["Garrote"]
    ],
    armor: [],
    level: {
      1: {
        experiencePoints: 0,
        attackBonus: 0,
        abilities: ["Conjuros arcanos"]
      },
      2: {
        experiencePoints: 2601,
        attackBonus: 1,
        abilities: []
      },
      3: {
        experiencePoints: 5201,
        attackBonus: 1,
        abilities: []
      },
      4: {
        experiencePoints: 10401,
        attackBonus: 1,
        abilities: []
      },
      5: {
        experiencePoints: 20801,
        attackBonus: 1,
        abilities: []
      },
      6: {
        experiencePoints: 42501,
        attackBonus: 2,
        abilities: []
      },
      7: {
        experiencePoints: 85001,
        attackBonus: 2,
        abilities: []
      },
      8: {
        experiencePoints: 170001,
        attackBonus: 2,
        abilities: []
      },
      9: {
        experiencePoints: 340001,
        attackBonus: 2,
        abilities: []
      },
      10: {
        experiencePoints: 500001,
        attackBonus: 3,
        abilities: []
      },
      11: {
        experiencePoints: 750001,
        attackBonus: 3,
        abilities: []
      },
      12: {
        experiencePoints: 1000001,
        attackBonus: 3,
        abilities: []
      }
    }
  },
  mystic: {
    name: "Místico",
    mainAttribute: "con",
    hitDice: 12,
    extraHitPoints: 5,
    weapons: [
      weapons["Alabarda"],
      weapons["Bastón"],
      weapons["Cachiporra"],
      weapons["Cerbatana"],
      weapons["Cimitarra"],
      weapons["Daga"],
      weapons["Daga de plata"],
      weapons["Dardo"],
      weapons["Espada corta"],
      weapons["Espada larga"],
      weapons["Estoque"],
      weapons["Garrote"],
      weapons["Guadaña"],
      weapons["Gran hacha"],
      weapons["Hacha de mano"],
      weapons["Honda"],
      weapons["Hoz"],
      weapons["Jabalina"],
      weapons["Lanza"],
      weapons["Látigo"],
      weapons["Lucero del alba"],
      weapons["Martillo ligero"],
      weapons["Maza"]
    ],
    armor: [],
    level: {
      1: {
        experiencePoints: 0,
        attackBonus: 0,
        abilities: [
          "Artes marciales",
          "Ataque aturdidor",
          "Movimiento rápido",
          "Resistencia superior"
        ]
      },
      2: {
        experiencePoints: 1751,
        attackBonus: 1,
        abilities: ["Esquivar proyectiles (DES)"]
      },
      3: {
        experiencePoints: 4001,
        attackBonus: 2,
        abilities: ["Puño de hierro"]
      },
      4: {
        experiencePoints: 8501,
        attackBonus: 3,
        abilities: ["Caída ralentizada"]
      },
      5: {
        experiencePoints: 20001,
        attackBonus: 4,
        abilities: []
      },
      6: {
        experiencePoints: 40001,
        attackBonus: 5,
        abilities: ["Enlentecimiento vital"]
      },
      7: {
        experiencePoints: 80001,
        attackBonus: 6,
        abilities: ["Curación rápida"]
      },
      8: {
        experiencePoints: 160001,
        attackBonus: 7,
        abilities: []
      },
      9: {
        experiencePoints: 325001,
        attackBonus: 8,
        abilities: ["Mente preclara"]
      },
      10: {
        experiencePoints: 550001,
        attackBonus: 9,
        abilities: ["Impacto letal"]
      },
      11: {
        experiencePoints: 750001,
        attackBonus: 10,
        abilities: []
      },
      12: {
        experiencePoints: 1250001,
        attackBonus: 11,
        abilities: []
      }
    }
  },
  paladin: {
    name: "Paladín",
    mainAttribute: "car",
    hitDice: 10,
    extraHitPoints: 4,
    weapons: ["all"],
    armor: ["all"],
    level: {
      1: {
        experiencePoints: 0,
        attackBonus: 0,
        abilities: [
          "Aura divina",
          "Curar enfermedad",
          "Detectar el mal",
          "Resistencia divina",
          "Sanar con las manos"
        ]
      },
      2: {
        experiencePoints: 2701,
        attackBonus: 1,
        abilities: []
      },
      3: {
        experiencePoints: 5501,
        attackBonus: 2,
        abilities: ["Expulsar muertos vivientes"]
      },
      4: {
        experiencePoints: 12001,
        attackBonus: 3,
        abilities: ["Montura divina"]
      },
      5: {
        experiencePoints: 24001,
        attackBonus: 4,
        abilities: []
      },
      6: {
        experiencePoints: 48001,
        attackBonus: 5,
        abilities: ["Aura de coraje"]
      },
      7: {
        experiencePoints: 95001,
        attackBonus: 6,
        abilities: []
      },
      8: {
        experiencePoints: 180001,
        attackBonus: 7,
        abilities: []
      },
      9: {
        experiencePoints: 360001,
        attackBonus: 8,
        abilities: ["Castigar el mal"]
      },
      10: {
        experiencePoints: 700001,
        attackBonus: 9,
        abilities: []
      },
      11: {
        experiencePoints: 1000001,
        attackBonus: 10,
        abilities: []
      },
      12: {
        experiencePoints: 1300001,
        attackBonus: 11,
        abilities: ["Curación divina"]
      }
    }
  }
};

export { classes };
