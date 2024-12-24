import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"
import Navigation from "./pages/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import NoPage from "./pages/NoPage";

const routes = [
    { path: "/", element: <Home />, index: true },
    { path: "experience", element: <Experience /> },
    { path: "projects", element: <Projects /> },
    { path: "about", element: <About /> },
    { path: "*", element: <NoPage /> },
];

function Layout() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Navigation />}>
                    {routes.map(({ path, element, index }, key) => (
                        <Route
                            key={key}
                            path={path}
                            index={index || false}
                            element={element}
                        />
                    ))}
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

function App() {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
}

export default App;
