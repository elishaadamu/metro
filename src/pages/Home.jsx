import React from "react";
import PageLayout from "../component/layout/PageLayout";
import { page_content } from "../index";


function Home() {
    return (
        <>
        <PageLayout
            sections={page_content.sections}
            subPages={page_content.sub_pages}
        />
    </>
    );
}

export default Home;
