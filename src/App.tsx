import "./scss/app.scss";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Loadable from "react-loadable";

// const FullPizza = React.lazy(
//   () => import(/* webpackChunkName: "fullPizzas" */ "./components/fullPizzas")
// );
// const NotFound = React.lazy(
//   () => import(/* webpackChunkName: "NotFound" */ "./pages/NotFound")
// );
// const Cart = React.lazy(
//     () => import(/* webpackChunkName: "Cart" */ "./pages/Cart")
// );

const FullPizza = Loadable({
  loader: () =>
    import(/* webpackChunkName: "fullPizzas" */ "./components/fullPizzas"),
  loading: () => null,
});

const NotFound = Loadable({
  loader: () => import(/* webpackChunkName: "NotFound" */ "./pages/NotFound"),
  loading: () => <div>Loading...</div>,
});

const Cart = Loadable({
  loader: () => import(/* webpackChunkName: "Cart" */ "./pages/Cart"),
  loading: () => <div>Loading...</div>,
});

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
