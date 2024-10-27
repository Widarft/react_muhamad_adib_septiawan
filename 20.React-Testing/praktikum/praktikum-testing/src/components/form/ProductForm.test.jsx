import { render, screen, fireEvent } from "@testing-library/react";
import ProductForm from "./ProductForm";
import { vi } from "vitest";

const mockAddProduct = vi.fn();
const mockUpdateProduct = vi.fn();

vi.mock("../../../store/useProductStore", () => ({
  default: () => ({
    addProduct: mockAddProduct,
    updateProduct: mockUpdateProduct,
  }),
}));

describe("ProductForm Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("Prioritas 1.1 (updates product name state on input change)", () => {
    render(<ProductForm />);
    const productNameInput = screen.getByLabelText("Product Name");

    fireEvent.change(productNameInput, { target: { value: "Test Product" } });
    expect(productNameInput.value).toBe("Test Product");
  });

  test("Prioritas 1.2 (saves and displays selected form options correctly)", () => {
    render(<ProductForm />);

    const productCategoryInput = screen.getByLabelText("Product Category");
    fireEvent.change(productCategoryInput, { target: { value: "laptop" } });
    expect(productCategoryInput.value).toBe("laptop");

    const brandNewOption = screen.getByLabelText("Brand New");
    fireEvent.click(brandNewOption);
    expect(brandNewOption.checked).toBe(true);
  });

  test("Prioritas 2.1 (displays error for invalid characters in Product Name)", () => {
    render(<ProductForm />);

    const productNameInput = screen.getByLabelText("Product Name");
    fireEvent.change(productNameInput, {
      target: { value: "Invalid@Product" },
    });

    expect(
      screen.getByText(
        "Product Name should contain only letters, numbers, and spaces."
      )
    ).toBeInTheDocument();
  });

  test("Prioritas 2.2 (shows error if product name exceeds character limit)", () => {
    render(<ProductForm />);
    const productNameInput = screen.getByLabelText("Product Name");

    fireEvent.change(productNameInput, { target: { value: "A".repeat(26) } });
    expect(
      screen.getByText("Product Name must not exceed 25 characters.")
    ).toBeInTheDocument();
  });

  test("Prioritas 2.3 (does not submit form with empty required fields)", () => {
    render(<ProductForm />);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    fireEvent.click(submitButton);

    expect(
      screen.getByText("Please enter a valid product name.")
    ).toBeInTheDocument();
    expect(mockAddProduct).not.toHaveBeenCalled();
    expect(mockUpdateProduct).not.toHaveBeenCalled();
  });
});
