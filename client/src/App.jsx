import NavBar from "./components/NavBar";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="h-[100vh] w-full relative font-mono">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/blog" element={<BlogPage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}
