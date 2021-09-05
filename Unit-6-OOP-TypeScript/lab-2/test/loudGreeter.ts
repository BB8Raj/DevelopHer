import LoudGreeter from "../src/loudGreeter";

describe("Say it with your chest - Loud", () => {
  test("Jasper's luck", () => {
    let message: LoudGreeter = new LoudGreeter(
      "May the odds be forever your favor"
    );
    message.addVolume();
    expect(message.greet("Jasper")).toBe(
      "May the odds be forever your favor, Jasper!!!"
    );
  });

  test("Afrimation", () => {
    const message: LoudGreeter = new LoudGreeter("You are fierce");
    expect(message.greet("Ivy.")).toBe("You are fierce, Ivy!!");
  });
});
