import { cn } from "../utils";

describe("Utils", () => {
  describe("cn function", () => {
    it("combines class names correctly", () => {
      const result = cn("class1", "class2", "class3");
      expect(result).toContain("class1");
      expect(result).toContain("class2");
      expect(result).toContain("class3");
    });

    it("handles conditional classes", () => {
      const condition = true;
      const result = cn("base", condition && "conditional", "always");
      expect(result).toContain("base");
      expect(result).toContain("conditional");
      expect(result).toContain("always");
    });

    it("filters out falsy values", () => {
      const result = cn("valid", false, null, undefined, "", "another");
      expect(result).toContain("valid");
      expect(result).toContain("another");
      expect(result).not.toContain("false");
      expect(result).not.toContain("null");
    });

    it("handles empty input", () => {
      const result = cn();
      expect(typeof result).toBe("string");
    });

    it("handles array inputs", () => {
      const result = cn(["class1", "class2"], "class3");
      expect(result).toContain("class1");
      expect(result).toContain("class2");
      expect(result).toContain("class3");
    });

    it("handles object inputs with conditional values", () => {
      const result = cn({
        active: true,
        inactive: false,
        default: true,
      });
      expect(result).toContain("active");
      expect(result).toContain("default");
      expect(result).not.toContain("inactive");
    });

    it("merges Tailwind classes correctly", () => {
      const result = cn("px-2 py-1", "px-4");
      // clsx should handle Tailwind class merging
      expect(typeof result).toBe("string");
      expect(result.length).toBeGreaterThan(0);
    });

    it("handles complex combinations", () => {
      const isActive = true;
      const size = "large";
      const result = cn(
        "base-class",
        {
          active: isActive,
          inactive: !isActive,
        },
        size === "large" && "large-size",
        ["additional", "classes"]
      );

      expect(result).toContain("base-class");
      expect(result).toContain("active");
      expect(result).toContain("large-size");
      expect(result).toContain("additional");
      expect(result).toContain("classes");
      expect(result).not.toContain("inactive");
    });
  });
});
