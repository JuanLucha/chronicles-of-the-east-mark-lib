# Chronicles of the East Mark Lib (English)

Chronicles of the East Mark Lib is a role-playing character generation library for the tabletop game Chronicles of the East Mark. This library provides easy-to-use methods for generating characters with features, abilities, and other attributes.

You can find this magnificent game in PDF format on the [East Mark Codex](https://codexdelamarca.com/posts/cronicas-marca/) website or in physical format on the [Treasures of the Mark](https://tesorosdelamarca.com/producto/cronicas-de-la-marca-del-este/) website.

## Installation

You can install the library via npm:

```
npm install cronicas-de-la-marca-lib
```

Or via yarn:

```
yarn add cronicas-de-la-marca-lib
```

## Usage

You can use this library both on the server-side with Node.js and in the browser. Here is an example of how you can use the library to generate a character:

```javascript
import { generateCharacter } from 'cronicas-de-la-marca-lib';

const character = generateCharacter('Juan', 'human', 'paladin', 1);
console.log(character);
```

## Testing

To test that the module can be loaded from an html file, 

## Methods

### `generateCharacter(name, ancestry, class, level)`

Generates a new character with the specified name, ancestry, class, and level. Returns an object representing the generated character.

## To Do
- [ ] Generate equipment  
- [ ] More intelligent attribute assignment  
- [ ] Spell assignment for classes that need it  

## Contributing

Contributions to this project are welcome. If you find an issue, please create an issue on GitHub. If you want to contribute code, please create a pull request.




# Crónicas de la Marca del Este Lib (Español)

Crónicas de la Marca Lib es una biblioteca de generación de personajes de rol para el juego de mesa Crónicas de la Marca. Esta biblioteca proporciona métodos fáciles de usar para generar personajes con características, habilidades y demás atributos.

Puedes encontrar este magnífico juego en formato PDF en la web del [Codex de la Marca](https://codexdelamarca.com/posts/cronicas-marca/) o en formato físico en la web de [Tesoros de la Marca](https://tesorosdelamarca.com/producto/cronicas-de-la-marca-del-este/).

## Instalación

Puedes instalar la biblioteca a través de npm:

```
npm install cronicas-de-la-marca-lib
```

O a través de yarn:

```
yarn add cronicas-de-la-marca-lib
```

## Uso

Puedes usar esta biblioteca tanto en el lado del servidor con Node.js como en el navegador. Aquí te dejo un ejemplo de cómo puedes usar la biblioteca para generar un personaje:

```javascript
import { generateCharacter } from 'cronicas-de-la-marca-lib';

const character = generateCharacter('Juan', 'human', 'paladin', 1);
console.log(character);
```

## Métodos

### `generateCharacter(name, ancestry, class, level)`

Genera un nuevo personaje con el nombre, ancestro, clase y nivel especificados. Devuelve un objeto que representa al personaje generado.

## Cosas por hacer
- [ ] Generar equipo  
- [ ] Asignación de características más inteligente.  
- [ ] Asignación de conjuros para las clases que los necesiten.  

## Contribuir

Las contribuciones a este proyecto son bienvenidas. Si encuentras un problema, por favor, crea un problema en GitHub. Si quieres contribuir con código, por favor, crea una pull request.

## License / Licencia

OGL 1.0a

THIS LICENSE IS APPROVED FOR GENERAL USE. PERMISSION TO DISTRIBUTE THIS LICENSE IS MADE BY WIZARDS OF THE COAST!
OPEN GAME LICENSE Version 1.0a
Designation and Product Identity
The names Crónicas de la Marca del Este and La Marca del Este, when used in any context, are Product Identity. All logos, artwork, presentation and layout are product identity.
Designation Open Game Content
All text not identified as Product Identity is Open Game Content
The following text is the property of Wizards of the Coast, Inc. and is Copyright 2000 Wizards of the Coast, Inc (“Wizards”). All Rights Reserved. 1. Definitions: (a)”Contributors” means the copyright and/or trademark owners who have contributed Open Game Content; (b)”Derivative Material” means copyrighted material including derivative works and translations (including into other computer languages), potation, modification, correction, addition, extension, upgrade, improvement, compilation, abridgment or other form in which an existing work may be recast, transformed or adapted; (c) “Distribute” means to reproduce, license, rent, lease, sell, broadcast, publicly display, transmit or otherwise distribute; (d)”Open Game Content” means the game mechanic and includes the methods, procedures, processes and routines to the extent such content does not embody the Product Identity and is an enhancement over the prior art and any additional content clearly identified as Open Game Content by the Contributor, and means any work covered by this License, including translations and derivative works under copyright law, but specifically excludes Product Identity. (e) “Product Identity” means product and product line names, logos and identifying marks including trade dress; artifacts; creatures characters; stories, storylines, plots, thematic elements, dialogue, incidents, language, artwork, symbols, designs, depictions, likenesses, formats, poses, concepts, themes and graphic, photographic and other visual or audio representations; names and descriptions of characters, spells, enchantments, personalities, teams, personas, likenesses and special abilities; places, locations, environments, creatures, equipment, magical or supernatural abilities or effects, logos, symbols, or graphic designs; and any other trademark or registered trademark clearly identified as Product identity by the owner of the Product Identity, and which specifically excludes the Open Game Content; (f) “Trademark” means the logos, names, mark, sign, motto, designs that are used by a Contributor to identify itself or its 143 products or the associated products contributed to the Open Game License by the Contributor (g) “Use”, “Used” or “Using” means to use, Distribute, copy, edit, format, modify, translate and otherwise create Derivative Material of Open Game Content. (h) “You” or “Your” means the licensee in terms of this agreement.
2. The License: This License applies to any Open Game Content that contains a notice indicating that the Open Game Content may only be Used under and in terms of this License. You must affix such a notice to any Open Game Content that you Use. No terms may be added to or subtracted from this License except as described by the License itself. No other terms or conditions may be applied to any Open Game Content distributed using this License.
3.Offer and Acceptance: By Using the Open Game Content You indicate Your acceptance of the terms of this License.
4. Grant and Consideration: In consideration for agreeing to use this License, the Contributors grant You a perpetual, worldwide, royalty-free, non-exclusive license with the exact terms of this License to Use, the Open Game Content.
5.Representation of Authority to Contribute: If You are contributing original material as Open Game Content, You represent that Your Contributions are Your original creation and/or You have sufficient rights to grant the rights conveyed by this License.
6.Notice of License Copyright: You must update the COPYRIGHT NOTICE portion of this License to include the exact text of the COPYRIGHT NOTICE of any Open Game Content You are copying, modifying
or distributing, and You must add the title, the copyright date, and the copyright holder’s name to the COPYRIGHT NOTICE of any original Open Game Content you Distribute.
7. Use of Product Identity: You agree not to Use any Product Identity, including as an indication as to compatibility, except as expressly licensed in another, independent Agreement with the owner of each element of that Product Identity. You agree not to indicate compatibility or co-adaptability with any Trademark or Registered Trademark in conjunction with a work containing Open Game Content except as expressly licensed in another, independent Agreement with the owner of such Trademark or Registered Trademark. The use of any Product Identity in Open Game Content does not constitute a challenge to the ownership of that Product Identity. The owner of any Product Identity used in Open Game Content shall retain all rights, title and interest in and to that Product Identity. 8. Identification: If you distribute Open Game Content You must clearly indicate which portions of the work that you are distributing are Open Game Content.
9. Updating the License: Wizards or its designated Agents may publish updated versions of this License. You may use any authorized version of this License to copy, modify and distribute any Open Game Content originally distributed under any version of this License.
10. Copy of this License: You MUST include a copy of this License with every copy of the Open Game Content You Distribute.
11. Use of Contributor Credits: You may not market or advertise the Open Game Content using the name of any Contributor unless You have written permission from the Contributor to do so.
12. Inability to Comply: If it is impossible for You to comply with any of the terms of this License with respect to some or all of the Open Game Content due to statute, judicial order, or governmental regulation then You may not Use any Open Game Material so affected.
13. Termination: This License will terminate automatically if You fail to comply with all terms herein and fail to cure such breach within 30 days of becoming aware of the breach. All sublicenses shall survive the termination of this License.
14. Reformation: If any provision of this License is held to be unenforceable, such provision shall be reformed only to the extent necessary to make it enforceable.
15. COPYRIGHT NOTICE
Open Game License v 1.0a Copyright 2000, Wizards of the Coast, Inc. System Reference Document Copyright 2000-2003, Wizards of the Coast, Inc.; Authors Jonathan Tweet, Monte Cook, Skip Williams, Rich Baker, Andy Collins, David Noonan, Rich Redman, Bruce R. Cordell, John D. Rateliff, Thomas Reid, James Wyatt, based on original material by E. Gary Gygax and Dave Arneson.
Crónicas de la Marca del Este. Autores: Grupo Creativo de la Marca del Este.
