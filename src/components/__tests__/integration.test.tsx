import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import CopyToClipboard from "../copy-to-clipboard";
import DownloadButton from "../download-button";
import { NitrokitText } from "../nitrokit";

describe("Integration Tests", () => {
  it("renders multiple components together without conflicts", () => {
    render(
      <div>
        <NitrokitText />
        <CopyToClipboard code="npm install" />
        <DownloadButton />
      </div>
    );

    expect(document.querySelector("svg")).toBeInTheDocument();
    // Birden fazla button olduğu için getAllByRole kullan
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2); // CopyToClipboard ve DownloadButton
  });

  it("handles rapid user interactions correctly", async () => {
    render(<CopyToClipboard code="test" />);

    const button = screen.getByRole("button");

    // Rapid clicks
    await act(async () => {
      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(screen.getByTestId("check-icon")).toBeInTheDocument();
    });
  });

  it("components work independently", async () => {
    render(
      <div>
        <CopyToClipboard code="test" />
        <DownloadButton />
      </div>
    );

    // Test CopyToClipboard button specifically
    const copyButton = screen.getByTestId("clipboard-icon").closest("button");
    await act(async () => {
      fireEvent.click(copyButton!);
    });

    await waitFor(() => {
      expect(screen.getByTestId("check-icon")).toBeInTheDocument();
    });

    // Test DownloadButton specifically
    const downloadButton = screen.getByTitle(/Download for/);
    expect(downloadButton).toBeInTheDocument();
  });
});
