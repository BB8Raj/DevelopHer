import HtmlGreeter from "../src/htmlGreeter";

describe("More saluatations with HTML", () => {
  test("Top of the morning Mikey", () => {
    let message: HtmlGreeter = new HtmlGreeter("Top of the morning", "h2");
    //message.tagName("h4") -> alt example
    expect(message.greet("Mikey")).toBe("<h2> Top of the morning Mikey <h2>");
  });

  test("Sup?, G", () => {
    const message: HtmlGreeter = new HtmlGreeter("Sup?");
    expect(message.greet("G.")).toBe("<h1> Sup?, G. <h1>");
  });
});
