import React from "react";
import { screen, render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartProvider from "../../provider/CartProvider";
import ProductsList from "./ProductsList";

describe("products list component", () => {
  const mockData = {
    products: [
      {
        id: "12345",
        title: "iPhone 14 pro",
        price: "140000",
        quantity: 1,
        thumbnail: "",
      },
      {
        id: "23456",
        title: "macbook pro",
        price: "240000",
        quantity: 1,
        thumbnail: "",
      },
    ],
  };
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: jest.fn().mockResolvedValue(mockData),
      })
    );
  });
  afterEach(() => jest.clearAllMocks());

  const setup = () => {
    render(
      <CartProvider>
        <ProductsList />
      </CartProvider>
    );
    const getAllProducts = () =>
      screen
        .getAllByTestId("product-card")
        .map((card) => within(card).getByTestId("product-title").textContent);

    return { getAllProducts };
  };

  test("renders list of products", async () => {
    let getAllProducts;
    await waitFor(() => {
      getAllProducts = setup().getAllProducts;
    });
    const testInput = ["iPhone 14 pro", "macbook pro"];
    const products = getAllProducts();
    products.forEach((product, index) => {
      expect(product).toEqual(testInput[index]);
    });
  });

  // this part is already tested with the card component, but still testing again here
  test("add to cart button functions properly", async () => {
    await waitFor(() => {
      setup();
    });
    const testInput = "macbook pro";

    const addToCartButton = screen
      .getAllByTestId("product-card")
      .filter(
        (card) =>
          within(card).getByTestId("product-title").textContent === testInput
      )
      .map((card) => within(card).getByRole("button"));

    expect(addToCartButton[0]).toHaveTextContent("Add to cart");
    await userEvent.click(addToCartButton[0]);
    expect(addToCartButton[0]).toHaveTextContent("Added");
  });
});
