import generatePrimaryStats from "./generate-primary-stats";

describe("generatePrimaryStats", () => {
  const allStats = ["str", "dex", "con", "int", "wis", "cha"];

  test("adds a stat to an empty array", () => {
    const stats = [];
    const newStats = generatePrimaryStats(stats);
    expect(newStats.length).toBe(1);
    expect(allStats).toContain(newStats[0]);
  });

  test("adds a stat to a partially filled array", () => {
    const stats = ["str", "dex", "con"];
    const newStats = generatePrimaryStats(stats);
    expect(newStats.length).toBe(4);
    allStats.forEach(stat => {
      if (stats.includes(stat)) {
        expect(newStats).toContain(stat);
      } else if (newStats.includes(stat)) {
        expect(newStats).toContain(stat);
        expect(stats).not.toContain(stat);
      } else {
        expect(newStats).not.toContain(stat);
      }
    });
  });

  test("returns the same array when all stats are already present", () => {
    const stats = ["str", "dex", "con", "int", "wis", "cha"];
    const newStats = generatePrimaryStats(stats);
    expect(newStats).toEqual(stats);
  });
});
