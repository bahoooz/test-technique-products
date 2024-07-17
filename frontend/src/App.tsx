import "./App.css";
import ListProducts from "./components/ListProducts";
import ModalCreateProduct from "./components/ModalCreateProduct";

function App() {
  return (
    <div id="home relative">
      <img
        className="absolute -top-10 left-5 hidden sm:block"
        src="../public/saslesbonsartisans_logo.jpg"
      />
      <h1 className="text-3xl font-bold text-center my-20">
        Nos produits 😎
      </h1>
      <ListProducts />
      <ModalCreateProduct />
    </div>
  );
}

export default App;
