const person = {
  name: 'Ketan Gote',
  age: 37,
  welcome() {
    console.log('Hi, I am ' + this.name);
  }
};

person.welcome();
