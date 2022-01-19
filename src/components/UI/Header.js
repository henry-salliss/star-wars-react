import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Star Wars</h1>
      <nav>
        <ul>
          <NavLink to={"/home/movieID}"}>Episode I</NavLink>
          <NavLink to={"/home/movieID}"}>Episode II</NavLink>
          <NavLink to={"/home/movieID}"}>Episode III</NavLink>
          <NavLink to={"/home/movieID}"}>Episode IV</NavLink>
          <NavLink to={"/home/movieID}"}>Episode V</NavLink>
          <NavLink to={"/home/movieID}"}>Episode VI</NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
