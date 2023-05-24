import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assest/logo.png";
import { HiOutlineUserCircle } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const showMenuFn = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <header className="fixed shadow-md w-full h-16 px-2  md:px-4 z-50">
      {/* desktop */}

      <div className="flex items-center h-full justify-between">
        <Link to={"/"}>
          <div className="h-10">
            <img src={logo} alt="" className="h-full" />
          </div>
        </Link>
        <div className="flex items-center gap-5 md:gap-7">
          <nav className="flex gap-4 md:gap-6 text-base md:text-lg">
            <Link to={""}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className="text-2xl text-slate-600 relative">
            <AiOutlineShoppingCart />
            <div className="absolute -top-2 -right-2 text-white bg-red-500 h-auto w-auto rounded-full m-0 p-0 text-sm text-center">
              1
            </div>
          </div>
          <div className="text-slate-600 " onClick={showMenuFn}>
            <div className="text-2xl cursor-pointer ">
              <HiOutlineUserCircle />
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2 px-2 shadow deop-shodow-md flex flex-col">
                <Link
                  to={"newproduct"}
                  className="whitespace-nowrap cursor-pointer"
                >
                  New Product
                </Link>
                <Link to={"login"} className="whitespace-nowrap cursor-pointer">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* mobile */}
    </header>
  );
}

export default Header;
