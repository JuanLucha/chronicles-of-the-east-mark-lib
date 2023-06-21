export default function rollDice(count, max) {
  let total = 0;
  for (let i = 0; i < count; i++) {
    total += Math.floor(Math.random() * max) + 1;
  }
  return total;
}
