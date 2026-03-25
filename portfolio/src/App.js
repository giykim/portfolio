import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./pages/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import ScrollToTop from "./components/ScrollToTop"

const routes = [
    { element: <Home />, index: true },
    { path: "about", element: <About /> },
    { path: "*", element: <NoPage /> },
];

function Layout() {
    return (
        <>
            <ScrollToTop />
            <Routes>
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
        </>
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
