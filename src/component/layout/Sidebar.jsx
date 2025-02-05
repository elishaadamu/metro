// import React from "react";
// import { Link } from "react-router-dom";

// function Sidebar({ subPages, parentPage, pageName }) {
//     return (
//         <div className="md:bg-[#1e2a3a] rounded-xl py-8 px-4 h-fit md:sticky capitalize  top-[6rem] overflow-y-auto">
//             <h2 className="text-[1.8rem] font-[500] text-white ">{pageName} </h2>

//             {subPages.map((subPage, i) => (
//                 <Link
//                     key={i}
//                     className=" capitalize border-b last:border-none text-color border-[#d6d6d6] hover:text-sky-500 no-underline py-2 block font-semibold"
//                     to={parentPage + subPage.sub_page_path}
//                 >
//                     {subPage.sub_page_name}
//                 </Link>
//             ))}
//         </div>
//     );
// }

// export default Sidebar;

import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar({ subPages, parentPage, pageName }) {
    return (
        <div className="md:bg-[#1e2a3a] rounded-xl py-8 px-4 h-fit md:sticky capitalize top-[6rem] overflow-y-auto">
            <h2 className="text-[1.8rem] font-[500] text-white">{pageName}</h2>

            {subPages.map((subPage, i) => (
                <NavLink
                    key={i}
                    className={({ isActive }) =>
                        `capitalize border-b last:border-none text-color border-[#d6d6d6] no-underline py-2 block font-semibold 
                        hover:text-sky-300 ${isActive ? "text-sky-500 hover:text-sky-500" : ""}`
                    }
                    to={parentPage + subPage.sub_page_path}
                >
                    {subPage.sub_page_name}
                </NavLink>
            ))}
        </div>
    );
}

export default Sidebar;
