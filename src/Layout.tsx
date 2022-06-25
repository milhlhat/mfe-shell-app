import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useStore from "ShellApp/useStore";
type Props = React.PropsWithChildren<{}>;

function Layout({ children }: Props) {
  const { isLogIn, name, logout } = useStore();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div
      style={{
        width: "fit-content",
        margin: "0 auto",
      }}
    >
      <header style={{ marginBottom: 30 }}>
        <div style={{ display: "flex", marginBottom: 10 }}>
          <Link to="/">
            <h2 style={{ color: "coral", margin: 0 }}>
              Awesome micro-frontend |
            </h2>
          </Link>
          {isLogIn ? (
            <div>
              Hello {name} | <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <h2 style={{ color: "royalblue", margin: 0 }}> Good morning</h2>
          )}
        </div>

        <ul
          style={{
            display: "flex",
            columnGap: "50px",
            marginTop: 0,
            color: "royalblue",
          }}
        >
          <li>
            <Link to="/">{isLogIn ? "Home" : "Login"}</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </header>
      {children}
      <footer>
        <h3 style={{ color: "yellowgreen" }}>MFE with typescript</h3>
      </footer>
    </div>
  );
}

export default Layout;
