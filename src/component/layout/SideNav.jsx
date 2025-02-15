import { NavLink } from "react-router-dom";

function SideNav() {
  return (
    <div className="flex-[20%] md:bg-[#1e2a3a] rounded-xl py-8 px-4 h-fit md:sticky capitalize top-[6rem] overflow-hidden">
      <h1 className="text-[1.8rem] font-[500] text-white">About</h1>
      <NavLink
        to="/committees"
        className={({ isActive }) =>
          `hover:text-sky-500 text-color hover:bg-gray-600 w-full md:hover:bg-transparent py-2 block font-semibold ${
            isActive ? "text-sky-500" : ""
          }`
        }
      >
        Committees
      </NavLink>
      <NavLink
        to="/selectcommittees"
        className={({ isActive }) =>
          `hover:text-sky-500 text-color hover:bg-gray-600 w-full text-[12px] md:hover:bg-transparent pb-2 ml-2 block font-semibold ${
            isActive ? "text-sky-500" : ""
          }`
        }
      >
        - Select Committees
      </NavLink>
      <hr />
      <NavLink
        to="/employees"
        className={({ isActive }) =>
          `hover:text-sky-500 text-color hover:bg-gray-600 w-full md:hover:bg-transparent py-2 block font-semibold ${
            isActive ? "text-sky-500" : ""
          }`
        }
      >
        Employees
      </NavLink>
      <hr />
      <NavLink
        to="/Federalcertification"
        className={({ isActive }) =>
          `hover:text-sky-500 text-color hover:bg-gray-600 w-full md:hover:bg-transparent py-2 block font-semibold ${
            isActive ? "text-sky-500" : ""
          }`
        }
      >
        Federal Certification
      </NavLink>
    </div>
  );
}

export default SideNav;
