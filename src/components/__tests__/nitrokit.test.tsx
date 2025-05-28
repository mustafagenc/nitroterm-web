import { render } from "@testing-library/react";
import { NitrokitText } from "../nitrokit";

describe("NitrokitText", () => {
  it("renders SVG element", () => {
    render(<NitrokitText />);

    // SVG'yi data-testid ile bulalım veya querySelector kullanarak
    const svg = document.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("width");
    expect(svg).toHaveAttribute("height");
  });

  it("contains gradient definition", () => {
    render(<NitrokitText />);

    const gradient = document.querySelector("#nitroGradient");
    expect(gradient).toBeInTheDocument();
  });

  it("contains all ASCII art text elements", () => {
    render(<NitrokitText />);

    const textElements = document.querySelectorAll("text");
    expect(textElements.length).toBeGreaterThan(40);
  });

  it("includes blinking cursor", () => {
    render(<NitrokitText />);

    const cursor = document.querySelector(".cursor");
    expect(cursor).toBeInTheDocument();
  });

  it("has correct CSS animations in style tag", () => {
    render(<NitrokitText />);

    const style = document.querySelector("style");
    expect(style?.textContent).toContain("@keyframes blink");
    expect(style?.textContent).toContain("animation: blink");
  });
});
