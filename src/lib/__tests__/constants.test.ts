import { GITHUB_URL, CONTACT_URL } from "../constants";

describe("Constants", () => {
  describe("GITHUB_URL", () => {
    it("is defined and is a string", () => {
      expect(GITHUB_URL).toBeDefined();
      expect(typeof GITHUB_URL).toBe("string");
    });

    it("has valid GitHub URL format", () => {
      expect(GITHUB_URL).toMatch(/^https:\/\/github\.com\/.+/);
    });

    it("contains correct repository path", () => {
      expect(GITHUB_URL).toContain("mustafagenc/nitroterm");
    });

    it("is a valid URL", () => {
      expect(() => new URL(GITHUB_URL)).not.toThrow();
    });

    it("uses HTTPS protocol", () => {
      expect(GITHUB_URL).toMatch(/^https:\/\//);
    });

    it("points to GitHub domain", () => {
      const url = new URL(GITHUB_URL);
      expect(url.hostname).toBe("github.com");
    });

    it("has non-empty value", () => {
      expect(GITHUB_URL.length).toBeGreaterThan(0);
      expect(GITHUB_URL.trim()).toBeTruthy();
    });
  });

  describe("CONTACT_URL", () => {
    it("is defined and is a string", () => {
      expect(CONTACT_URL).toBeDefined();
      expect(typeof CONTACT_URL).toBe("string");
    });

    it("has valid URL format", () => {
      expect(CONTACT_URL).toMatch(/^https:\/\/.+/);
    });

    it("contains correct domain", () => {
      expect(CONTACT_URL).toContain("mustafagenc.info");
    });

    it("is a valid URL", () => {
      expect(() => new URL(CONTACT_URL)).not.toThrow();
    });

    it("uses HTTPS protocol", () => {
      expect(CONTACT_URL).toMatch(/^https:\/\//);
    });

    it("points to correct domain", () => {
      const url = new URL(CONTACT_URL);
      expect(url.hostname).toBe("mustafagenc.info");
    });

    it("has contact path", () => {
      const url = new URL(CONTACT_URL);
      expect(url.pathname).toContain("contact");
    });

    it("has non-empty value", () => {
      expect(CONTACT_URL.length).toBeGreaterThan(0);
      expect(CONTACT_URL.trim()).toBeTruthy();
    });

    it("ends with trailing slash", () => {
      expect(CONTACT_URL).toMatch(/\/$/);
    });
  });

  describe("All constants", () => {
    it("are all valid URLs", () => {
      const constants = [GITHUB_URL, CONTACT_URL];

      constants.forEach((url) => {
        expect(() => new URL(url)).not.toThrow();
      });
    });

    it("all use HTTPS", () => {
      const constants = [GITHUB_URL, CONTACT_URL];

      constants.forEach((url) => {
        expect(url).toMatch(/^https:\/\//);
      });
    });

    it("have no empty values", () => {
      const constants = [GITHUB_URL, CONTACT_URL];

      constants.forEach((url) => {
        expect(url).toBeTruthy();
        expect(url.trim().length).toBeGreaterThan(0);
      });
    });

    it("are all strings", () => {
      const constants = [GITHUB_URL, CONTACT_URL];

      constants.forEach((url) => {
        expect(typeof url).toBe("string");
      });
    });
  });

  describe("URL accessibility", () => {
    it("GitHub URL is accessible format", () => {
      expect(GITHUB_URL).not.toContain(" ");
      expect(GITHUB_URL).not.toContain("\n");
      expect(GITHUB_URL).not.toContain("\t");
    });

    it("Contact URL is accessible format", () => {
      expect(CONTACT_URL).not.toContain(" ");
      expect(CONTACT_URL).not.toContain("\n");
      expect(CONTACT_URL).not.toContain("\t");
    });
  });
});
