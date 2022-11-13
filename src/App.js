import { createBrowserRouter, RouterProvider } from "react-router-dom";
import All_Service from "./AllService/All_Service";
import ServiceDetails from "./AllService/ServiceDetails";
import "./App.css";
import AddReview from "./Components/AddReviw/AddReview";
import Home from "./Home/Home";
import Main from "./Layout/Main";
import Register from "./Login&Register/Register/Register";
import AddService from "./AllService/NewAddService/AddService";
import Login from "./Login&Register/Login/Login";
import LoginUser from "./Login&Register/Login/LoginUser";
import Blogs from "./Components/Blogs";
import Errorhandle from "./Components/Errorhandle";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/all-service",
          element: <All_Service></All_Service>,
          loader: () => fetch("http://localhost:5000/allService"),
        },
        {
          path: "/addReview",
          element: <AddReview></AddReview>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/serviceDetails/:id",
          element: <ServiceDetails></ServiceDetails>,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/services/${params.id}`),
        },
        {
          path: "/addService",
          element: <AddService></AddService>,
        },
        {
          path: "/loginuser",
          element: <LoginUser></LoginUser>,
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
        },
        {
          path: "/*",
          element: <Errorhandle></Errorhandle>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
