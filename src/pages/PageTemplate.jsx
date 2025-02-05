import React from "react";
import Navbar from "../component/layout/Navbar";

function PageTemplate({ data }) {
    // console.log(data);

    return (
        <div>
            <Navbar />
            <h1 className="mt-20">
                this is the <b>"{data.page_name}"</b> page
            </h1>
        </div>
    );
}

export default PageTemplate;
