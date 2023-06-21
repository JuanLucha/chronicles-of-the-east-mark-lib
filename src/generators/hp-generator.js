import rollDice from "./roll-dice";

export default function hpGenerator(
  level,
  hitDice,
  extraHitPoints,
  constitutionModifier
) {
  // console.log("level: " + level);
  // console.log("hitDice: " + hitDice);
  // console.log("extraHitPoints: " + extraHitPoints);
  // console.log("constitutionModifier: " + constitutionModifier);

  const hitDiceMultiplier = level > 10 ? 10 : level;
  // console.log("hitDiceMultiplier: " + hitDiceMultiplier);
  const extraHitPointsGained = level > 10 ? (level - 10) * extraHitPoints : 0;
  // console.log("extraHitPointsGained: " + extraHitPointsGained);
  const classHitPoints = rollDice(hitDiceMultiplier, hitDice);
  // console.log("classHitPoints: " + classHitPoints);
  const constitutionHitPoints = constitutionModifier * level;
  const hitPoints =
    classHitPoints + extraHitPointsGained + constitutionHitPoints;
  if (hitPoints < 1) {
    return 1;
  }
  return hitPoints;
}
