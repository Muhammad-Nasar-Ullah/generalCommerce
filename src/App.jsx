import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar"
import Home from "./Home/Home"



function App() {

  const [products, setProducts] = useState([])
  const [addedProducts, setAddedProducts] = useState([])
  const [showCart, setShowCart] = useState(false);


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then(res => res.json())
      .then(data => setProducts(data.slice(0, 15)))
  }, [])


  return (
    <>
      <main className="w-[90%] mx-auto">
        <BrowserRouter>
          <Navbar addedProducts={addedProducts} setAddedProducts={setAddedProducts} showCart={showCart} setShowCart={setShowCart} />
          <Routes>
            <Route path="/" element={<Home products={products} addedProducts={addedProducts} setAddedProducts={setAddedProducts} />} />

          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
