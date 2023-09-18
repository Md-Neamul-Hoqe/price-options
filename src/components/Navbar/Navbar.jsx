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
    <nav className="text-black bg-green-300 p-6 flex justify-between items-center">
      <div>
        <a href="#" className="font-black">
          Demo Name
        </a>
      </div>
      <ul
        className={`md:flex items-center max-md:w-96 duration-1000 absolute md:static z-50 max-md:shadow-lg bg-green-300 max-md:p-2 text-black rounded ${
          open ? "top-[75px] right-12" : "-top-80 right-12"
        }`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
        <fieldset className="max-md:my-1 flex min-md:min-w-[300px]">
          <input
            className="bg-green-200 w-full p-2 px-2 rounded-s-lg focus:outline outline-green-500"
            type="email"
            name="email"
            id="email"
            placeholder="example@company.domain"
          />
          <input
            className="btn btn-accent focus:outline outline-1 outline-green-500 rounded-s-none"
            type="submit"
            value="submit"
          />
        </fieldset>
      </ul>
      <div
        className="text-2xl md:hidden absolute right-6 top-6"
        onClick={() => setOpen(!open)}>
        {open ? (
          <AiOutlineMenuFold></AiOutlineMenuFold>
        ) : (
          <AiOutlineMenuUnfold></AiOutlineMenuUnfold>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
