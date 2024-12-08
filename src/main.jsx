import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddEquipment from "./pages/AddEquipment.jsx";
import UpdateEquipment from "./pages/UpdateEquipment.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import Layout from "./components/Layout.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import AllEquipments from "./pages/AllEquipments.jsx";
import DetailEquipment from "./pages/DetailEquipment.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () =>
          fetch("https://equisports-server-xi.vercel.app/equipments"),
      },
      {
        path: "addEquipment",
        element: <PrivateRoute><AddEquipment></AddEquipment></PrivateRoute> ,
      },
      {
        path: "updateEquipment/:id",
        element: <PrivateRoute><UpdateEquipment></UpdateEquipment></PrivateRoute> ,
        loader: ({ params }) =>
          fetch(
            `https://equisports-server-xi.vercel.app/equipments/${params.id}`
          ),
      },
      {
        path: "detailEquipment/:id",
        element: <DetailEquipment></DetailEquipment>,
        loader: () =>
          fetch("https://equisports-server-xi.vercel.app/equipments"),
      },
      {
        path: "signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "allEquipments",
        element: <AllEquipments></AllEquipments>,
        loader: () =>
          fetch("https://equisports-server-xi.vercel.app/equipments"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
