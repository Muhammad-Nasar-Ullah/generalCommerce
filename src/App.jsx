import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar"
import Home from "./Home/Home"
import Cart from "./Cart/Cart"


function App() {

  const [products, setProducts] = useState([])
  const [addedProducts, setAddedProducts] = useState([])

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/`)
      .then(res => res.json())
      .then(data => setProducts(data.slice(0, 15)))
  }, [])


  return (
    <>
      <main className="w-[90%] mx-auto">
        <BrowserRouter>
          <Navbar addedProducts={addedProducts} />
          <Routes>
            <Route path="/" element={<Home products={products} addedProducts={addedProducts} setAddedProducts={setAddedProducts} />} />
            <Route path="/cart" element={<Cart setAddedProducts={setAddedProducts} addedProducts={addedProducts} />} />

          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
