import {
  languages,
  getRandomLanguage,
  getRandomLanguageOtherThan
} from "./languages.js";
import { classes } from "./classes.js";
import { sizes } from "./sizes.js";

export const ancestries = {
  human: {
    name: "Humano",
    modifiers: {
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0
    },
    traits: {
      size: sizes.Medium,
      speed: 10,
      languages: [
        languages.Common,
        getRandomLanguageOtherThan([languages.Common])
      ],
      preferredClass: [
        classes.Assassin,
        classes.Barbarian,
        classes.Bard,
        classes.Knight,
        classes.Cleric,
        classes.Druid,
        classes.Explorer,
        classes.Fighter,
        classes.Illusionist,
        classes.Thief,
        classes.Wizard,
        classes.Mystic,
        classes.Paladin
      ]
    },
    special: []
  },
  elf: {
    name: "Elfo",
    modifiers: {
      str: 0,
      dex: 1,
      con: -1,
      int: 0,
      wis: 0,
      cha: 0
    },
    traits: {
      size: sizes.Medium,
      speed: 10,
      languages: [
        languages.Common,
        languages.Elvish,
        languages.Dwarvish,
        languages.Orc,
        languages.Goblin,
        languages.Halfling,
        languages.Draconic
      ],
      preferredClass: [
        classes.Bard,
        classes.Knight,
        classes.Druid,
        classes.Explorer,
        classes.Fighter,
        classes.Wizard,
        classes.Thief
      ]
    },
    special: [
      "ModifiCadores CoMo explorador: +2 a moverse en silencio, +2 a encontrar trampas.",
      "ModifiCadores CoMo asesino o ladrón: +2 a escuchar, +2 a moverse en silencio, +2 a encontrar trampas.",
      "Visión en la penumbra",
      "Detectar puertas secretas (SAB)",
      "Entrenamiento marcial",
      "Moverse en silencio (DES)",
      "Resistencia a los conjuros (SAB)",
      "Sentidos afinados"
    ]
  },
  drow: {
    name: "Drow",
    modifiers: {
      str: 0,
      dex: 1,
      con: -1,
      int: 0,
      wis: 0,
      cha: 0
    },
    traits: {
      size: sizes.Medium,
      speed: 10,
      languages: [
        languages.Common,
        languages.Elvish,
        languages.Dwarvish,
        languages.Draconic,
        languages.Halfling,
        languages.Goblin,
        languages.Orc
      ],
      preferredClass: [
        classes.Assassin,
        classes.Cleric,
        classes.Explorer,
        classes.Fighter,
        classes.Wizard,
        classes.Thief
      ]
    },
    special: [
      "ModifiCadores CoMo explorador: +2 a moverse en silencio, +2 a encontrar trampas.",
      "ModifiCadores CoMo asesino o ladrón: +2 a escuchar, +2 a moverse en silencio, +2 a encontrar trampas.",
      "Infravisión",
      "Detectar puertas secretas (SAB)",
      "Moverse en silencio (DES)",
      "Resistencia a los conjuros",
      "Resistencia a venenos",
      "Sentidos afinados"
    ]
  },
  dwarf: {
    name: "Enano",
    modifiers: {
      str: 0,
      dex: -1,
      con: 1,
      int: 0,
      wis: 0,
      cha: 0
    },
    traits: {
      size: sizes.Small,
      speed: 6,
      languages: [
        languages.Common,
        languages.Dwarvish,
        languages.Gnomish,
        languages.Orc,
        languages.Goblin,
        languages.Halfling,
        languages.Ogre,
        languages.Giant,
        languages.Troll
      ],
      preferredClass: [
        classes.Barbarian,
        classes.Cleric,
        classes.Bard,
        classes.Fighter,
        classes.Thief
      ]
    },
    special: [
      "ModifiCadores CoMo asesino o ladrón: +2 a encontrar trampas en el interior de construcciones.",
      "Afinidad con la piedra (SAB)",
      "Agallas",
      "Desconfianza hacia los elfos",
      "Enemistad ancestral",
      "Infravisión",
      "Resistencia a la magia arcana",
      "Resistencia a los venenos (CON)",
      "Sentido subterráneo",
      "Técnicas defensivas"
    ]
  },
  gnome: {
    name: "Gnomo",
    modifiers: {
      str: -1,
      dex: 0,
      con: 0,
      int: 1,
      wis: 0,
      cha: 0
    },
    traits: {
      size: sizes.Small,
      speed: 6,
      languages: [
        languages.Common,
        languages.Gnomish,
        languages.Dwarvish,
        languages.Elvish,
        languages.Halfling,
        languages.Goblin,
        languages.Kobold
      ],
      preferredClass: [
        classes.Illusionist,
        classes.Druid,
        classes.Bard,
        classes.Thief
      ]
    },
    special: [
      "ModifiCadores CoMo asesino o ladrón: +3 a escuchar.",
      "Afinidad animal",
      "Afinidad mágica",
      "Enemistad ancestral",
      "Infravisión",
      "Oído excepcional"
    ]
  },
  halfling: {
    name: "Halfling",
    modifiers: {
      str: -1,
      dex: 1,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0
    },
    traits: {
      size: sizes.Small,
      speed: 6,
      languages: [
        languages.Common,
        languages.Halfling,
        languages.Dwarvish,
        languages.Elvish,
        languages.Gnomish,
        languages.Goblin
      ],
      preferredClass: [
        classes.Bard,
        classes.Cleric,
        classes.Druid,
        classes.Explorer,
        classes.Fighter,
        classes.Thief
      ]
    },
    special: [
      "ModifiCadores CoMo explorador: +2 a camuflaje, +2 a moverse en silencio.",
      "ModifiCadores CoMo asesino o ladrón: +2 a moverse en silencio, +2 a esconderse.",
      "Osadía",
      "Esconderse (DES)",
      "Moverse en silencio (DES)",
      "Visión en la penumbra",
      "Vitalidad"
    ]
  },
  "half-elf": {
    name: "Semielfo",
    modifiers: {
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0
    },
    traits: {
      size: sizes.Medium,
      speed: 10,
      languages: [
        languages.Common,
        languages.Elvish,
        languages.Dwarvish,
        languages.Halfling,
        getRandomLanguageOtherThan([
          languages.Common,
          languages.Elvish,
          languages.Dwarvish,
          languages.Halfling
        ])
      ],
      preferredClass: [
        classes.Assassin,
        classes.Barbarian,
        classes.Bard,
        classes.Knight,
        classes.Cleric,
        classes.Druid,
        classes.Explorer,
        classes.Fighter,
        classes.Illusionist,
        classes.Thief,
        classes.Wizard,
        classes.Mystic,
        classes.Paladin
      ]
    },
    special: [
      "ModifiCadores CoMo explorador: +2 moverse en silen- cio, +2 encontrar trampas.",
      "ModifiCadores CoMo asesino o ladrón: +2 a escuchar, +2 moverse en silencio, +2 encontrar trampas.",
      "Detectar mentiras",
      "Empatía",
      "Moverse en silencio (DES)",
      "Resistencia a los conjuros (SAB)",
      "Sentidos afinados"
    ]
  },
  "half-orc": {
    name: "Semiorco",
    modifiers: {
      str: 1,
      dex: 0,
      con: 1,
      int: 0,
      wis: 0,
      cha: -2
    },
    traits: {
      size: sizes.Medium,
      speed: 10,
      languages: [
        languages.Common,
        languages.Orc,
        languages.Goblin,
        getRandomLanguageOtherThan([
          languages.Common,
          languages.Orc,
          languages.Goblin
        ])
      ],
      preferredClass: [
        classes.Assassin,
        classes.Barbarian,
        classes.Cleric,
        classes.Explorer,
        classes.Fighter,
        classes.Thief
      ]
    },
    special: [
      "ModifiCadores CoMo explorador: +2 a rastrear.",
      "Infravisión",
      "Instinto de supervivencia",
      "Olfato desarrollado",
      "Resistencia a las enfermedades"
    ]
  }
};
