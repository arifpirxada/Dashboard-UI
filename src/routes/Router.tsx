import HomePage from "@/pages/HomePage";
import GeneratedArticles from "@/pages/GeneratedArticles";
import { Routes, Route } from "react-router-dom";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage /> } />
            <Route path="/articles/generated" element={<GeneratedArticles /> } />
            <Route path="*" element={ <div className="text-red-600 text-2xl px-8 text-center">Page not found</div> } />
        </Routes>
    )
}

export default Router;