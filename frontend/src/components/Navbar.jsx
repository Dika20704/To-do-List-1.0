import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setOpen] = useState(false); //kunci//

  return (
    <div className="bg-white shadow-2xl shadow-black fixed top-0 left-0 right-0 ">
      <nav className=" flex justify-between items-center  mx-2 my-1 lg:mx-6 lg:my-3">
        <h1 className="font-bold text-2xl lg:text-4xl flex items-center">To Do List <span className="text-sm mx-2.5">1.0</span></h1>
        <div className="flex  justify-between gap-6 lg:text-lg">
          <div
            className={`sidebar gap-20 max-lg:px-10 max-lg:w-70 max-lg:bg-white max-lg:shadow-2xl max-lg:h-screen max-lg:fixed max-lg:right-0 max-lg:top-0 max-lg:flex max-lg:flex-col-reverse max-lg:justify-center max-lg:transition-transform lg:flex lg:flex-row ${
              isOpen ? "max-lg:translate-x-0" : "max-lg:translate-x-full"
            }`}
          >
            {" "}
            <ul className="navbar flex flex-col gap-6 max-lg:gap-10  lg:flex-row items-center max-lg:items-start">
              <li className="font-medium" onClick={() => setOpen(false)}>
                <NavLink to="/">Home </NavLink>{" "}
              </li>
              <li className="font-medium" onClick={() => setOpen(false)}>
                <NavLink to="/List">List</NavLink>{" "}
              </li>
              <li className="font-medium" onClick={() => setOpen(false)}>
                <NavLink>Contact</NavLink>{" "}
              </li>
            </ul>
            <button
              type="button"
              aria-label="Close navigation"
              onClick={() => setOpen(false)}
              className="lg:hidden text-4xl absolute top-5 right-5"
            >
              x
            </button>
          </div>
        </div>
        <button
          type="button"
          aria-label="Open navigation"
          aria-expanded={isOpen}
          onClick={() => setOpen(true)}
          className="lg:hidden"
        >
          Menu
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
