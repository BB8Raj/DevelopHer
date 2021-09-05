import Greeter from "../src/greeter";

describe("Greet Class Testing", () => {
  test("Hello Dolly", () => {
    const yo: Greeter = new Greeter("Hello");
    expect(yo.greet("Dolly!")).toBe("Hello, Dolly!");
  });

  test("Shoot for the stars, Mark", () => {
    const yo: Greeter = new Greeter("Shoot for the stars");
    expect(yo.greet("Mark.")).toBe("Shoot for the stars, Mark.");
  });
});
