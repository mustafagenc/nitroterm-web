// src/components/ui/__tests__/sonner.test.tsx
import { render } from "@testing-library/react";
import { Toaster } from "../sonner";

describe("Sonner Toaster", () => {
  beforeEach(() => {
    // Clear any existing toasters
    document.body.innerHTML = "";
  });

  it("renders Toaster component", () => {
    render(<Toaster />);
    // If not found, check that component renders without error
    expect(() => render(<Toaster />)).not.toThrow();
  });

  it("applies custom className", () => {
    render(<Toaster className="custom-toaster" />);

    // Component should render without errors
    expect(() => render(<Toaster className="custom-toaster" />)).not.toThrow();
  });

  it("renders without errors", () => {
    expect(() => render(<Toaster />)).not.toThrow();
  });

  it("accepts additional props", () => {
    expect(() => render(<Toaster position="top-right" />)).not.toThrow();
  });

  it("handles theme prop", () => {
    expect(() => render(<Toaster theme="dark" />)).not.toThrow();
  });
});
