import React from "react";
import { screen, render } from "@testing-library/react";
import ProductsPage from "./ProductsPage";
import CartProvider from "../provider/CartProvider";

describe("main products page", () => {
  test("products page", () => {
    const mockData = {
      products: [],
    };
    jest.spyOn(global, "fetch").mockImplementationOnce(() =>
      Promise.resolve({
        json: jest.fn().mockResolvedValue(mockData),
      })
    );
    render(
      <CartProvider>
        <ProductsPage />
      </CartProvider>
    );
    expect(screen.getByText("Products")).toBeInTheDocument();
  });
});
