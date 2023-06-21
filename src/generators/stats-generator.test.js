import { generateStats, getModifier } from "./stats-generator";

describe("generateStats", () => {
  it("should return an object with six properties", () => {
    const stats = generateStats();
    expect(Object.keys(stats)).toHaveLength(6);
  });

  it("should generate numbers between 3 and 18, inclusive, for all stats", () => {
    for (let i = 0; i < 100; i++) {
      // ejecuta la prueba 100 veces
      const stats = generateStats();
      for (let key in stats) {
        expect(stats[key]).toBeGreaterThanOrEqual(3);
        expect(stats[key]).toBeLessThanOrEqual(18);
      }
    }
  });

  it("should contain the expected properties", () => {
    const stats = generateStats();
    expect(stats).toHaveProperty("str");
    expect(stats).toHaveProperty("dex");
    expect(stats).toHaveProperty("con");
    expect(stats).toHaveProperty("int");
    expect(stats).toHaveProperty("wis");
    expect(stats).toHaveProperty("cha");
  });
});

describe("getModifier", () => {
  it("should return the correct modifier", () => {
    const cases = [
      { stat: 1, modifier: -4 },
      { stat: 2, modifier: -3 },
      { stat: 3, modifier: -3 },
      { stat: 4, modifier: -2 },
      { stat: 5, modifier: -2 },
      { stat: 6, modifier: -1 },
      { stat: 7, modifier: -1 },
      { stat: 8, modifier: -1 },
      { stat: 9, modifier: 0 },
      { stat: 10, modifier: 0 },
      { stat: 11, modifier: 0 },
      { stat: 12, modifier: 0 },
      { stat: 13, modifier: 1 },
      { stat: 14, modifier: 1 },
      { stat: 15, modifier: 1 },
      { stat: 16, modifier: 2 },
      { stat: 17, modifier: 2 },
      { stat: 18, modifier: 3 },
      { stat: 19, modifier: 3 }
    ];

    cases.forEach(({ stat, modifier }) => {
      expect(getModifier(stat)).toEqual(modifier);
    });
  });
});
