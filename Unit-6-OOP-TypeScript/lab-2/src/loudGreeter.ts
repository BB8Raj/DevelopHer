import Greeter from "../src/greeter";

class LoudGreeter extends Greeter {
  private extra: string = "!";

  addVolume(): void {
    this.extra += "!";
  }

  greet(name: string): string {
    super.greet("Hello, Folks");
    return super.greet(name) + this.extra;
  }
}
export default LoudGreeter;
