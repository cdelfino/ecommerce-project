import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout/Layout";
import Error404 from "../components/error/Error404";
import { routes } from "./routes";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AppRouter;
