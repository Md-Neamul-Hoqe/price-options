// import {  } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "@react-icons/all-files/ai/AiOutlineMenuUnfold";
import { AiOutlineMenuFold } from "@react-icons/all-files/ai/AiOutlineMenufold";
import Link from "../Link/Link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/services", name: "Services" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <nav className="text-black bg-green-300 p-6">
      <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
        {open ? (
          <AiOutlineMenuUnfold></AiOutlineMenuUnfold>
        ) : (
          <AiOutlineMenuFold></AiOutlineMenuFold>
        )}
      </div>
      <ul
        className={`md:flex duration-1000 absolute md:static z-50 max-md:shadow-lg bg-green-300 p-2 text-black rounded ${
          open ? "top-16" : "-top-60"
        }`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
