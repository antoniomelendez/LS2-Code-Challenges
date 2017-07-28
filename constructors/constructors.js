
/* Design several classes and their relationships for an RPG videogame.
 * Classes:
 * NPC -> Humanoid, Animal, Plant
 * Humanoid -> Human, Elf, Orc
 * Animal -> Bear, Wolf
 * Plant -> FleshEatingDaisy
 *
 * Human -> Soldier, Peasant, Bandit
 *
 * NPC should be a general class for a non-player character in the game.
 * This class will probably include general attributes like hp, strength, speed, etc.
 *
 * Humanoid, Animal, and Plant should all inherit from NPC.  The classes
 * shown to the right of the arrow are classes that will inherit
 * from those classes.
 *
 * Soldier, Peasant, and Bandit should all inherit from Human.
 *
 * Create properties for these different classes that fit with the character.
 *
 * This is how you would structure the game objects in an actual game
 * application in Unity or another similar framework.
 */
 class NPC {
   constructor() {
     hp: 100,
     strength: 25,
     speed: 50
   }
 }
 class Humanoid extends NPC {
   constructor(race) {
     super(race);
     this.race = race;
   }
   if (this.race === 'Human') {
     const human = {
     hp: 100,
     strength: 35,
     speed: 50,
    }
   }
   if (this.race === 'Elf') {
     const elf = {
     hp: 100,
     strength: 25,
     speed: 75,
    }
   }
   if (this.race === 'Orc') {
     const orc = {
     hp: 125,
     strength: 50,
     speed: 25,
    }
   }
 }
 class Animal extends NPC {
   constructor(beast) {
     super(beast);
     this.beast = beast;
   }
   if (this.beast === 'Bear') {
     const bear = {
     hp: 200,
     strength: 100,
     speed: 60,
    }
   }
   if (this.beast === 'Wolf') {
     const wolf = {
     hp: 100,
     strength: 60,
     speed: 80,
    }
   }
 }
 class Plant extends NPC{
   constructor(choice) {
     super(choice);
     this.choice = choice;
   }
   if (this.choice === 'FleshEatingDaisy')
   const plant = {
     hp: 50,
     strength: 20,
     speed: 20
   }
 }
