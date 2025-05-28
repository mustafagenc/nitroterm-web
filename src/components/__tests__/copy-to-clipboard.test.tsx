import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import { toast } from "sonner";
import CopyToClipboard from "../copy-to-clipboard";

jest.mock("sonner", () => ({
  toast: jest.fn(),
}));

const mockToast = toast as jest.MockedFunction<typeof toast>;

describe("CopyToClipboard", () => {
  const mockCode = "npm install nitrokit-terminal";

  beforeEach(() => {
    jest.clearAllMocks();
    (navigator.clipboard.writeText as jest.Mock).mockResolvedValue(undefined);
  });

  it("renders copy button with clipboard icon", () => {
    render(<CopyToClipboard code={mockCode} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(screen.getByTestId("clipboard-icon")).toBeInTheDocument();
  });

  it("copies code to clipboard when clicked", async () => {
    render(<CopyToClipboard code={mockCode} />);

    const button = screen.getByRole("button");

    await act(async () => {
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(mockCode);
      expect(mockToast).toHaveBeenCalledWith("Copied to clipboard", {
        duration: 2000,
      });
    });
  });

  it("shows check icon when copied successfully", async () => {
    render(<CopyToClipboard code={mockCode} />);

    const button = screen.getByRole("button");

    await act(async () => {
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(screen.getByTestId("check-icon")).toBeInTheDocument();
      expect(screen.queryByTestId("clipboard-icon")).not.toBeInTheDocument();
    });
  });

  it("reverts to clipboard icon after timeout", async () => {
    jest.useFakeTimers();

    render(<CopyToClipboard code={mockCode} />);

    const button = screen.getByRole("button");

    // Click button to trigger copy
    await act(async () => {
      fireEvent.click(button);
    });

    // Check icon appears
    await waitFor(() => {
      expect(screen.getByTestId("check-icon")).toBeInTheDocument();
    });

    // Fast forward past the timeout and wrap in act
    await act(async () => {
      jest.advanceTimersByTime(2100);
    });

    // Check icon should be gone, clipboard icon should be back
    await waitFor(() => {
      expect(screen.queryByTestId("check-icon")).not.toBeInTheDocument();
      expect(screen.getByTestId("clipboard-icon")).toBeInTheDocument();
    });

    jest.useRealTimers();
  });

  it("handles clipboard write error gracefully", async () => {
    const consoleError = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    (navigator.clipboard.writeText as jest.Mock).mockRejectedValue(
      new Error("Clipboard error")
    );

    render(<CopyToClipboard code={mockCode} />);

    const button = screen.getByRole("button");

    await act(async () => {
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(consoleError).toHaveBeenCalledWith(
        "Error copying to clipboard",
        expect.any(Error)
      );
    });

    consoleError.mockRestore();
  });
});
