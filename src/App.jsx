import "./App.css"
import { Navbar } from "./componets/layout/Navbar/Navbar";
import { Home } from "./componets/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Art } from "./Pages/Art/Articulos";
import { Cart } from "./componets/common/Cart";
import { ItemDetailContainer } from "./Pages/ItemDetailContainer";
import { ItemListContainer } from "./Pages/ItemListContainer";

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Art" element={<Art/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/category/:category" element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
