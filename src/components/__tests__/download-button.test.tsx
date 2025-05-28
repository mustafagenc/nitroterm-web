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

describe('DownloadButton - Additional Coverage', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('downloads macOS Intel version when selected', async () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
      writable: true,
    })

    render(<DownloadButton />)

    await waitFor(() => {
      fireEvent.click(screen.getByRole('button'))
    })

    await waitFor(() => {
      const intelButton = screen.getByText('macOS (Intel)')
      fireEvent.click(intelButton)
    })

    // Gerçek download URL pattern'ini kontrol et
    expect(mockOpen).toHaveBeenCalledWith(
      expect.stringMatching(/nitrokit.*intel|x64|x86_64/i),
      '_blank'
    )
  })

  it('downloads macOS Apple Silicon version when selected', async () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
      writable: true,
    })

    render(<DownloadButton />)

    await waitFor(() => {
      fireEvent.click(screen.getByRole('button'))
    })

    await waitFor(() => {
      const appleButton = screen.getByText('macOS (Apple Silicon)')
      fireEvent.click(appleButton)
    })

    // Gerçek download URL pattern'ini kontrol et
    expect(mockOpen).toHaveBeenCalledWith(
      expect.stringMatching(/nitrokit.*arm64|silicon/i),
      '_blank'
    )
  })

  it('detects and downloads for Linux', async () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value: 'Mozilla/5.0 (X11; Linux x86_64)',
      writable: true,
    })

    render(<DownloadButton />)

    await waitFor(() => {
      const button = screen.getByRole('button')
      fireEvent.click(button)
    })

    expect(mockOpen).toHaveBeenCalledWith(
      expect.stringMatching(/nitrokit.*linux/i),
      '_blank'
    )
  })

})