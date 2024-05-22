import NavBar from "./components/NavBar";
import Toggle from "./components/Toggle";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import PortfolioPage from './components/PortfolioPage'
import Blog from './pages/Blog';
import BlogPage from './components/BlogPage'
import "./styles.css";
import useLocalStorage from "use-local-storage"

function App() {
  const [isDark, setIsDark] = useLocalStorage(true)

  return (
    <div data-theme={isDark ? "dark" : "light"}>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/:id" element={<PortfolioPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPage />} />
        </Routes>
        <Toggle
          handleChange={() => setIsDark(!isDark)}
          theme={isDark}
        />
      </Router>
    </div>
  );
}

export default App;
