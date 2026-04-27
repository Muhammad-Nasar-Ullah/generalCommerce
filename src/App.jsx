import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar"
import Home from "./Home/Home"



function App() {

  const [products, setProducts] = useState([]);
  const [addedProducts, setAddedProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All Categories');


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])


  return (
    <>
      <main className="w-[90%] mx-auto">
        <BrowserRouter>
          <Navbar products={products} addedProducts={addedProducts} setAddedProducts={setAddedProducts} showCart={showCart} setShowCart={setShowCart} search={search} setSearch={setSearch} />
          <Routes>
            <Route path="/" element={<Home products={products} addedProducts={addedProducts} setAddedProducts={setAddedProducts} search={search} category={category} setCategory={setCategory} />} />

          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
