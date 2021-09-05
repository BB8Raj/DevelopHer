//set parent class Greeter with property greeting: string
export class Greeter {
  greeting: string;

  //METHODS 2
  //1 -sets the greeting property from a parameter -> chosen parameter is greeting which is a string
  //https://www.typescriptlang.org/docs/handbook/classes.html

  //works outside of method
  constructor(greeting: string) {
    this.greeting = greeting;
  }
  //2 - greet has a string parameter called name. REturns composed greeting based on the greeting property and name parameter.
  greet(name: string): string {
    //const message = `${this.greeting}, ${name}!`;
    return `${this.greeting}, ${name}!`;
    //return message;
  }
}

/* A Constructor initializes a object that doesn't exist. 
  A Method does operations on an already created object. 
  A Constructor's name must be same as the name of the class.
  A Method's name can be anything
   */
export default Greeter;
