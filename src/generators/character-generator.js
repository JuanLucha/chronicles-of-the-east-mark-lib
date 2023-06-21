import { ancestries } from "../data/ancestries.js";
import { classes } from "../data/classes.js";
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

  // Add the hit points based on the class and level
  const hitDiceMultiplier = level > 10 ? 10 : level;
  const extraHitPoints =
    level > 10 ? (level - 10) * classes[characterClass].extraHitPoints : 0;
  const classHitPoints = classes[characterClass].hitDice * hitDiceMultiplier;
  const constitutionHitPoints = getModifier(character.stats.con) * level;
  character.hitPoints = classHitPoints + extraHitPoints + constitutionHitPoints;
  if (character.hitPoints < 1) {
    character.hitPoints = 1;
  }

  // Add the class abilities based on level
  // const classTraits = classes[characterClass].level;
  // for (const i = 0; i < level; i++) {
  //   character.traits = [...character.traits, ...classTraits[i].abilities];
  // }

  // console.log(character.traits.preferredClass.map(c => c.name));
  return character;
};

export { generateCharacter };
