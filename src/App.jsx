import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home"
import Navbar from "./Navbar/Navbar"


function App() {

  return (
    <>
      <main className="w-[90%] mx-auto">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />

          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
