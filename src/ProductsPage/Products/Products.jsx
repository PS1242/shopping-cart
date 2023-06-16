import { useContext } from "react";
import Card from "./Card";
import { CartContext } from "../../App";

function Products() {
  const { products } = useContext(CartContext);

  return (
    <>
      {products.map((product) => (
        <Card key={product.id} data={product} />
      ))}
    </>
  );
}

export default Products;
