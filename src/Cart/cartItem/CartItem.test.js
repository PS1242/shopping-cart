import React from "react";
import { screen, render } from "@testing-library/react";
import CartItem from "./CartItem";
import userEvent from "@testing-library/user-event";

describe("cart item", () => {
  const setup = () => {
    const increaseQuantity = jest.fn();
    const decreaseQuantity = jest.fn();
    const data = {
      id: "12345",
      title: "iPhone 14 pro",
      price: "140000",
      quantity: 1,
      thumbnail: "",
    };
    render(
      <CartItem
        data={data}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
      />
    );
    const incBtn = screen.getByTestId("increase-quantity-button");
    const decBtn = screen.getByTestId("decrease-quantity-button");
    return {
      incBtn,
      decBtn,
      increaseQuantity,
      decreaseQuantity,
    };
  };
  test("renders single cart item", () => {
    setup();
    expect(screen.getByTestId("product-count")).toHaveTextContent("1");
    expect(screen.getByTestId("product-quantity")).toHaveTextContent("Qty: 1");
  });

  test("increase and decrease buttons function properly", async () => {
    const { incBtn, decBtn, decreaseQuantity, increaseQuantity } = setup();

    // increase quantity
    await userEvent.click(incBtn);
    expect(increaseQuantity).toHaveBeenCalled();
    expect(increaseQuantity).toHaveBeenCalledWith("12345");

    // decrease quantity
    await userEvent.click(decBtn);
    expect(decreaseQuantity).toHaveBeenCalled();
    expect(decreaseQuantity).toHaveBeenCalledWith("12345", 1);
  });
});
