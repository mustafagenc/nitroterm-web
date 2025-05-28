import { render, screen, fireEvent } from "@testing-library/react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../collapsible";

describe("Collapsible Components", () => {
  it("renders collapsible trigger", () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>
    );

    expect(screen.getByText("Toggle")).toBeInTheDocument();
  });

  it("toggles content visibility", () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Hidden content</CollapsibleContent>
      </Collapsible>
    );

    const trigger = screen.getByText("Toggle");
    fireEvent.click(trigger);

    expect(screen.getByText("Hidden content")).toBeInTheDocument();
  });

  it("starts collapsed by default", () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Hidden content</CollapsibleContent>
      </Collapsible>
    );

    // Content should not be visible initially
    expect(screen.queryByText("Hidden content")).not.toBeInTheDocument();
  });
});
