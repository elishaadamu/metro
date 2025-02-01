import React from "react";

function Heading({ children }) {
    return (
        <h1 className={`text-[2.8rem] font-bold text-white mb-[2rem] `}>
            {children}
        </h1>
    );
}

export default Heading;
