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
    <div>
      <header style={{ display: "flex" }}>
        <Link to="/">
          {" "}
          <h2 style={{ color: "coral", marginTop: 0 }}>
            Awesome micro-frontend |
          </h2>
        </Link>
        {isLogIn ? (
          <div>
            Hello {name} | <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <h2 style={{ color: "royalblue", marginTop: 0 }}> Good morning</h2>
        )}
      </header>
      {children}
      <footer>
        <h3 style={{ color: "yellowgreen" }}>MFE with typescript</h3>
      </footer>
    </div>
  );
}

export default Layout;
