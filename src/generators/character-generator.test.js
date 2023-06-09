import generateCharacter from "./character-generator";
import { generateStats } from "./stats-generator";
import { ancestries } from "../data/ancestries";
import { classes } from "../data/classes";
import { sizes } from "../data/sizes";

jest.mock("./stats-generator", () => {
  return {
    generateStats: jest.fn()
  };
});

describe("generateCharacter", () => {
  const characterName = "Ravencrow";

  beforeEach(() => {});

  it("should add the ancestry modifiers correctly to the stats", () => {
    const level = 1;
    const characterClass = "warrior";
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
    const characterClass = "warrior";
    const ancestry = "human";
    const character = generateCharacter(
      characterName,
      ancestry,
      characterClass,
      level
    );

    expect(character).toHaveProperty("name", characterName);
    expect(character).toHaveProperty("ancestry", ancestry);
    expect(character).toHaveProperty("class", characterClass);
    expect(character).toHaveProperty("level", level);
    expect(character).toHaveProperty("attackBonus");
    expect(character).toHaveProperty("armorClass");
    expect(character).toHaveProperty("hitPoints");
    expect(character).toHaveProperty("weapons");
    expect(character).toHaveProperty("armor");
    expect(character).toHaveProperty("traits");
    expect(character).toHaveProperty("stats");
    expect(character).toHaveProperty("extra");
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
            classes.Warrior,
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
            classes.Warrior,
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
            classes.Warrior,
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
            classes.Warrior,
            classes.Thief
          ]
        }
      }
    ];

    cases.forEach(({ ancestry, traits }) => {
      const characterClass = "warrior";
      const level = 1;
      const character = generateCharacter(
        characterName,
        ancestry,
        characterClass,
        level
      );
      expect(character.traits).toEqual(traits);
    });
  });
});
