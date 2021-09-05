import Greeter from "../src/greeter";

class HtmlGreeter extends Greeter {
  constructor(greeting: string, public tagName: string = "h1") {
    super(greeting); //as it's augmented
  }
  greet(name: string): string {
    return `<${this.tagName}> ${super.greet(name)} <${this.tagName}>`;
  }
}
export default HtmlGreeter;
