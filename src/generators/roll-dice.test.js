import { describe, it, expect, vi, afterEach } from "vitest";
import rollDice from "./roll-dice";

describe("rollDice", () => {
  const diceTypes = [4, 6, 8, 10, 12, 20];
  const randomValues = [0, 0.5, 0.999999];

  afterEach(() => {
    vi.restoreAllMocks();
  });

  diceTypes.forEach(diceType => {
    randomValues.forEach(randomValue => {
      it(`should correctly calculate the result for d${diceType} with Math.random() returning ${randomValue}`, () => {
        const mathRandomSpy = vi
          .spyOn(Math, "random")
          .mockReturnValue(randomValue);

        const result = rollDice(1, diceType);

        let expected;
        if (randomValue === 0) {
          expected = 1;
        } else if (randomValue === 0.5) {
          expected = Math.floor(diceType / 2) + 1;
        } else {
          expected = diceType;
        }

        expect(result).to.equal(expected);

        mathRandomSpy.mockRestore();
      });
    });
  });
});
