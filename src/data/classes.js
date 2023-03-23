import { armors } from './armors';

const classes = {
	Assassin: {
		name: 'Asesino',
		mainAttribute: 'dex',
		hitDice: 6,
		weapons: [
			'all',
		],
		armor: [
			armors['Cota de mallas*'],
			armors['Cota de mallas*'],
			armors['Cota de mallas*'],
		]
	},
	Barbarian: 'Bárbaro',
	Bard: 'Bardo',
	Knight: 'Caballero',
	Cleric: 'Clérigo',
	Druid: 'Druida',
	Explorer: 'Explorador',
	Warrior: 'Guerrero',
	Illusionist: 'Ilusionista',
	Thief: 'Ladrón',
	Wizard: 'Mago',
	Mystic: 'Místico',
	Paladin: 'Paladín',
}

export { classes };