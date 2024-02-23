import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";



const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <About></About>
            }
        ]
    }
])

export default router;