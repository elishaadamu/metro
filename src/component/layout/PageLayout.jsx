import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import PageSections from "./PageSections";

function PageLayout({sections, subPages}) {
    return (
        <div>
            <Navbar />

            <div className="my-grid-temp md:grid gap-5 mx-auto max-w-[70rem] md:px-4">
                <PageSections sections={sections} />
                <Sidebar subPages={subPages} />
            </div>

            <Footer />
        </div>
    );
}

export default PageLayout;
