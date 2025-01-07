import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./componant/AppLayout";
import Home from "./pages/Home";
import MultipleShop from "./pages/MultipleShop";
import ProductPage from "./pages/productPage";
import VenderPage from "./pages/vender-page";
import CheckOut from "./pages/checkout";
import AddressPage from "./pages/addressPage";
import Offer from "./pages/Offer";
import AllVenders from "./pages/AllVenders";
import BecomeVendor from "./pages/BecomeVendor";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import OtpEmail from "./pages/Otp-Email";
import OtpPhone from "./pages/Otp-Phone";
import { useState } from "react";

function App() {
  const [data,setData]=useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout setData={setData} />,
      children: [
        {
          path: "/",
          element: <Home data={data} />,
        },
        {
          path: "/MultipleShop",
          element: <MultipleShop />,
        },
        {
          path: "/ProductPage",
          element: <ProductPage />,
        },
        {
          path: "/venderpage",
          element: <VenderPage />,
        },
        {
          path: "/checkout",
          element: <CheckOut />,
        },
        {
          path: "/addresspage",
          element: <AddressPage />,
        },
        {
          path: "/offer",
          element: <Offer />,
        },
        {
          path: "/allvenders",
          element: <AllVenders />,
        },
      ],
    },
    {
      path: "/becomevendor",
      element: <BecomeVendor />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/otpemail",
      element: <OtpEmail />,
    },
    {
      path: "/otpphone",
      element: <OtpPhone />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
