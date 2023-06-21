export default function rollDice(count, max) {
  console.log("count: " + count);
  console.log("max: " + max);
  let total = 0;
  for (let i = 0; i < count; i++) {
    total += Math.floor(Math.random() * max) + 1;
    console.log("total: " + total);
  }
  return total;
}
