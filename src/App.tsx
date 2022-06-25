import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SuspenseLayout from "./SuspenseLayout";
const Login = React.lazy(() => import("OrderApp/Login"));
const OrderDetail = React.lazy(() => import("OrderApp/OrderDetail"));
const ProductDetail = React.lazy(() => import("ProductApp/ProductDetail"));
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <><SuspenseLayout><Login /></SuspenseLayout></>
            }
          />
          <Route
            path="order"
            element={
              <SuspenseLayout>
                <OrderDetail />
              </SuspenseLayout>
            }
          />
          <Route
            path="product"
            element={
              <SuspenseLayout>
                <ProductDetail />
              </SuspenseLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const rootEl = document.getElementById("root");
const render = (Component) => ReactDOM.render(<Component />, rootEl);
render(App);
