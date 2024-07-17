import './App.css'
import ListProducts from './components/ListProducts'
import ModalCreateProduct from './components/ModalCreateProduct'

function App() {

  return (
    <>
      <h1 className='text-3xl bg-blue-300 '>Voici la liste de tous nos produits 😎</h1>
      <ListProducts />
      <ModalCreateProduct />
    </>
  )
}

export default App
