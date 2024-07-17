import {
  CheckFat,
  DeviceMobile,
  DeviceTabletSpeaker,
  Laptop,
  Notepad,
  Package,
  Star,
  Tag,
  X,
} from "@phosphor-icons/react";
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
    <div
      id="product-card"
      className="w-80 h-80 bg-[#2F1B67] text-white relative rounded-xl"
    >
      <h3 className="flex flex-col text-center font-bold mt-8 text-xl">
        {product.name}
      </h3>
      <div className="flex flex-col text-center gap-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="flex text-xl gap-1 items-center justify-center capitalize font-medium">
          {product.type === "phone" ? (
            <DeviceMobile size={32} />
          ) : product.type === "computer" ? (
            <Laptop size={32} />
          ) : product.type === "tablet" ? (
            <DeviceTabletSpeaker size={32} />
          ) : (
            ""
          )}
          {product.type}
        </p>
        <div className="flex justify-center">
          {" "}
          {product.rating >= 1 && product.rating < 2 ? (
            <span>
              <Star color="#FFDA56" size={28} />
            </span>
          ) : product.rating >= 2 && product.rating < 3 ? (
            <span className="flex">
              <Star color="#FFDA56" size={28} />{" "}
              <Star color="#FFDA56" size={28} />
            </span>
          ) : product.rating >= 3 && product.rating < 4 ? (
            <span className="flex">
              <Star color="#FFDA56" size={28} />{" "}
              <Star color="#FFDA56" size={28} />{" "}
              <Star color="#FFDA56" size={28} />
            </span>
          ) : product.rating >= 4 && product.rating < 5 ? (
            <span className="flex">
              <Star color="#FFDA56" size={28} />{" "}
              <Star color="#FFDA56" size={28} />{" "}
              <Star color="#FFDA56" size={28} />{" "}
              <Star color="#FFDA56" size={28} />
            </span>
          ) : product.rating === 5 ? (
            <span className="flex">
              <Star color="#FFDA56" size={28} />{" "}
              <Star color="#FFDA56" size={28} />{" "}
              <Star color="#FFDA56" size={28} />{" "}
              <Star color="#FFDA56" size={28} />
            </span>
          ) : (
            ""
          )}
        </div>
        <p className="flex items-center text-center justify-center gap-1 font-medium text-lg">
          {" "}
          <Notepad size={26} /> Garantie {product.warranty_years}{" "}
          {product.warranty_years === 1 ? "an" : "ans"}
        </p>
      </div>
      <p
        id="price"
        className="flex items-center text-lg font-medium gap-3 absolute -translate-x-0 translate-y-1/2 bottom-8 left-4"
      >
        <Tag size={32} /> {product.price} €
      </p>
      {product.available === true ? (
        <p className="flex absolute translate-x-1/2 translate-y-1/2 bottom-8 right-14 gap-1">
          <Package size={32} />
          <CheckFat className="text-green-400" weight="regular" size={32} />
        </p>
      ) : (
        <p className="flex absolute translate-x-1/2 translate-y-1/2 bottom-8 right-[52px]">
          <Package size={32} />
          <X className="text-red-500" weight="bold" size={32} />
        </p>
      )}

      <ModalDeleteProduct productId={product._id} />
      <ModalUpdateProduct productId={product._id} />
    </div>
  );
}
