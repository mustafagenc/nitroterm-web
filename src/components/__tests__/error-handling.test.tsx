import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import CopyToClipboard from "../copy-to-clipboard";
import DownloadButton from "../download-button";

describe("Error Handling Tests", () => {
  it("handles navigator.clipboard not available", async () => {
    // Backup original clipboard
    const originalClipboard = navigator.clipboard;

    // Remove clipboard support
    Object.defineProperty(navigator, "clipboard", {
      value: undefined,
      writable: true,
    });

    const consoleError = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    render(<CopyToClipboard code="test" />);

    const button = screen.getByRole("button");

    await act(async () => {
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(consoleError).toHaveBeenCalled();
    });

    // Restore
    Object.defineProperty(navigator, "clipboard", {
      value: originalClipboard,
      writable: true,
    });

    consoleError.mockRestore();
  });

  it("handles DownloadButton component lifecycle correctly", async () => {
    render(<DownloadButton />);

    // Component should eventually load and show download button
    await waitFor(() => {
      expect(screen.getByText(/Download for/)).toBeInTheDocument();
    });
  });

  it("handles unknown OS gracefully", async () => {
    Object.defineProperty(window.navigator, "userAgent", {
      value: "Unknown Browser/1.0",
      writable: true,
    });

    render(<DownloadButton />);

    await waitFor(() => {
      expect(screen.getByText(/Download for Linux/i)).toBeInTheDocument();
    });
  });
});
