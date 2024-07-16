import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ListProducts() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:3000/api/product/getproducts");
    if (!res.ok) {
      return console.log("Erreur d'affichage des produits");
    }
    if (res.ok) {
      const data = await res.json();
        setProducts(data);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      ListProducts
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
