// The previous array but un enumeration
const languages = {
  Abisal: "abisal",
  Celestial: "celestial",
  Common: "común",
  Draconic: "dracónico",
  Druidic: "druídico",
  Drow: "drow",
  Dwarvish: "enano",
  Elvish: "élfico",
  Giant: "gigante",
  Goblin: "goblin",
  Gnomish: "gnomo",
  Halfling: "halfling",
  Infernal: "infernal",
  Orc: "orco",
  Ogre: "ogro",
  Troll: "trol",
  Primordial: "primordial",
  Kobold: "kobold"
};

function getRandomLanguage() {
  const languagesArray = Object.values(languages);
  return languagesArray[Math.floor(Math.random() * languagesArray.length)];
}

function getRandomLanguageOtherThan(languages) {
  let randomLanguage = getRandomLanguage();
  while (languages.includes(randomLanguage)) {
    randomLanguage = getRandomLanguage();
  }
  return randomLanguage;
}

export { getRandomLanguage, getRandomLanguageOtherThan, languages };
