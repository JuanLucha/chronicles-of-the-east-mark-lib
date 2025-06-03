import { describe, it, expect } from "vitest";
import generatePrimaryStats from "./generate-primary-stats";

describe("generatePrimaryStats", () => {
  const allStats = ["str", "dex", "con", "int", "wis", "cha"];

  it("adds a stat to an empty array", () => {
    const stats = [];
    const newStats = generatePrimaryStats(stats);
    expect(newStats.length).to.equal(1);
    expect(allStats).to.include(newStats[0]);
  });

  it("adds a stat to a partially filled array", () => {
    const stats = ["str", "dex", "con"];
    const newStats = generatePrimaryStats(stats);
    expect(newStats.length).to.equal(4);
    allStats.forEach(stat => {
      if (stats.includes(stat)) {
        expect(newStats).to.include(stat);
      } else if (newStats.includes(stat)) {
        expect(newStats).to.include(stat);
        expect(stats).not.to.include(stat);
      } else {
        expect(newStats).not.to.include(stat);
      }
    });
  });

  it("returns the same array when all stats are already present", () => {
    const stats = ["str", "dex", "con", "int", "wis", "cha"];
    const newStats = generatePrimaryStats(stats);
    expect(newStats).to.deep.equal(stats);
  });
});
