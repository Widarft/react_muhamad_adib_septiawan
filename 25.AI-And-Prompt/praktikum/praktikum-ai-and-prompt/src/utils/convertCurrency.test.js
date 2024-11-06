import { describe, it, expect, vi, beforeEach } from "vitest";
import { convertCurrency } from "./convertCurrency";

describe("convertCurrency", () => {
  beforeEach(() => {
    vi.resetAllMocks();
    console.log = vi.fn();
    console.error = vi.fn();
  });

  it("should successfully convert USD to IDR", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve({
          rates: {
            IDR: 15000,
          },
        }),
    });

    const result = await convertCurrency(100, "USD", "IDR");

    expect(result).toBe(1500000);

    expect(fetch).toHaveBeenCalledWith(
      "https://api.exchangerate-api.com/v4/latest/USD"
    );

    expect(console.log).toHaveBeenCalledWith("Converted Amount: 1500000");
  });

  it("should handle invalid currency code", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve({
          rates: {
            EUR: 0.85,
          },
        }),
    });

    await convertCurrency(100, "USD", "IDR");

    expect(console.error).toHaveBeenCalledWith("Error:", expect.any(Error));
  });

  it("should handle network error", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

    await convertCurrency(100, "USD", "IDR");

    expect(console.error).toHaveBeenCalledWith("Error:", expect.any(Error));
  });

  it("should handle API error response", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
    });

    await convertCurrency(100, "USD", "IDR");

    expect(console.error).toHaveBeenCalledWith("Error:", expect.any(Error));
  });
});
