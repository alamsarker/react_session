export default class Person{

  #privateAge;
  name;

  constructor(name, age) {
    this.name = name;
    this.#privateAge = age;
  }

  #getPrivateAge(){
    return this.#privateAge
  }
  
  getAge = () => this.#privateAge
}