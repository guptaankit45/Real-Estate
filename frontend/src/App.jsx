
import { 
  createBrowserRouter,
  RouterProvider,

 } from "react-router-dom";
import Homepage from "./pages/homepage/homepage"
import Listpage from "./pages/listpage/listpage";
import { Layout,  RequireAuth } from "./pages/layouts/layouts";
import Profilepage from "./pages/profilepage/profilepage"
import Singlepage from "./pages/singlepage/singlepage"
import ListPage from "./pages/listpage/listpage";
import Login from "./pages/login/login";
import Register from "./pages/register/register";

function App() {

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/list",
          element: <Listpage />,
        },
        {
          path: "/:id",
          element: <Singlepage />,
        },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register/>,
        },
       
      ],
    },
    {
      path:"/",
      element:<RequireAuth/>,
      children : [
        {
          path: "/profile",
          element: <Profilepage />,
        },
      ]
    }
  
   
  ]);
  return (
  
 
<RouterProvider router={router} />
  )
}

export default App