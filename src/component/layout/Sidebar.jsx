import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="md:bg-[#1e2a3a] rounded-xl py-8 px-4 h-fit md:sticky capitalize  top-[6rem]">
            <h2>home</h2>
            <Link
                className=" capitalize border-b text-color hover:text-sky-500 no-underline py-3"
                to="/"
            >
                overview
            </Link>
            <Link
                className=" capitalize border-b text-color hover:text-sky-500 no-underline py-3"
                to="/"
            >
                FAQ
            </Link>
            <Link
                className=" capitalize border-b text-color hover:text-sky-500 no-underline py-3"
                to="/"
            >
                environmental justice
            </Link>
            <Link
                className=" capitalize border-b text-color hover:text-sky-500 no-underline py-3"
                to="/"
            >
                palnning council
            </Link>
            <Link
                className=" capitalize border-b text-color hover:text-sky-500 no-underline py-3"
                to="/"
            >
                technical advisory committee
            </Link>
            <Link
                className=" capitalize border-b text-color hover:text-sky-500 no-underline py-3"
                to="/"
            >
                staff
            </Link>
        </div>
    );
}

export default Sidebar;
