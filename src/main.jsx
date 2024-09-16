import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material";

//import "@fontsource/grey-qo"; // Grey Qo font
//import "@fontsource/mooli"; // Mooli font

//import '@fontsource/pacifico';  // Importa la fuente Pacifico
//import '@fontsource/poppins';   // Importa la fuente Poppins

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline>
      <App />
    </CssBaseline>
  </React.StrictMode>
);