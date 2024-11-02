import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Item from "./components/item/Item.js"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TrackOrder from "./components/track/TrackOrder.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/items",
    element: <Item />
  },
  {
    path: "/track/:trackingNumber",
    element: <TrackOrder/>
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
