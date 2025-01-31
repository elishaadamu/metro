import React from "react";

function Heading({ children, className = "" }) {
    return (
        <h1 className={`bg-soft-bg  text-[3re] font-bold   ${className}`}>
            {children}
        </h1>
    );
}

export default Heading;
