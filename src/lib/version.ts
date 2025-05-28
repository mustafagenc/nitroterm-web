export interface CargoToml {
  version: string;
  name?: string;
  description?: string;
}

export async function fetchCargoVersion(): Promise<string | null> {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/mustafagenc/nitroterm/refs/heads/main/Cargo.toml",
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const cargoContent = await response.text();
    const version = parseCargoVersion(cargoContent);

    return version;
  } catch (error) {
    console.error("Failed to fetch Cargo.toml:", error);
    return null;
  }
}

export function parseCargoVersion(cargoContent: string): string | null {
  try {
    const packageSection = cargoContent.match(/\[package\]([\s\S]*?)(?=\[|$)/);

    if (!packageSection) {
      return null;
    }

    const versionMatch = packageSection[1].match(
      /version\s*=\s*["']([^"']+)["']/
    );

    return versionMatch ? versionMatch[1] : null;
  } catch (error) {
    console.error("Failed to parse Cargo.toml:", error);
    return null;
  }
}

export async function fetchCargoMetadata(): Promise<CargoToml | null> {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/mustafagenc/nitroterm/refs/heads/main/Cargo.toml",
      {
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const cargoContent = await response.text();

    return parseCargoMetadata(cargoContent);
  } catch (error) {
    console.error("Failed to fetch Cargo metadata:", error);
    return null;
  }
}

export function parseCargoMetadata(cargoContent: string): CargoToml | null {
  try {
    const packageSection = cargoContent.match(/\[package\]([\s\S]*?)(?=\[|$)/);

    if (!packageSection) {
      return null;
    }

    const packageText = packageSection[1];

    const versionMatch = packageText.match(/version\s*=\s*["']([^"']+)["']/);
    const nameMatch = packageText.match(/name\s*=\s*["']([^"']+)["']/);
    const descriptionMatch = packageText.match(
      /description\s*=\s*["']([^"']+)["']/
    );

    return {
      version: versionMatch ? versionMatch[1] : "unknown",
      name: nameMatch ? nameMatch[1] : undefined,
      description: descriptionMatch ? descriptionMatch[1] : undefined,
    };
  } catch (error) {
    console.error("Failed to parse Cargo metadata:", error);
    return null;
  }
}
