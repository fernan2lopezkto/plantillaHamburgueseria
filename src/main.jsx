// MUI FONTS
import "@fontsource/montserrat";
// THEME
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/themeHam"; // Importa el tema

// GENERAL IMPORTS
import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import { CssBaseline } from "@mui/material";

// PAGES
import NotFound from "./pages/NotFound.jsx";
import ErrorPage from "./pages/Error-page";
// COMPONENTES
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";
import ResponsiveAppBar from "./components/MyAppBar.jsx";
import AlertPlantilla from "./components/AlertPlantilla";
import ProductTable from "./components/ProductTable";
import Especialidad from "./components/Especialidad";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./pages/Home.jsx";

// ROUTER
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const routes = [
  {
    path: "/plantillaHamburgueseria",
    element: <Home />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/plantillaHamburgueseria/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/plantillaHamburgueseria/ProductTable",
    element: <ProductTable />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cuatro-cuerdas/*",
    element: <NotFound />,
    errorElement: <ErrorPage />,
  },
];
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <AlertPlantilla />
        <RouterProvider router={router} />
        <Footer />
      </ThemeProvider>
    </CssBaseline>
  </React.StrictMode>
);
