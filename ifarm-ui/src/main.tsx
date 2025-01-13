import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Trade from "./components/trade/Trade.tsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TrackOrder from "./components/track/TrackOrder.tsx";
import { Products } from "./components/Products.tsx";
import { Sellers } from "./components/Sellers.tsx";
import { Buyers } from "./components/Buyers.tsx";
import { Transports } from "./components/Transports.tsx";
import { TrackDelivery } from "./components/track/TrackDelivery.tsx";
import Dashboard from "./components/dashboard/Dashboard.tsx";
import Register from "./components/auth/Register.tsx";
import Login from "./components/auth/Login.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/trade",
    element: <Trade />
  },
  {
    path: "/track/:trackingNumber",
    element: <TrackOrder/>
  },
  {
    path: "/trackDelivery",
    element: <TrackDelivery/>
  },
  {
    path: "/products",
    element: <Products/>
  },
  {
    path: "/sellers",
    element: <Sellers/>
  },
  {
    path: "/buyers",
    element: <Buyers/>
  },
  {
    path: "/transports",
    element: <Transports/>
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
