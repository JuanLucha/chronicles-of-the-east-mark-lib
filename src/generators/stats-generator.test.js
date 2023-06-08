import { generateStats } from "./stats-generator";

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
