let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below

spaceship.color = 'glorious gold';

spaceship.numEngines = 9;

delete spaceship['Secret Mission'];

console.log(spaceship.color);




//*It's important to know that although we can't reassign an object declared with const, we can still mutate it, meaning we can add new properties and change the properties that are there*//
