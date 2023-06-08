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

    // expect(character).toHaveProperty("name", testName);
    // expect(character).toHaveProperty("ancestry", testAncestry);
    // expect(character).toHaveProperty("class", testClass);
    // expect(character).toHaveProperty("level", testLevel);
    // expect(character).toHaveProperty("attackBonus");
    // expect(character).toHaveProperty("armorClass");
    // expect(character).toHaveProperty("hitPoints");
    // expect(character).toHaveProperty("weapons");
    // expect(character).toHaveProperty("armor");
    // expect(character).toHaveProperty("traits");
    // expect(character).toHaveProperty("stats");
    // expect(character).toHaveProperty("extra");
  });

  // it("should correctly apply ancestry modifiers to stats", () => {
  //   const character = generateCharacter(
  //     testName,
  //     testAncestry,
  //     testClass,
  //     testLevel
  //   );
  //   const ancestryModifiers = ancestries[testAncestry].modifiers;

  //   for (let stat in ancestryModifiers) {
  //     // In this test, we're assuming that the base value for each stat is 0.
  //     expect(character.stats[stat]).toBe(ancestryModifiers[stat]);
  //   }
  // });

  // Add more tests as necessary...
});
