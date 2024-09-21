import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import MyAppBar from "../components/MyAppBar";

function ProductPage({ product }) {
  const transformGoogleDriveLink = (link) => {
    const fileIdMatch = link.match(/[-\w]{25,}/);
    if (fileIdMatch) {
      const fileId = fileIdMatch[0];
      return `https://drive.google.com/thumbnail?id=${fileId}`;
    } else {
      console.error(
        "El enlace proporcionado no es un enlace válido de Google Drive."
      );
      return null;
    }
  };

  return (
    <>
      <MyAppBar />
      <div
        style={{
          minHeight: "91vh",
        }}
      >
        <Card>
          {product.imagen && (
            <CardMedia
              component="img"
              width="200"
              height="200"
              image={transformGoogleDriveLink(product.imagen)}
              alt={product.nombre}
            />
          )}
          <CardContent>
            <Typography variant="h4">{product.nombre}</Typography>
            <Typography variant="body1">{product.descripcion}</Typography>
            <Typography variant="h6">Precio: {product.precio}</Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default ProductPage;
