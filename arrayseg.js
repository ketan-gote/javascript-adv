
const hobbies = ['Gaming', 'Cooking'];
for (let hobby of hobbies) {
  console.log(hobby);
}
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);
hobbies.push('Programming');
console.log(hobbies);
