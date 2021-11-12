export default class Animal {
  constructor() {
    this.printMe = 'I am an animal';
    this.classType = 'Animal';
  }

  getClassType() {
    return this.classType;
  }
}