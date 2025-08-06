import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { createBrowserRouter, RouterProvider } from "react-router";

const router= createBrowserRouter ([
  {
    path: "/registration",
    element : <Registration/>
  },
  {
    path: "/login",
    element : <Login/>
  },
]);

const App = () => {



  return (
   <div>
     <RouterProvider router={router} />
   </div>
  );
};

export default App;
