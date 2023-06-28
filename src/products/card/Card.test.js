import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "./Card";

describe("card component", () => {
  const setup = () => {
    const addToCart = jest.fn();
    const data = {
      id: "12345",
      title: "iPhone 14 pro",
      price: "140000",
      quantity: 1,
      thumbnail: "",
    };
    render(<Card addToCart={addToCart} data={data} />);
    return {
      addToCart,
      data,
    };
  };
  test("renders card component", () => {
    setup();
    expect(screen.getByTestId("product-title")).toHaveTextContent(
      "iPhone 14 pro"
    );
    expect(screen.getByTestId("product-price")).toHaveTextContent("$140000");
  });

  test("add to cart functions properly", async () => {
    const { data, addToCart } = setup();
    const addBtn = screen.getByRole("button");
    expect(addBtn).toHaveTextContent("Add to cart");
    await userEvent.click(addBtn);
    expect(addToCart).toHaveBeenCalledWith(data);
  });
});
