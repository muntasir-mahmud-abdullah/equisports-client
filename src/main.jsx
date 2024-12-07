import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddEquipment from "./pages/AddEquipment.jsx";
import UpdateEquipment from "./pages/UpdateEquipment.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:"addEquipment",
    element:<AddEquipment></AddEquipment>
  },
  {
    path:"updateEquipment",
    element:<UpdateEquipment></UpdateEquipment>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
