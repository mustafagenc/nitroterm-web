import { parseCargoVersion, parseCargoMetadata } from "../version";

describe("Version Parser", () => {
  const mockCargoToml = `
[package]
name = "nitroterm"
version = "1.2.3"
description = "A powerful terminal application"

[dependencies]
tokio = "1.0"
`;

  it("parses version correctly", () => {
    const version = parseCargoVersion(mockCargoToml);
    expect(version).toBe("1.2.3");
  });

  it("parses full metadata correctly", () => {
    const metadata = parseCargoMetadata(mockCargoToml);
    expect(metadata).toEqual({
      name: "nitroterm",
      version: "1.2.3",
      description: "A powerful terminal application",
    });
  });

  it("handles malformed content", () => {
    const version = parseCargoVersion("invalid content");
    expect(version).toBeNull();
  });

  it("handles missing version", () => {
    const cargoWithoutVersion = `
[package]
name = "test"
`;
    const version = parseCargoVersion(cargoWithoutVersion);
    expect(version).toBeNull();
  });
});
