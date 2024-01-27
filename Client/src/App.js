import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element:<Home/>
    },
    {
      path:"Projects",
      element:<Projects/>
    },
    {
      path:"/Dashboard",
      element:<Dashboard/>
    },
    {
      path:"/About",
      element:<About/>
    },
    {
      path:"/SignIn",
      element:<SignIn/>
    },
    {
      path:"/SignUp",
      element:<SignUp/>
    }
  ])
return (
  <RouterProvider router={appRouter}/>
);
}
export default App;
