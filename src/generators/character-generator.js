import { ancestries } from "../data/ancestries.js";
import { classes } from "../data/classes.js";
import generatePrimaryStats from "./generate-primary-stats.js";
import hpGenerator from "./hp-generator.js";
import { generateStats, getModifier } from "./stats-generator.js";

const generateCharacter = (name, ancestry, characterClass, level) => {
  const character = {
    name: name,
    ancestry: ancestry,
    class: characterClass,
    level: level,
    attackBonus: 0,
    armorClass: 0,
    hitPoints: 0,
    weapons: [],
    armor: [],
    ancestryTraits: [],
    classTraits: [],
    stats: [],
    extra: [],
    primaryStats: []
  };

  // Generate the stats
  character.stats = generateStats();

  // Modify the stats based on the ancestry
  const ancestryModifiers = ancestries[ancestry].modifiers;
  for (const stat in ancestryModifiers) {
    character.stats[stat] += ancestryModifiers[stat];
  }

  // Fill the traits with the ones in the ancestries array
  character.ancestryTraits = ancestries[ancestry].traits;

  // Fill the traits with the ones in the classes array
  const classKey = characterClass.toLowerCase();
  const { level: _, ...rest } = classes[classKey];
  character.classTraits = rest;

  // Add the hit points based on the class and level
  character.hitPoints = hpGenerator(
    level,
    classes[classKey].hitDice,
    classes[classKey].extraHitPoints,
    getModifier(character.stats.con)
  );

  // Add the attack bonus based on the class and level
  character.attackBonus = classes[classKey].level[level].attackBonus;

  // Add the experience points based on the class and level
  character.experiencePoints = classes[classKey].level[level].experiencePoints;

  // Add the abilities based on the class and level, adding all the abilities from previous levels together
  for (let i = 1; i <= level; i++) {
    character.classTraits.abilities = [
      ...(character.classTraits.abilities || []),
      ...(classes[classKey].level[i].abilities || [])
    ];
  }

  // Select the primary stats based on the class and ancestry
  character.primaryStats.push(classes[classKey].mainAttribute);
  character.primaryStats = generatePrimaryStats(character.primaryStats);
  if (character.ancestry === "human") {
    character.primaryStats = generatePrimaryStats(character.primaryStats);
  }

  return character;
};

export { generateCharacter };
