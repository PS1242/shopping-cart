import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import CartProvider from "../provider/CartProvider";
import Cart from "./Cart";

describe("testing cart in integration", () => {
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: jest.fn().mockResolvedValue(mockResponse),
      })
    );
  });
  afterEach(() => jest.clearAllMocks());

  const setup = () => {
    render(
      <CartProvider>
        <Cart />
      </CartProvider>
    );
  };

  const mockResponse = {
    products: [],
  };
  test("renders cart", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: jest.fn().mockResolvedValue(mockResponse),
      })
    );

    await waitFor(() => {
      setup();
    });
    expect(screen.getByText("Cart")).toBeInTheDocument();
    expect(screen.getByText("Cart is empty")).toBeInTheDocument();
  });
});
