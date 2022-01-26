import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Star Wars</h1>
      <nav>
        <ul>
          <NavLink to={"/movies/4"}>Episode I</NavLink>
          <NavLink to={"/movies/5"}>Episode II</NavLink>
          <NavLink to={"/movies/6"}>Episode III</NavLink>
          <NavLink to={"/movies/1"}>Episode IV</NavLink>
          <NavLink to={"/movies/2"}>Episode V</NavLink>
          <NavLink to={"/movies/3"}>Episode VI</NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
