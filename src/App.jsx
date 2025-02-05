import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavItems } from "./hooks/useNavItems"; // Using existing API call
import Home from "./pages/Home";
import PageTemplate from "./pages/PageTemplate"; // Template for main pages
import SubPageTemplate from "./pages/SubPageTemplate"; // Template for sub-pages
import ScrollToTop from "./component/common/ScrollToTop";
import Loading from "./component/common/Loading";

function App() {
    const { data, error, isLoading } = useNavItems();
    const pages = data?.data || [];

    if (isLoading) return <Loading msg="Loading pages"/>;
    if (error) return <p>Error loading pages</p>;

    return (
        <Router>
            <ScrollToTop />
            <Routes>
                {/* Static Routes */}
                <Route path="/" element={<Home />} />

                {/* Dynamic Routes for Pages */}
                {pages.map((page) => (
                    <Route
                        key={page.id}
                        path={page?.page_path}
                        element={<PageTemplate data={page} />}
                    />
                ))}

                {/* Dynamic Routes for Sub-Pages */}
                {pages.flatMap((page) =>
                    page?.sub_page.map((sub) => (
                        <Route
                            key={sub.id}
                            path={page.page_path + sub?.sub_page_path}
                            element={
                                <SubPageTemplate pageDocId={page?.documentId} />
                            }
                        />
                    ))
                )}
            </Routes>
        </Router>
    );
}

export default App;
