import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import DownloadButton from "../download-button";

const mockOpen = jest.fn();

beforeAll(() => {
  Object.defineProperty(window, "open", {
    value: mockOpen,
    writable: true,
  });
});

describe("DownloadButton", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("detects macOS and shows download button", async () => {
    Object.defineProperty(window.navigator, "userAgent", {
      value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
      writable: true,
    });

    render(<DownloadButton />);

    // İlk loading state'i atlamak için bekleyelim
    await waitFor(() => {
      expect(screen.getByText(/Download for macOS/i)).toBeInTheDocument();
    });
  });

  it("detects Windows OS and shows Windows download", async () => {
    Object.defineProperty(window.navigator, "userAgent", {
      value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      writable: true,
    });

    render(<DownloadButton />);

    await waitFor(() => {
      expect(screen.getByText(/Download for Windows/i)).toBeInTheDocument();
    });
  });

  it("downloads correct file for Windows", async () => {
    Object.defineProperty(window.navigator, "userAgent", {
      value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      writable: true,
    });

    render(<DownloadButton />);

    await waitFor(() => {
      const button = screen.getByRole("button");
      fireEvent.click(button);
    });

    expect(mockOpen).toHaveBeenCalledWith(
      expect.stringContaining("nitrokit-windows"),
      "_blank"
    );
  });

  it("shows macOS dropdown when clicked", async () => {
    Object.defineProperty(window.navigator, "userAgent", {
      value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
      writable: true,
    });

    render(<DownloadButton />);

    await waitFor(() => {
      const button = screen.getByRole("button");
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(screen.getByText("macOS (Apple Silicon)")).toBeInTheDocument();
      expect(screen.getByText("macOS (Intel)")).toBeInTheDocument();
    });
  });
});
