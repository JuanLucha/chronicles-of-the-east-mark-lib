// This function generates an array of 6 stats numbers, each between 3 and 18, inclusive.
export const generateStats = () => {
  const stats = { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
  for (const stat in stats) {
    stats[stat] = Math.floor(Math.random() * 16) + 3;
  }
  return stats;
};
