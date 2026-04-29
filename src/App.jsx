import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar"
import Home from "./Home/Home"
import LikedProducts from "./Navbar/LikedProducts"

function App() {

  const [products, setProducts] = useState([]);
  const [addedProducts, setAddedProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All Categories');

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, [])


  return (
    <>
      <main className="w-[90%] mx-auto">
        <BrowserRouter>
          <Navbar products={products} addedProducts={addedProducts} setAddedProducts={setAddedProducts} likedProducts={likedProducts} showCart={showCart} setShowCart={setShowCart} search={search} setSearch={setSearch} />
          <Routes>
            <Route path="/" element={<Home products={products} setProducts={setProducts} addedProducts={addedProducts} setAddedProducts={setAddedProducts} likedProducts={likedProducts} setLikedProducts={setLikedProducts} search={search} category={category} setCategory={setCategory} />} />
            <Route path="/liked" element={<LikedProducts likedProducts={likedProducts} setLikedProducts={setLikedProducts} addedProducts={addedProducts} setAddedProducts={setAddedProducts} />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
