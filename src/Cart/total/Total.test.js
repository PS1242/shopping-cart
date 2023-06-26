import * as React from "react";
import { screen, render } from "@testing-library/react";
import Total from "./Total";

describe("cart total", () => {
  it("renders empty cart", () => {
    render(<Total cartItems={[]} />);
    expect(screen.getByTestId("empty-cart")).toBeInTheDocument();
  });

  it("renders total component with correct value", () => {
    const cartItems = [
      {
        id: "12345",
        title: "iPhone 14 pro",
        price: "140000",
        quantity: 2,
        thumbnail: "",
      },
    ];
    render(<Total cartItems={cartItems} />);
    expect(screen.getByTestId("total-amount")).toBeInTheDocument();
    expect(screen.getByTestId("total-amount")).toHaveTextContent(
      "Total: $280000"
    );
    expect(screen.queryByTestId("empty-cart")).toBeNull();
  });
});
