import JavaScriptGreeter from "../src/jsGreeter";

describe("More Salutations", () => {
  test("Top of the morning Mikey", () => {
    let message: JavaScriptGreeter = new JavaScriptGreeter(
      "Top of the morning"
    );
    expect(message.greet("Mikey")).toBe(
      "console.log(Top of the morning, Mikey)"
    );
  });

  test("Not one less, G", () => {
    const message: JavaScriptGreeter = new JavaScriptGreeter("Not one less");
    expect(message.greet("G.")).toBe("console.log(Not one less, G.)");
  });
});
