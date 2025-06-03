import { describe, it, expect, vi, beforeEach } from "vitest";
import rollDice from "./roll-dice";
import hpGenerator from "./hp-generator";

// Mock de rollDice
vi.mock("./roll-dice", () => ({
  default: vi.fn()
}));

describe("hpGenerator", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should calculate hit points correctly", () => {
    // Define the parameters for the hit points generator
    const cases = [
      {
        level: 1,
        hitDice: 6,
        extraHitPoints: 2,
        constitutionModifier: 0,
        expectedResult: 3
      },
      {
        level: 10,
        hitDice: 10,
        extraHitPoints: 4,
        constitutionModifier: 2,
        expectedResult: 70
      },
      {
        level: 12,
        hitDice: 8,
        extraHitPoints: 3,
        constitutionModifier: 1,
        expectedResult: 58
      }
    ];

    cases.forEach(
      ({
        level,
        hitDice,
        extraHitPoints,
        constitutionModifier,
        expectedResult
      }) => {
        // Mock the rollDice function to always return half the maximum
        const rolls = level > 10 ? 10 : level;
        rollDice.mockReturnValue(hitDice / 2 * rolls);

        // Test the hit points generator with the defined parameters
        const result = hpGenerator(
          level,
          hitDice,
          extraHitPoints,
          constitutionModifier
        );

        // Check that the result matches the expected result
        expect(result).to.equal(expectedResult);
      }
    );
  });

  it("should not return less than 1", () => {
    // Define the parameters for the hit points generator
    const level = 1;
    const hitDice = 6;
    const extraHitPoints = 1;
    const constitutionModifier = -3;

    // Mock the rollDice function to always return 1
    rollDice.mockReturnValue(1);

    // Test the hit points generator with the defined parameters
    const result = hpGenerator(
      level,
      hitDice,
      extraHitPoints,
      constitutionModifier
    );

    // Check that the result is not less than 1
    expect(result).to.equal(1);
  });
});
