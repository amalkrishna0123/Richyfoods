import React from "react";
import "./App.css";
import DataApi from "./components/DataApi";

function App() {
  return (
    <>
      <main className=" overflow-hidden bg-[url('assets/wallpaper.jpg')] object-cover w-full h-full">
       <DataApi/>
      </main>
    </>
  );
}

export default App;
