const allStats = ["str", "dex", "con", "int", "wis", "cha"];

const generatePrimaryStats = currentStats => {
  // Filtrar el array de todos los stats para obtener solo aquellos que no están en currentStats
  const availableStats = allStats.filter(stat => !currentStats.includes(stat));

  // If no stats are available, return the current stats
  if (availableStats.length === 0) {
    return currentStats;
  }

  // Select a random stat from the available stats
  const newStat =
    availableStats[Math.floor(Math.random() * availableStats.length)];

  return [...currentStats, newStat];
};

export default generatePrimaryStats;
