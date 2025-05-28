/* eslint-disable @typescript-eslint/no-explicit-any */
// jest.setup.ts
import "@testing-library/jest-dom";

// Navigator clipboard mock
Object.defineProperty(navigator, "clipboard", {
  value: {
    writeText: jest.fn(),
  },
  writable: true,
});

// Window matchMedia mock
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// ResizeObserver mock
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// IntersectionObserver mock
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Headers mock with all required methods
class MockHeaders {
  private _headers = new Map<string, string>();

  constructor(init?: HeadersInit) {
    if (init) {
      if (init instanceof Array) {
        init.forEach(([key, value]) => this.set(key, value));
      } else if (init instanceof Headers) {
        init.forEach((value, key) => this.set(key, value));
      } else {
        Object.entries(init).forEach(([key, value]) => this.set(key, value));
      }
    }
  }

  append(name: string, value: string): void {
    const existing = this.get(name);
    if (existing) {
      this.set(name, `${existing}, ${value}`);
    } else {
      this.set(name, value);
    }
  }

  delete(name: string): void {
    this._headers.delete(name.toLowerCase());
  }

  get(name: string): string | null {
    return this._headers.get(name.toLowerCase()) || null;
  }

  has(name: string): boolean {
    return this._headers.has(name.toLowerCase());
  }

  set(name: string, value: string): void {
    this._headers.set(name.toLowerCase(), value);
  }

  forEach(callback: (value: string, key: string, parent: Headers) => void): void {
    this._headers.forEach((value, key) => callback(value, key, this as any));
  }

  keys(): IterableIterator<string> {
    return this._headers.keys();
  }

  values(): IterableIterator<string> {
    return this._headers.values();
  }

  entries(): IterableIterator<[string, string]> {
    return this._headers.entries();
  }

  [Symbol.iterator](): IterableIterator<[string, string]> {
    return this._headers.entries();
  }

  getSetCookie(): string[] {
    return [];
  }
}

// Response mock with all required methods
class MockResponse {
  body: ReadableStream | null;
  bodyUsed: boolean = false;
  headers: Headers;
  ok: boolean;
  redirected: boolean = false;
  status: number;
  statusText: string;
  type: ResponseType = 'basic';
  url: string = '';

  constructor(body?: BodyInit | null, init: ResponseInit = {}) {
    this.body = body as ReadableStream | null;
    this.status = init.status || 200;
    this.statusText = init.statusText || 'OK';
    this.ok = this.status >= 200 && this.status < 300;
    this.headers = new MockHeaders(init.headers) as any;
  }

  static error(): Response {
    return new MockResponse(null, { status: 0, statusText: '' }) as any;
  }

  static json(data: unknown, init: ResponseInit = {}): Response {
    return new MockResponse(JSON.stringify(data), {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...init.headers,
      },
    }) as any;
  }

  static redirect(url: string | URL, status: number = 302): Response {
    return new MockResponse(null, {
      status,
      headers: { Location: url.toString() },
    }) as any;
  }

  async arrayBuffer(): Promise<ArrayBuffer> {
    return new ArrayBuffer(0);
  }

  async blob(): Promise<Blob> {
    return new Blob();
  }

  async formData(): Promise<FormData> {
    return new FormData();
  }

  async json(): Promise<any> {
    return {};
  }

  async text(): Promise<string> {
    return '';
  }

  clone(): Response {
    return new MockResponse(this.body, {
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
    }) as any;
  }
}

// Set global mocks
global.Headers = MockHeaders as any;
global.Response = MockResponse as any;