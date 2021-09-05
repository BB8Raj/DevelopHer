import Greeter from "../src/greeter";

//no error
class JavaScriptGreeter extends Greeter {
  greet(name: string): string {
    return `console.log(${super.greet(name)}!)`;
  }
}

//ref class outside of class can use super instead of THIS

export default JavaScriptGreeter;
