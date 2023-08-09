import ItemListContainer from "../components/page/itemList/ItemListContainer";
import CartContainer from "../components/page/cart/CartContainer";
import ItemDetail from "../components/page/itemDetail/ItemDetail";
export const routes = [
  {
    id: "home",
    path: "/ecommerce-project",
    Element: ItemListContainer,
  },
  {
    id: "categories",
    path: "/ecommerce-project/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "detail",
    path: "/ecommerce-project/itemDetail/:id",
    Element: ItemDetail,
  },
  {
    id: "cart",
    path: "/ecommerce-project/cart",
    Element: CartContainer,
  }
];
