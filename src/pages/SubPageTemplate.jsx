// import React from "react";
// import { usePageByDocId } from "../hooks/usePageByDocId";
// import Navbar from "../component/layout/Navbar";
// import PageSections from "../component/layout/PageSections";
// import Sidebar from "../component/layout/Sidebar";
// import Footer from "../component/layout/Footer";

// function SubPageTemplate({ pageDocId }) {
//     const { data, isLoading, error } = usePageByDocId(pageDocId);
//     console.log(data);

//     if (isLoading) return <p>Loading page content...</p>;
//     if (error) return <p>Error loading page</p>;

//     return (
//         <div className="mt-[7rem]">
//             <Navbar />

//             <div className="my-grid-temp md:grid gap-5 mx-auto max-w-[70rem] md:px-4">
//                 <PageSections sections={data?.sub_page} />

//                 <Sidebar
//                     subPages={data?.sub_page}
//                     parentPage={data.page_path}
//                 />
//             </div>

//             <Footer />
//         </div>
//     );
// }

// export default SubPageTemplate;

import { usePageByDocId } from "../hooks/usePageByDocId";
import Navbar from "../component/layout/Navbar";
import PageSections from "../component/layout/PageSections";
import Sidebar from "../component/layout/Sidebar";
import Footer from "../component/layout/Footer";
import Loading from "../component/common/Loading";

function SubPageTemplate({ pageDocId }) {
    const { data, isLoading, error } = usePageByDocId(pageDocId);

    if (isLoading) return <Loading msg="Loading page contents"/>;
    if (error) return <p className="text-red-500">Error loading page: {error.message}</p>;

    // Find the correct sub-page based on the current URL
    const currentPath = window.location.pathname;
    const currentSubPage = data?.sub_page.find(
        (sub) => data.page_path + sub.sub_page_path === currentPath
    );

    // console.log(data);
    // console.log(data.sub_page[0].sub_page_section[0].link);
    if (!currentSubPage) return <p>Sub-page not found</p>;

    return (
        <div className="mt-[6rem]">
            <Navbar />

            <div className="my-grid-temp md:grid gap-5 mx-auto max-w-[70rem] md:px-4 ">
                <PageSections sections={currentSubPage.sub_page_section} />

                <Sidebar
                    subPages={data?.sub_page}
                    parentPage={data?.page_path}
                    pageName={data?.page_name}
                />
            </div>

            <Footer />
        </div>
    );
}

export default SubPageTemplate;
