import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { CoinsContext } from "./CoinManager";

function TodoNavBar() {
  const { coinState } = useContext(CoinsContext);
  console.log(coinState);
  return (
    //using context api to provide context and useContext wherever necessary to consme it
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <img src="/logo.svg" alt="Logo" width={"50%"} height={"50%"} />
          LOGO
        </div>
        <ul className="navbar-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Challenges</NavLink>
          </li>
          <li>
            Coins: <span>{coinState}</span>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default TodoNavBar;
