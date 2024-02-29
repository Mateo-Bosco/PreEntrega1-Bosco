import "./App.css"
import { Navbar } from "./componets/layout/Navbar/Navbar";
import { Home } from "./componets/Home/Home";
// import { ItemListContainer } from "./Pages/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Art } from "./Pages/Art/Articulos";
import { Cart } from "./componets/common/Cart";

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Art" element={<Art/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
      {/* <ItemListContainer/> */}
      {/* <Banner/>
      <Footer/> */}
    </BrowserRouter>
    </>
  )
}

export default App
