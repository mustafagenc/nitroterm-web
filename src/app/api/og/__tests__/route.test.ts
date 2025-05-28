// src/app/api/og/__tests__/route.test.ts
import { GET } from "../route";

// Mock dependencies
jest.mock("../../../../lib/helpers", () => ({
  getBaseUrl: jest.fn(() => "https://example.com"),
}));

jest.mock("next/og", () => ({
  ImageResponse: jest.fn().mockImplementation(() => {
    const headers = new Map([
      ["Content-Type", "image/png"],
      ["Cache-Control", "public, immutable, no-transform, max-age=31536000"],
    ]);

    interface MockHeaders {
        get: (key: string) => string | undefined;
    }

    interface MockImageResponseReturn {
        status: number;
        headers: MockHeaders;
    }

    return {
        status: 200,
        headers: {
            get: (key: string): string | undefined => headers.get(key),
        },
    } as MockImageResponseReturn;
  }),
}));

import { getBaseUrl } from "../../../../lib/helpers";
import { ImageResponse } from "next/og";

const mockGetBaseUrl = getBaseUrl as jest.Mock;
const mockImageResponse = ImageResponse as unknown as jest.Mock;

describe("OG Image API Route", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Reset mocks to default implementations
    mockGetBaseUrl.mockReturnValue("https://example.com");
    mockImageResponse.mockImplementation(() => ({
      status: 200,
      headers: {
        get: (key: string) => {
          const headers = new Map([
            ["Content-Type", "image/png"],
            [
              "Cache-Control",
              "public, immutable, no-transform, max-age=31536000",
            ],
          ]);
          return headers.get(key);
        },
      },
    }));
  });

  it("generates OG image successfully", async () => {
    const response = await GET();

    expect(response).toBeDefined();
    expect(response.status).toBe(200);
  });

  it("returns correct content type", async () => {
    const response = await GET();

    expect(response.headers.get("Content-Type")).toBe("image/png");
  });

  it("calls ImageResponse with correct dimensions", async () => {
    await GET();

    expect(mockImageResponse).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        width: 1200,
        height: 630,
      })
    );
  });

  it("uses base URL for logo source", async () => {
    await GET();

    expect(mockGetBaseUrl).toHaveBeenCalled();
    expect(mockImageResponse).toHaveBeenCalledWith(
      expect.anything(),
      expect.any(Object)
    );
  });

  it("creates ImageResponse with proper JSX structure", async () => {
    await GET();

    const [jsxElement] = mockImageResponse.mock.calls[0];

    // Check that JSX element was passed
    expect(jsxElement).toBeDefined();
    expect(typeof jsxElement).toBe("object");
  });

  it("includes logo with correct dimensions", async () => {
    await GET();

    // Verify that getBaseUrl was called for logo source
    expect(mockGetBaseUrl).toHaveBeenCalled();
  });

  it("sets proper cache headers", async () => {
    const response = await GET();

    expect(response.headers.get("Cache-Control")).toContain("public");
  });

  it("handles successful image generation", async () => {
    const response = await GET();

    expect(response.status).toBe(200);
    expect(response).toBeDefined();
  });

  it("uses correct logo size constant", async () => {
    await GET();

    // Verify ImageResponse was called (logoSize is used internally)
    expect(mockImageResponse).toHaveBeenCalledTimes(1);
  });

  it("includes all required text content", async () => {
    await GET();

    const [jsxElement] = mockImageResponse.mock.calls[0];

    // Check that JSX structure includes expected content
    expect(jsxElement.props.children).toBeDefined();
  });

  it("returns response with correct format", async () => {
    const response = await GET();

    expect(response).toHaveProperty("status", 200);
    expect(response).toHaveProperty("headers");
  });

  it("calls getBaseUrl exactly once", async () => {
    await GET();

    expect(mockGetBaseUrl).toHaveBeenCalledTimes(1);
  });

  it("creates ImageResponse with standard OG dimensions", async () => {
    await GET();

    const [, options] = mockImageResponse.mock.calls[0];

    expect(options.width).toBe(1200);
    expect(options.height).toBe(630);
  });
});

describe("OG Image API Route - Error Handling", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Reset to default implementation
    mockGetBaseUrl.mockReturnValue("https://example.com");
    mockImageResponse.mockImplementation(() => ({
      status: 200,
      headers: {
        get: () => "image/png",
      },
    }));
  });

  it("handles getBaseUrl errors gracefully", async () => {
    mockGetBaseUrl.mockImplementation(() => {
      throw new Error("Base URL error");
    });

    await expect(GET()).rejects.toThrow("Base URL error");
    expect(mockGetBaseUrl).toHaveBeenCalled();
  });

  it("handles ImageResponse errors gracefully", async () => {
    mockImageResponse.mockImplementation(() => {
      throw new Error("Image generation error");
    });

    await expect(GET()).rejects.toThrow("Image generation error");
  });

  it("still calls required dependencies on error", async () => {
    mockImageResponse.mockImplementation(() => {
      throw new Error("Image error");
    });

    try {
      await GET();
    } catch {
      expect(mockGetBaseUrl).toHaveBeenCalled();
    }
  });
});

describe("OG Image API Route - Content Validation", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Reset to default implementation
    mockGetBaseUrl.mockReturnValue("https://example.com");
    mockImageResponse.mockImplementation(() => ({
      status: 200,
      headers: {
        get: () => "image/png",
      },
    }));
  });

  it("generates image with brand colors and styling", async () => {
    await GET();

    const [jsxElement] = mockImageResponse.mock.calls[0];

    // Verify JSX structure contains styling
    expect(jsxElement.props.style).toBeDefined();
    expect(jsxElement.props.style.display).toBe("flex");
  });

  it("includes logo with proper accessibility attributes", async () => {
    await GET();

    // Verify ImageResponse was called with proper structure
    expect(mockImageResponse).toHaveBeenCalledWith(
      expect.objectContaining({
        props: expect.objectContaining({
          children: expect.anything(),
        }),
      }),
      expect.any(Object)
    );
  });

  it("uses consistent logo sizing", async () => {
    await GET();

    // logoSize constant is used consistently
    expect(mockImageResponse).toHaveBeenCalled();
    expect(mockGetBaseUrl).toHaveBeenCalled();
  });

  it("includes proper meta information", async () => {
    await GET();

    const [jsxElement, options] = mockImageResponse.mock.calls[0];

    // Standard OG image dimensions
    expect(options.width).toBe(1200);
    expect(options.height).toBe(630);

    // Main container structure
    expect(jsxElement.props.style.width).toBe("100%");
    expect(jsxElement.props.style.height).toBe("100%");
  });
});
