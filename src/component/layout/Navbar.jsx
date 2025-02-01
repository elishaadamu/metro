import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import gsap from "gsap";

import logo from "../../assets/logo.png";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
        name: "Articles",
        href: "/articles",
        dropdown: [
            { name: "Latest Posts", href: "/articles/latest" },
            { name: "Categories", href: "/articles/categories" },
        ],
    },
    {
        name: "Projects",
        href: "/projects",
        dropdown: [
            { name: "Web Development", href: "/projects/web" },
            { name: "Mobile Apps", href: "/projects/mobile" },
            { name: "Design", href: "/projects/design" },
        ],
    },
    { name: "Speaking", href: "/speaking" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const menuRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            gsap.fromTo(
                menuRef.current,
                { y: -50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
            );
        }
    }, [isOpen]);

    return (
        <nav className="  text-color  fixed top-4 left-0 w-full z-50  px-4 sm:px-8">
            <div className=" px-4 py-2 backdrop-blur-md max-w-[50rem]  mx-auto flex z-[999]  justify-between items-center rounded-4xl bg-[#1e2a3a]/50">
                <NavLink to="/" className=" h-[2.7rem] aspect-square ">
                    <img
                        src={logo}
                        alt="Logo"
                        className="object-cover w-full h-full rounded-full "
                    />
                </NavLink>

                <div className="hidden md:flex space-x-6 ">
                    {navItems.map((item, index) => (
                        <div key={index} className="relative font-semibold">
                            {item.dropdown ? (
                                <button
                                    className="hover:text-sky-500 text-color flex items-center"
                                    onClick={() =>
                                        setDropdownOpen(
                                            dropdownOpen === index
                                                ? null
                                                : index
                                        )
                                    }
                                >
                                    {item.name}{" "}
                                    <FiChevronDown
                                        size={16}
                                        className={`ml-1 transition-transform duration-300 ${
                                            dropdownOpen === index
                                                ? "rotate-180"
                                                : "rotate-0"
                                        }`}
                                    />
                                </button>
                            ) : (
                                <NavLink
                                    to={item.href}
                                    className={({ isActive }) =>
                                        `hover:text-sky-500 text-color no-underline ${
                                            isActive ? "text-sky-500" : ""
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            )}
                            {item.dropdown && dropdownOpen === index && (
                                <div className="absolute left-0 mt-2 w-40 bg-gray-800 text-white rounded-md shadow-lg">
                                    {item.dropdown.map((subItem, subIndex) => (
                                        <NavLink
                                            key={subIndex}
                                            to={subItem.href}
                                            className={({ isActive }) =>
                                                `block px-4 py-2 text-color hover:bg-gray-700 hover:text-sky-500 no-underline ${
                                                    isActive
                                                        ? "text-blue-400"
                                                        : ""
                                                }`
                                            }
                                        >
                                            {subItem.name}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {isOpen && (
                <div className="">
                    <div
                        ref={menuRef}
                        className="md:hidden flex flex-col space-y-2 mt-4 px-4 py-6 rounded-2xl soft-bg  "
                    >
                        {navItems.map((item, index) => (
                            <div key={index} className="font-bold">
                                {item.dropdown ? (
                                    <button
                                        className=" px-4 py-2 hover:bg-gray-700 hover:text-sky-500 w-full text-left flex items-center justify-between "
                                        onClick={() =>
                                            setDropdownOpen(
                                                dropdownOpen === index
                                                    ? null
                                                    : index
                                            )
                                        }
                                    >
                                        {item.name}{" "}
                                        <FiChevronDown
                                            size={16}
                                            className={`ml-1 transition-transform duration-300 ${
                                                dropdownOpen === index
                                                    ? "rotate-180"
                                                    : "rotate-0"
                                            }`}
                                        />
                                    </button>
                                ) : (
                                    <NavLink
                                        to={item.href}
                                        className={({ isActive }) =>
                                            `block px-4 py-2 hover:bg-gray-700 text-color hover:text-sky-500 no-underline ${
                                                isActive ? "text-sky-500" : ""
                                            }`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                )}
                                {item.dropdown && dropdownOpen === index && (
                                    <div className="ml-4 border-l border-gray-600">
                                        {item.dropdown.map(
                                            (subItem, subIndex) => (
                                                <NavLink
                                                    key={subIndex}
                                                    to={subItem.href}
                                                    className={({ isActive }) =>
                                                        `block px-4 py-2 hover:bg-gray-700 text-color hover:text-sky-500 no-underline ${
                                                            isActive
                                                                ? "text-sky-500"
                                                                : ""
                                                        }`
                                                    }
                                                >
                                                    {subItem.name}
                                                </NavLink>
                                            )
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
