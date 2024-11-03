import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Trade from "./components/trade/Trade.tsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TrackOrder from "./components/track/TrackOrder.tsx";
import { Products } from "./components/products/Products.tsx";
import { TrackDelivery } from "./components/track/TrackDelivery.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
