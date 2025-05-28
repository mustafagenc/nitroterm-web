import { render, screen } from "@testing-library/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card";

describe("Card Components", () => {
  it("renders Card component", () => {
    render(<Card>Card content</Card>);

    const card = screen.getByText("Card content");
    expect(card).toBeInTheDocument();
  });

  it("renders CardHeader with title", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
      </Card>
    );

    expect(screen.getByText("Card Title")).toBeInTheDocument();
  });

  it("renders CardContent", () => {
    render(
      <Card>
        <CardContent>Card content text</CardContent>
      </Card>
    );

    expect(screen.getByText("Card content text")).toBeInTheDocument();
  });

  it("renders CardDescription", () => {
    render(
      <Card>
        <CardHeader>
          <CardDescription>Card description</CardDescription>
        </CardHeader>
      </Card>
    );

    expect(screen.getByText("Card description")).toBeInTheDocument();
  });

  it("renders CardFooter", () => {
    render(
      <Card>
        <CardFooter>Footer content</CardFooter>
      </Card>
    );

    expect(screen.getByText("Footer content")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Card className="custom-class">Content</Card>);

    const card = screen.getByText("Content");
    expect(card).toHaveClass("custom-class");
  });
});
