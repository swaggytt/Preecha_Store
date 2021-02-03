import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="content">
        <NavLink className='main-nav' to="/">
          <i className="home fas fa-home"></i>
        </NavLink>
        <NavLink className='main-nav' activeClassName='main-nav-active' exact to="/">Home</NavLink>
        <NavLink className='main-nav' activeClassName='main-nav-active' exact to="/product">Product</NavLink>
        <NavLink className='main-nav' activeClassName='main-nav-active' exact to="addproduct">addProduct</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
