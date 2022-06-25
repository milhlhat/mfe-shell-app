import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import useStore from "ShellApp/useStore";
import SuspenseLayout from "./SuspenseLayout";
const Login = React.lazy(() => import("./Login"));
const OrderDetail = React.lazy(() => import("OrderApp/OrderDetail"));
const ProductDetail = React.lazy(() => import("ProductApp/ProductDetail"));
const App = () => {
  const {isLogIn} = useStore();
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SuspenseLayout>
                 <div>ShellApp<Login /></div> 
                </SuspenseLayout>
              </>
            }
          />
          {isLogIn && <>
          <Route
            path="order"
            element={
              <SuspenseLayout>
              <div>OrderApp<OrderDetail /></div>  
              </SuspenseLayout>
            }
          />
          <Route
            path="product"
            element={
              <SuspenseLayout>
                 <div>ProductApp<ProductDetail /></div>
              </SuspenseLayout>
            }
          /></>}
          {/* not found */}
          <Route path="*" element={<div>Đã đăng nhập chưa, đã đúng route chưa ????? <Link to="/">Go home</Link></div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const rootEl = document.getElementById("root");
const render = (Component) => ReactDOM.render(<Component />, rootEl);
render(App);
