import { describe, it, expect, beforeEach, vi } from "vitest";
import { generateCharacter } from "./character-generator";
import { generateStats, getModifier } from "./stats-generator";
import { ancestries } from "../data/ancestries";
import { classes } from "../data/classes";
import { sizes } from "../data/sizes";
import { weapons } from "../data/weapons";

// Mock de generateStats
vi.mock("./stats-generator", async () => {
  const actual = await vi.importActual("./stats-generator");
  return {
    ...actual,
    generateStats: vi.fn()
  };
});

describe("generateCharacter", () => {
  const characterName = "Ravencrow";

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should add the ancestry modifiers correctly to the stats", () => {
    const level = 1;
    const characterClass = "fighter";
    const cases = [
      {
        ancestry: "human",
        stats: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 }
      },
      {
        ancestry: "half-orc",
        stats: { str: 11, dex: 10, con: 11, int: 10, wis: 10, cha: 8 }
      },
      {
        ancestry: "elf",
        stats: { str: 10, dex: 11, con: 9, int: 10, wis: 10, cha: 10 }
      },
      {
        ancestry: "gnome",
        stats: { str: 9, dex: 10, con: 10, int: 11, wis: 10, cha: 10 }
      }
    ];
    generateStats.mockReturnValue({
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      wis: 10,
      cha: 10
    });

    cases.forEach(({ ancestry, stats }) => {
      generateStats.mockReset();
      generateStats.mockReturnValue({
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wis: 10,
        cha: 10
      });
      const character = generateCharacter(
        characterName,
        ancestry,
        characterClass,
        level
      );
      expect(character.stats).toEqual(stats);
    });
  });

  it("should generate a character object with the right properties", () => {
    const level = 1;
    const characterClass = "fighter";
    const ancestry = "human";
    const character = generateCharacter(
      characterName,
      ancestry,
      characterClass,
      level
    );

    expect(character).to.have.property("name", characterName);
    expect(character).to.have.property("ancestry", ancestry);
    expect(character).to.have.property("class", characterClass);
    expect(character).to.have.property("level", level);
    expect(character).to.have.property("attackBonus");
    expect(character).to.have.property("armorClass");
    expect(character).to.have.property("hitPoints");
    expect(character).to.have.property("weapons");
    expect(character).to.have.property("armor");
    expect(character).to.have.property("ancestryTraits");
    expect(character).to.have.property("classTraits");
    expect(character).to.have.property("stats");
    expect(character).to.have.property("extra");
  });

  it("should add the correct ancestry traits", () => {
    const cases = [
      {
        ancestry: "elf",
        traits: {
          size: "mediano",
          speed: 10,
          languages: [
            "común",
            "élfico",
            "enano",
            "orco",
            "goblin",
            "halfling",
            "dracónico"
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
        }
      },
      {
        ancestry: "dwarf",
        traits: {
          size: "pequeño",
          speed: 6,
          languages: [
            "común",
            "enano",
            "gnomo",
            "orco",
            "goblin",
            "halfling",
            "ogro",
            "gigante",
            "trol"
          ],
          preferredClass: [
            classes.Barbarian,
            classes.Cleric,
            classes.Bard,
            classes.Fighter,
            classes.Thief
          ]
        }
      },
      {
        ancestry: "drow",
        traits: {
          size: "mediano",
          speed: 10,
          languages: [
            "común",
            "élfico",
            "enano",
            "dracónico",
            "halfling",
            "goblin",
            "orco"
          ],
          preferredClass: [
            classes.Assassin,
            classes.Cleric,
            classes.Explorer,
            classes.Fighter,
            classes.Wizard,
            classes.Thief
          ]
        }
      },
      {
        ancestry: "halfling",
        traits: {
          size: "pequeño",
          speed: 6,
          languages: [
            "común",
            "halfling",
            "enano",
            "élfico",
            "gnomo",
            "goblin"
          ],
          preferredClass: [
            classes.Bard,
            classes.Cleric,
            classes.Druid,
            classes.Explorer,
            classes.Fighter,
            classes.Thief
          ]
        }
      }
    ];

    cases.forEach(({ ancestry, traits }) => {
      const characterClass = "fighter";
      const level = 1;
      const character = generateCharacter(
        characterName,
        ancestry,
        characterClass,
        level
      );
      expect(character.ancestryTraits).toEqual(traits);
    });
  });

  it("should add the correct class stat benefits", () => {
    const cases = [
      {
        class: "fighter",
        ancestry: "human",
        level: 5,
        traits: {
          mainAttribute: "fue",
          hitDice: 10,
          extraHitPoints: 4,
          weapons: ["all"],
          armor: ["all"],
          experiencePoints: 17001,
          attackBonus: 5,
          abilities: ["Especialización en armas", "Maestría en combate"],
          numberOfPrimaryStats: 3
        }
      },
      {
        class: "Wizard",
        ancestry: "dwarf",
        level: 10,
        traits: {
          mainAttribute: "fue",
          hitDice: 4,
          extraHitPoints: 1,
          weapons: [
            weapons["Bastón"],
            weapons["Daga"],
            weapons["Dardo"],
            weapons["Garrote"]
          ],
          armor: [],
          experiencePoints: 500001,
          attackBonus: 3,
          abilities: ["Conjuros arcanos"],
          numberOfPrimaryStats: 2
        }
      },
      {
        class: "Paladin",
        ancestry: "elf",
        level: 12,
        traits: {
          mainAttribute: "fue",
          hitDice: 10,
          extraHitPoints: 4,
          weapons: ["all"],
          armor: ["all"],
          experiencePoints: 1300001,
          attackBonus: 11,
          abilities: [
            "Aura divina",
            "Curar enfermedad",
            "Detectar el mal",
            "Resistencia divina",
            "Sanar con las manos",
            "Expulsar muertos vivientes",
            "Montura divina",
            "Aura de coraje",
            "Castigar el mal",
            "Curación divina"
          ],
          numberOfPrimaryStats: 2
        }
      }
    ];

    cases.forEach(({ class: characterClass, level, traits, ancestry }) => {
      const character = generateCharacter(
        characterName,
        ancestry,
        characterClass,
        level
      );
      expect(character.level).toEqual(level);
      expect(character.class).toEqual(characterClass);
      expect(character.classTraits.hitDice).toEqual(traits.hitDice);
      expect(character.classTraits.extraHitPoints).toEqual(
        traits.extraHitPoints
      );
      expect(character.classTraits.weapons).toEqual(traits.weapons);
      expect(character.classTraits.armor).toEqual(traits.armor);
      expect(character.experiencePoints).toEqual(traits.experiencePoints);
      expect(character.attackBonus).toEqual(traits.attackBonus);
      expect(character.classTraits.abilities).toEqual(traits.abilities);
      expect(character.primaryStats.length).toEqual(
        traits.numberOfPrimaryStats
      );
    });
  });
});
