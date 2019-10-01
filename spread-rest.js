const person = {
  name: 'Ketan Gote',
  age: 37,
  welcome() {
    return 'Hi, I am ' + this.name;
  }
};
// SPREAD 
const copiedPerson = { ...person };
console.log(copiedPerson, copiedPerson.welcome());

const hobbies = ['Sports', 'Cooking'];
for (let hobby of hobbies) {
  console.log(hobby);
}
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);
const copiedArray = [...hobbies];
console.log(copiedArray);

// REST
const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));
