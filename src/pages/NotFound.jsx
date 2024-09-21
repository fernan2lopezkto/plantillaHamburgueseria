import React from "react";
import MyAppBar from "../components/MyAppBar";

function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      <MyAppBar />
      <h1>Pagina no encontrada</h1>
    </div>
  );
}

export default NotFound;
