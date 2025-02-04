import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import logo from "../../assets/logo.png";
import { useNavItems } from "../../hooks/useNavItems"; // Adjust path if needed

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

    // Fetch navigation items
    const { data, error, isLoading } = useNavItems();
    const navItems = data?.data || [];


    if (isLoading) return <p>Loading navigation...</p>;
    if (error) return <p>Error loading navigation</p>;

    return (
        <nav className="text-color fixed top-4 left-0 w-full z-50 px-4 sm:px-8">
            <div className="px-4 py-2 backdrop-blur-md max-w-[50rem] mx-auto flex z-[999] justify-between items-center rounded-4xl bg-[#1e2a3a]/50">
                <NavLink to="/" className="h-[2.7rem] aspect-square">
                    <img
                        src={logo}
                        alt="Logo"
                        className="object-cover w-full h-full rounded-full"
                    />
                </NavLink>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6">
                    {navItems.map((item, index) => (
                        <div key={index} className="relative font-semibold">
                            {/* Check if sub_page is empty */}
                            {item?.sub_page.length > 0 ? (
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
                                    {item?.page_name}
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
                                    to={item?.page_path}
                                    className={({ isActive }) =>
                                        `hover:text-sky-500 text-color no-underline ${
                                            isActive ? "text-sky-500" : ""
                                        }`
                                    }
                                >
                                    {item?.page_name}
                                </NavLink>
                            )}

                            {/* Dropdown Menu (Only if sub_page exists) */}
                            {item?.sub_page.length > 0 &&
                                dropdownOpen === index && (
                                    <div className="absolute left-0 mt-2 w-40 bg-gray-800 text-white rounded-md shadow-lg">
                                        {item?.sub_page.map(
                                            (subItem, subIndex) => (
                                                <NavLink
                                                    key={subIndex}
                                                    to={
                                                        item.page_path +
                                                        subItem?.sub_page_path
                                                    }
                                                    className={({ isActive }) =>
                                                        `block px-4 py-2 text-color hover:bg-gray-700 hover:text-sky-500 no-underline ${
                                                            isActive
                                                                ? "text-blue-400"
                                                                : ""
                                                        }`
                                                    }
                                                >
                                                    {subItem?.sub_page_name}
                                                </NavLink>
                                            )
                                        )}
                                    </div>
                                )}
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="">
                    <div
                        ref={menuRef}
                        className="md:hidden flex flex-col space-y-2 mt-4 px-4 py-6 rounded-2xl soft-bg"
                    >
                        {navItems.map((item, index) => (
                            <div key={index} className="font-bold">
                                {item?.sub_page.length > 0 ? (
                                    <button
                                        className="px-4 py-2 hover:bg-gray-700 hover:text-sky-500 w-full text-left flex items-center justify-between"
                                        onClick={() =>
                                            setDropdownOpen(
                                                dropdownOpen === index
                                                    ? null
                                                    : index
                                            )
                                        }
                                    >
                                        {item?.page_name}
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
                                        to={item?.page_path}
                                        className={({ isActive }) =>
                                            `block px-4 py-2 hover:bg-gray-700 text-color hover:text-sky-500 no-underline ${
                                                isActive ? "text-sky-500" : ""
                                            }`
                                        }
                                    >
                                        {item?.page_name}
                                    </NavLink>
                                )}

                                {item?.sub_page.length > 0 &&
                                    dropdownOpen === index && (
                                        <div className="ml-4 border-l border-gray-600">
                                            {item?.sub_page.map(
                                                (subItem, subIndex) => (
                                                    <NavLink
                                                        key={subIndex}
                                                        to={
                                                            item.page_path +
                                                            subItem?.sub_page_path
                                                        }
                                                        className={({
                                                            isActive,
                                                        }) =>
                                                            `block px-4 py-2 hover:bg-gray-700 text-color hover:text-sky-500 no-underline ${
                                                                isActive
                                                                    ? "text-sky-500"
                                                                    : ""
                                                            }`
                                                        }
                                                    >
                                                        {subItem?.sub_page_name}
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
