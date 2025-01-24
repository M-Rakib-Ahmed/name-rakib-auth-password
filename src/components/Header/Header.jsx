import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
    const links = <>
    <NavLink to={"/"}>Home</NavLink>
    <NavLink to={'login'}>Login</NavLink>
    <NavLink to={'register'}>Register</NavLink>
  
    <NavLink to={'signin'}>Signin</NavLink>
  
    
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <IoMdMenu className="text-3xl"></IoMdMenu>    
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow flex gap-5 text-xl font-semibold">
        {links}
      </ul>
    </div>
    <a className="btn text-xl flex items-center hidden lg:block ">M Rakib Ahmed</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-5 text-xl font-semibold">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Header;