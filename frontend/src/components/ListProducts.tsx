import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { PlusCircle } from "@phosphor-icons/react";

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
      <div className="flex gap-20 justify-center flex-wrap px-10">
        {products.length < 1 ? <h2 className="flex items-center text-2xl mt-32">Aucun produit disponible, cliquez sur le <PlusCircle size={24} className="mx-1" /> en haut à droite pour en ajouter !</h2> : products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
  );
}
