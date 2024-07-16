import ModalDeleteProduct from "./ModalDeleteProduct";
import ModalUpdateProduct from "./ModalUpdateProduct";

interface Product {
  name: string;
  type: string;
  price: number;
  rating: number;
  warranty_years: number;
  available: boolean;
  _id: string;
}
export default function ProductCard({ product }: { product: Product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <span>{product.type}</span>
      <span>{product.price}</span>
      <span>{product.rating}</span>
      <span>{product.warranty_years}</span>
      {
        (product.available === true ? (
          <span>Disponible</span>
        ) : (
          <span>Pas disponible</span>
        ))
      }
      <ModalDeleteProduct productId={product._id} />
      <ModalUpdateProduct productId={product._id} />
    </div>
  );
}
