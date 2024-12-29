import React from "react";
import PublicLayout from "../features/public/components/publicLayout";
import HomePage from "../features/public/pages/HomePage";
import ShopPage from "../features/public/pages/ShopPage";
import AboutUsPage from "../features/public/pages/AboutUsPage";
import ContactUsPage from "../features/public/pages/ContactUsPage";
import DetailPage from "../features/public/pages/DetailPage";
import CartPage from "../features/public/pages/CartPage";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";

const publicRoute = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "shop/:id",
        element: <DetailPage />,
      },
      {
        path: "about",
        element: <AboutUsPage />,
      },
      {
        path: "contact",
        element: <ContactUsPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
];
export default publicRoute;
