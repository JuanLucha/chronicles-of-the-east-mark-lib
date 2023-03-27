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
        hitDice: ["1d6"],
        abilities: [
          "Alerta",
          "Instintos primitivos",
          "Intimidar (CON)",
          "Rastreador nato"
        ]
      },
      2: {
        experiencePoints: 1751,
        attackBonus: 1,
        hitDice: ["1d12"],
        abilities: []
      },
      3: {
        experiencePoints: 3501,
        attackBonus: 2,
        hitDice: ["1d12"],
        abilities: []
      },
      4: {
        experiencePoints: 7001,
        attackBonus: 3,
        hitDice: ["1d12"],
        abilities: ["Furia desatada"]
      },
      5: {
        experiencePoints: 14001,
        attackBonus: 4,
        hitDice: ["1d12"],
        abilities: []
      },
      6: {
        experiencePoints: 25001,
        attackBonus: 5,
        hitDice: ["1d12"],
        abilities: ["Aguante"]
      },
      7: {
        experiencePoints: 50001,
        attackBonus: 6,
        hitDice: ["1d12"],
        abilities: []
      },
      8: {
        experiencePoints: 90001,
        attackBonus: 7,
        hitDice: ["1d12"],
        abilities: []
      },
      9: {
        experiencePoints: 150001,
        attackBonus: 8,
        hitDice: ["1d12"],
        abilities: []
      },
      10: {
        experiencePoints: 200001,
        attackBonus: 9,
        hitDice: ["1d12"],
        abilities: ["Llamada ancestral"]
      },
      11: {
        experiencePoints: 350001,
        attackBonus: 10,
        hitDice: ["+5 PG"],
        abilities: []
      },
      12: {
        experiencePoints: 500001,
        attackBonus: 11,
        hitDice: ["+5 PG"],
        abilities: []
      }
    }
  },
  Bard: "Bardo",
  Knight: "Caballero",
  Cleric: "Clérigo",
  Druid: "Druida",
  Explorer: "Explorador",
  Warrior: "Guerrero",
  Illusionist: "Ilusionista",
  Thief: "Ladrón",
  Wizard: "Mago",
  Mystic: "Místico",
  Paladin: "Paladín"
};

export { classes };
