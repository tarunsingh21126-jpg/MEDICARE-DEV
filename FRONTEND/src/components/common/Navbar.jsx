import { Link, NavLink } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import useAuth from "../../hooks/useAuth";


export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
const { user, logout } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          MyApp
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/forms">
                Forms
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/chat">
                Chatbot
              </NavLink>
            </li>

            {!user ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashboard">
                    Dashboard
                  </NavLink>
                </li>

                <li className="nav-item">
                  <button className="btn btn-dark btn-sm" onClick={logout}>
                    Logout
                  </button>
                </li>
              </>
            )}

            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard">
                Dashboard
              </NavLink>
            </li>

            <li className="nav-item">
              <button className="btn btn-outline-dark btn-sm" onClick={toggleTheme}>
                {theme === "light" ? "Dark" : "Light"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}