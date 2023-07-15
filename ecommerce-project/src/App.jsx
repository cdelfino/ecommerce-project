import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout/Layout";
import ItemListContainer from "./components/page/itemList/ItemListContainer";
import Error404 from "./components/error/Error404";
import CartContainer from "./components/page/cart/CartContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/ecommerce-project/" element={<ItemListContainer />} />
          <Route path="/ecommerce-project/cart" element={<CartContainer />} />
        </Route>
        <Route path="/ecommerce-project/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
