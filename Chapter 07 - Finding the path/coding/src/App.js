// ## Namaste React Course by Akshay Saini
// # Chapter 07 - Finding the path!
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from './components/Contact'
import Cart from './components/Cart'
import Error from './components/Error'; 
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <>
      <Header />
      {
        /* outlet where we need to insert different pages, this is best for nested routes */
        <Outlet/>
      }
      <Footer />
    </>
  );
};

// just the creation of routing configuration (createBrowserRouter function is used to create routes)
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu/>,
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider  router={appRouter} />);