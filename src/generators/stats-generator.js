// This function generates an array of 6 stats numbers, each between 3 and 18, inclusive.
function generateStats() {
  const stats = { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
  for (const stat in stats) {
    stats[stat] = Math.floor(Math.random() * 16) + 3;
  }
  return stats;
}

// This function returns the modifier for a given stat.
function getModifier(stat) {
  switch (stat) {
    case 1:
      return -4;
    case 2:
    case 3:
      return -3;
    case 4:
    case 5:
      return -2;
    case 6:
    case 7:
    case 8:
      return -1;
    case 9:
    case 10:
    case 11:
    case 12:
      return 0;
    case 13:
    case 14:
    case 15:
      return 1;
    case 16:
    case 17:
      return 2;
    case 18:
    case 19:
      return 3;
  }
}

export { generateStats, getModifier };
