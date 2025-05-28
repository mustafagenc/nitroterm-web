import { render, screen } from "@testing-library/react";
import Code from "../code";

describe("Code", () => {
  it("renders code block with correct content", () => {
    const code = "npm install nitrokit";
    render(<Code>{code}</Code>);

    // Text parçalara ayrıldığı için content kontrol edelim
    expect(screen.getByText("npm")).toBeInTheDocument();
    expect(screen.getByText("install")).toBeInTheDocument();
    expect(screen.getByText(/nitrokit/)).toBeInTheDocument();
  });

  it("applies correct styling classes", () => {
    render(<Code>test code</Code>);

    // Pre element'i kontrol et
    const preElement = document.querySelector("pre");
    expect(preElement).toBeInTheDocument();
    expect(preElement).toHaveClass("language-bash");
  });

  it("includes copy to clipboard functionality", () => {
    render(<Code>test</Code>);

    // Copy button'u kontrol et
    const copyButton = screen.getByTestId("clipboard-icon");
    expect(copyButton).toBeInTheDocument();
  });

  it("handles empty content", () => {
    render(<Code></Code>);

    const codeElement = document.querySelector("code");
    expect(codeElement).toBeInTheDocument();
    expect(codeElement).toHaveClass("language-bash");
  });

  it("handles multiline code", () => {
    const multilineCode = `line 1
line 2
line 3`;
    render(<Code>{multilineCode}</Code>);

    // Numbers in spans, text in between
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();

    // Check that line text is present
    const codeElement = document.querySelector("code");
    expect(codeElement?.textContent).toContain("line");
  });

  it("renders with syntax highlighting", () => {
    render(<Code>npm install</Code>);

    // Token spans should exist
    const tokenElements = document.querySelectorAll(".token");
    expect(tokenElements.length).toBeGreaterThan(0);
  });

  it("has correct tabindex for accessibility", () => {
    render(<Code>test</Code>);

    const preElement = document.querySelector("pre");
    expect(preElement).toHaveAttribute("tabindex", "0");
  });

  it("wraps content in relative container", () => {
    render(<Code>test</Code>);

    const container = document.querySelector(".relative");
    expect(container).toBeInTheDocument();
  });
});
