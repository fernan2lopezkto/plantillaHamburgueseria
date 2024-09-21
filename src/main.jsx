// MUI FONTS
import "@fontsource/montserrat";
// THEME
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/themeHam"; // Importa el tema

// GENERAL IMPORTS
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import { CssBaseline } from "@mui/material";
import papa from "papaparse";

// PAGES
import HomePage from "./pages/Home-page.jsx";
import ErrorPage from "./pages/Error-page";
import NotFound from "./pages/NotFound.jsx";
import ContactPage from "./pages/Contact-page.jsx";
import MenuPage from "./pages/Menu-page.jsx";
import AboutPage from "./pages/About-page.jsx";
import ProductPage from "./pages/ProductPage"; // Página para mostrar cada producto
// COMPONENTES
import AlertPlantilla from "./components/AlertPlantilla";
import Footer from "./components/Footer";

// ROUTER
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQGfjIyNVUnYeN03aB059xGJOkzD5p_yvIFKDWxhAsa5DC6q1cup0AbA16iIAS1oj-iU2eZ7gHFyORQ/pub?gid=0&single=true&output=csv";

// Función para transformar los espacios en guiones
const transformPath = (name) => name.replace(/\s+/g, "-").toLowerCase();

function Main() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    // Hacer el fetch a Google Sheets y generar rutas dinámicamente
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        const parsedData = papa.parse(data, { header: true }).data;

        // Rutas estáticas
        const staticRoutes = [
          {
            path: "/plantillaHamburgueseria",
            element: <HomePage />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/plantillaHamburgueseria/contact",
            element: <ContactPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/plantillaHamburgueseria/about",
            element: <AboutPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/plantillaHamburgueseria/menu",
            element: <MenuPage />,
            errorElement: <ErrorPage />,
          },
        ];

        // Generar rutas dinámicas para cada producto en el menú
        const dynamicRoutes = parsedData.map((item) => {
          const path = transformPath(item.nombre); // Convertir el nombre en URL amigable
          return {
            path: `/plantillahamburgueseria/menu/${path}`,
            element: <ProductPage product={item} />, // Página individual para cada producto
            errorElement: <ErrorPage />,
          };
        });

        // Añadir la ruta de NotFound
        staticRoutes.push({
          path: "/plantillahamburgueseria/*",
          element: <NotFound />,
          errorElement: <ErrorPage />,
        });

        // Establecer las rutas combinando estáticas y dinámicas
        setRoutes([...staticRoutes, ...dynamicRoutes]);
      })
      .catch((err) => console.log(err));
  }, []);

  // Mientras no se han cargado las rutas, muestra un mensaje de carga
  if (routes.length === 0) {
    return <div>Loading...</div>;
  }

  // Crear el enrutador con las rutas cargadas
  const router = createBrowserRouter(routes);

  return (
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
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
