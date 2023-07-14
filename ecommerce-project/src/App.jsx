/*import { useState } from "react";*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
/*import ItemList from "./components/page/itemList/ItemList";*/
import ItemList from "./components/page/itemList/ItemListContainer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route />
          <Route />
          <Route />
          <Route />
          <Routes />
          <Navbar />
          <ItemList />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
