import { NavLink } from "react-router-dom";

const Nav = (props) => {
  const checkIsactive = ({ isActive }) => {
    return {
      display: "block",
      margin: "1rem 0",
      color: isActive ? "orange" : "",
    };
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink style={checkIsactive} to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink style={checkIsactive} to="/log">LOG</NavLink>
        </li>
        <li>
          <NavLink style={checkIsactive} to="/post/1">post 1</NavLink>
        </li>
        <li>
          <NavLink style={checkIsactive} to="/post/2">post 2</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;