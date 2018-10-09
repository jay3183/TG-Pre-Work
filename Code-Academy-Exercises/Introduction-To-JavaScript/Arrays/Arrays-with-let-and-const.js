let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];


condiments[0] = "Mayo";
console.log(condiments);

let condimentspart2 = ['Mayo']

condiments = condimentspart2;

utensils[3] = 'Spoon';
console.log(utensils);




/*elements in an array declared with const remain mutable. Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.*/
