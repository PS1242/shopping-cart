import { useContext } from "react";
import Card from "./card/Card";
import { CartContext } from "../provider/CartProvider";

function Products() {
  const { products, setCartItems, setProducts } = useContext(CartContext);

  const addToCart = (data) => {
    if (data.addedToCart) return;

    const updateData = products.map((item) => ({
      ...item,
      addedToCart: item.id === data.id ? true : item.addedToCart,
    }));
    setProducts(updateData);

    setCartItems((prev) => [
      ...prev,
      {
        id: data.id,
        title: data.title,
        price: data.price,
        quantity: 1,
        thumbnail: data.thumbnail,
      },
    ]);
  };

  return (
    <>
      {products.map((product) => (
        <Card key={product.id} data={product} addToCart={addToCart} />
      ))}
    </>
  );
}

export default Products;
