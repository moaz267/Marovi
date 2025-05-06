import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Pages from "./pages/Pages/Pages";
import Portfolio from "./pages/Portfolio/Portfolio";
import Blog from "./pages/Blog/Blog";
import Shop from "./pages/Shop/Shop";
import Loader from "./components/Loader/Loader";
import Contact from "./pages/Contact/Contact";
import MyAccount from "./pages/MyAccount/MyAccount";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Classic from "./pages/Classic/Classic";
import Modern from "./pages/Modern/Modern";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import cookies from 'js-cookie';


i18n
  .use(initReactI18next)
  .use(LanguageDetector) 
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: ['cookie','htmlTag',
         'localStorage', 'sessionStorage', 'navigator',  'path', 'subdomain'],
      caches: ["cookie"]
    },
    backend:{
      loadPath: '/locale/{{lng}}/{{ns}}.json',
    },
  });


  export default function App() {
    const { t } = useTranslation();
    const lng = cookies.get('i18next') || 'en';
  
    useEffect(() => {
      window.document.body.dir = i18n.dir();
    }, [lng]);
  
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 600);
    }, []);
  
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    });
  
    const Routes = createBrowserRouter([
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          { path: "pages", element: <Pages /> },
          { path: "Portfolio", element: <Portfolio /> },
          { path: "Blog/:id", element: <Blog /> },
          { path: "Shop", element: <Shop /> },
          { path: "Contact", element: <Contact /> },
          { path: "MyAccount", element: <MyAccount /> },
          { path: "Login", element: <Login /> },
          { path: "Register", element: <Register /> },
          { path: "Modern", element: <Modern /> },
          { path: "Classic", element: <Classic /> },
          { path: "*", element: <NotFound /> },
        ],
      },
    ]);
  
    if (isLoading) {
      return <Loader />;
    }
  
    return (
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Routes} />
      </QueryClientProvider>
    );
  }
  











