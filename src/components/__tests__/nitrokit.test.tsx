import { render } from "@testing-library/react";
import { NitrokitText } from "../nitrokit";

describe("NitrokitText - Complete Coverage", () => {
  it("renders SVG with correct viewBox and dimensions", () => {
    render(<NitrokitText />);

    const svg = document.querySelector("svg");
    expect(svg).toHaveAttribute("width", "464"); // Gerçek değer 464
    expect(svg).toHaveAttribute("height", "100");
    expect(svg).toHaveAttribute("viewBox", "0 0 464 100"); // Gerçek viewBox
    expect(svg).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
  });

  it("contains all gradient stops with correct colors", () => {
    render(<NitrokitText />);

    const stops = document.querySelectorAll("stop");
    expect(stops).toHaveLength(3); // Gerçekte 3 tane var

    expect(stops[0]).toHaveAttribute("offset", "0%");
    expect(stops[2]).toHaveAttribute("offset", "100%"); // Son stop index 2
  });

  it("contains filter definition with glow effect", () => {
    render(<NitrokitText />);

    const filter = document.querySelector("#glow");
    expect(filter).toBeInTheDocument();

    const gaussianBlur = document.querySelector("feGaussianBlur");
    expect(gaussianBlur).toHaveAttribute("stdDeviation", "3");
  });

  it("has all letter groups positioned correctly", () => {
    render(<NitrokitText />);

    const textElements = document.querySelectorAll("text");

    // Check specific positioning for letters
    const nLetterElements = Array.from(textElements).filter(
      (el) => el.getAttribute("x") === "10"
    );
    expect(nLetterElements).toHaveLength(6); // N has 6 rows
  });

  it("cursor has correct styling and position", () => {
    render(<NitrokitText />);

    const cursor = document.querySelector(".cursor text");
    expect(cursor).toHaveAttribute("x", "450"); // Gerçek değer 450
    expect(cursor).toHaveAttribute("y", "80"); // Gerçek değer 80
    expect(cursor?.textContent).toBe("█");
  });

  it("supports reduced motion preference", () => {
    render(<NitrokitText />);

    const style = document.querySelector("style");
    expect(style?.textContent).toContain(
      "@media (prefers-reduced-motion: no-preference)"
    );
  });

  it("has correct font family in styles", () => {
    render(<NitrokitText />);

    const style = document.querySelector("style");
    expect(style?.textContent).toContain(
      "font-family: 'Courier New', monospace"
    );
  });
});
