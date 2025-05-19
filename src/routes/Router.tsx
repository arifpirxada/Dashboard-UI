import Article from "@/pages/articles/Article";
import { Routes, Route } from "react-router-dom";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Article /> } />
        </Routes>
    )
}

export default Router;