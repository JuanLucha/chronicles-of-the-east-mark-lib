import { ancestries } from "../data/ancestries.js";
import { classes } from "../data/classes.js";
import { generateStats } from "./stats-generator.js";

export default function generateCharacter(
  name,
  ancestry,
  characterClass,
  level
) {
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
    traits: [],
    stats: [],
    extra: []
  };

  // Generate the stats
  character.stats = generateStats();

  // Modify the stats based on the ancestry
  const ancestryModifiers = ancestries[ancestry].modifiers;
  for (const stat in ancestryModifiers) {
    character.stats[stat] += ancestryModifiers[stat];
  }

  // Fill the traits with the ones in the ancestries array
  character.traits = ancestries[ancestry].traits;

  // Add the class traits based on level
  // const classTraits = classes[characterClass].level;
  // for (let i = 0; i < level; i++) {
  //   character.traits = [...character.traits, ...classTraits[i].abilities];
  // }

  return character;
}
