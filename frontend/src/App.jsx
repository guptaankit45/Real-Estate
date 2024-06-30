
import { 
  createBrowserRouter,
  RouterProvider,

 } from "react-router-dom";
import Homepage from "./pages/homepage/homepage"
import ListPage from "./pages/listpage/listpage"
import { Layout,  RequireAuth } from "./pages/layouts/layouts";
import Profilepage from "./pages/profilepage/profilepage";
import Singlepage from "./pages/singlepage/singlepage";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import NewPostPage from "./pages/newPostPage/newPostPage";
import ProfileUpdatePage from "./pages/profileUpdatePage/profileUpdatePage";
import {singlePageLoader,listPageLoader, profilePageLoader} from "./lib/loaders";
import { formToJSON } from "axios";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/list",
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <Singlepage />,
          loader: singlePageLoader,
        },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <Profilepage />,
          loader: profilePageLoader
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
