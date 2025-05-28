import { generateSiteMetadata } from "../helpers";

// Mock any external dependencies if needed
jest.mock("next/headers", () => ({
  headers: jest.fn(() => new Map()),
}));

describe("Helpers", () => {
  describe("generateSiteMetadata", () => {
    it("generates metadata with correct structure", async () => {
      const metadata = await generateSiteMetadata();

      expect(metadata).toHaveProperty("title");
      expect(metadata).toHaveProperty("description");
      expect(metadata).toHaveProperty("openGraph");
    });

    it("includes Open Graph image", async () => {
      const metadata = await generateSiteMetadata();

      expect(metadata.openGraph?.images).toBeDefined();
      expect(Array.isArray(metadata.openGraph?.images)).toBe(true);
    });
  });
});
