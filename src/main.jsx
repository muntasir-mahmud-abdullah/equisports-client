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
    loader: () => fetch("http://localhost:5000/equipments"),
  },
  {
    path: "addEquipment",
    element: <AddEquipment></AddEquipment>,
  },
  {
    path: "updateEquipment/:id",
    element: <UpdateEquipment></UpdateEquipment>,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/equipments/${params.id}`),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
