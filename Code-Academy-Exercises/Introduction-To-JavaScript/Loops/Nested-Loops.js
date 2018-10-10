// Write your code below
let bobsFollowers = ['Tony', 'Sal', 'Lindsey', 'Mike'];
let tinasFollowers = ['Tony', 'Sal', 'bart'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};

console.log(bobsFollowers);


//When we have a loop running inside another loop, we call that a nested loop.
