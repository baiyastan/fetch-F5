import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Detail from "./pages/Detail";
import Contact from "./pages/Contact";

const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "detail/:id",
                element: <Detail />
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    }
])

export default myRouter




