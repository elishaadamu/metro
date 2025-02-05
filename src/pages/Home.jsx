import React from "react";
import PageLayout from "../component/layout/PageLayout";
import { page_content } from "../index";
import Navbar from "../component/layout/Navbar";

function Home() {
    return (
        <>
            <Navbar />
            <h1 className="mt-20">home page</h1>
        </>
    );
}

export default Home;
