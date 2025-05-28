import { generateSiteMetadata, getBaseUrl } from "../helpers";

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

  describe("getBaseUrl", () => {
    it("returns correct base URL in development", () => {
      Object.defineProperty(process.env, "NODE_ENV", {
        value: "development",
        configurable: true,
      });
      const url = getBaseUrl();
      expect(url).toContain("localhost");
    });

    it("returns production URL when deployed", () => {
      Object.defineProperty(process.env, "NODE_ENV", {
        value: "production",
        configurable: true,
      });
      Object.defineProperty(process.env, "VERCEL_URL", {
        value: "myapp.vercel.app",
        configurable: true,
      });
      const url = getBaseUrl();
      expect(url).toContain("https://");
    });
  });
});
