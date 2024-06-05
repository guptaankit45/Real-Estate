
import { 
  createBrowserRouter,
  RouterProvider,

 } from "react-router-dom";
import Homepage from "./pages/homepage/homepage"
import Listpage from "./pages/listpage/listpage";
import Layouts from "./pages/layouts/layouts";
import Profilepage from "./pages/profilepage/profilepage"
import Singlepage from "./pages/singlepage/singlepage"
function App() {

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <Layouts/>,
      
      children:[
        {
          path: "/",
          element: <Homepage/>,
        },
        {
          path: "/list",
          element: <Listpage/>,
        },
        {
          path: "/:id",
          element: <Singlepage/>,
        },
        { 
          path: "/profile",
          element: <Profilepage/>,
        },
      ]
    }
   
  ]);
  return (
  
 
<RouterProvider router={router} />
  )
}

export default App