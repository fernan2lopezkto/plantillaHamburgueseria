// MUI FONTS
import "@fontsource/montserrat";

// PAGES
import NotFound from "./pages/NotFound.jsx";
import ErrorPage from "./pages/Error-page";

// COMPONENTES
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";
import ResponsiveAppBar from "./components/AppBar";
import AlertPlantilla from "./components/AlertPlantilla";
import ProductTable from "./components/ProductTable";
import Especialidad from "./components/Especialidad";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./pages/Home.jsx";

// THEME
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/themeHam"; // Importa el tema

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



function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <AlertPlantilla />
      <RouterProvider router={router} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
