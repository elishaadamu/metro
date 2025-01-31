import React from "react";
import Test from "../component/layout/Test";
import Sidebar from "../component/layout/Sidebar";
import Footer from "../component/layout/Footer";
import Navbar from "../component/layout/Navbar";

function Home() {
    return (
        <>
            <div className="mx-4">
                <Navbar />
                <div className="meme md:grid gap-5 mx-auto max-w-[70rem]">
                    <Test />
                    <Sidebar />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
