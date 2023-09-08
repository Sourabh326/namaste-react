import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantsInfo from "./components/RestaurantsInfo";
// import Grocery from "./components/Grocery";
const Grocery = lazy(()=> import("./components/Grocery"));
//  const heading = React.createElement("h1", {id:'heading'}, "This is from React");
// JSX => bable converts JSX to the React.createElement => ReactElement-JS Object => HTML Element (Render)

// Component Composition
const App = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantsInfo />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h2>Loading...</h2>}><Grocery /></Suspense>
      }
    ],
    errorElement: <Error />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
