import rollDice from "./roll-dice";

describe("rollDice", () => {
  const diceTypes = [4, 6, 8, 10, 12, 20];
  const randomValues = [0, 0.5, 0.999999];

  diceTypes.forEach(diceType => {
    randomValues.forEach(randomValue => {
      it(`should correctly calculate the result for d${diceType} with Math.random() returning ${randomValue}`, () => {
        const mathRandomSpy = jest.spyOn(Math, "random");
        mathRandomSpy.mockReturnValue(randomValue);

        const result = rollDice(1, diceType);

        // Depending on the random value, we will expect different results
        let expected;
        if (randomValue === 0) {
          expected = 1; // the minimum result when rolling any dice is 1
        } else if (randomValue === 0.5) {
          expected = Math.floor(diceType / 2) + 1;
        } else {
          // randomValue is 0.999999
          expected = diceType; // the maximum result when rolling any dice is the dice type (e.g., d6 = 6)
        }

        expect(result).toBe(expected);

        mathRandomSpy.mockRestore();
      });
    });
  });
});
