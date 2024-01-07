import React from "react";
import "./App.css";
import DataApi from "./components/DataApi";
import { AddToCartContext } from "./components/AddToCartContext";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <AddToCartContext>
        <main>
          <Routes>
            <Route path="/" element={<DataApi />}/>
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
        </main>
      </AddToCartContext>
    </>
  );
}

export default App;
