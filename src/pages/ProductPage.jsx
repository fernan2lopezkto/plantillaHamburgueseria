import { useEffect } from "react";
import { Typography, IconButton, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MyAppBar from "../components/MyAppBar";

import Contact from "../components/Contact";

import clientData from "../data/clientData";

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
  // Mostrar el producto por consola
  useEffect(() => {
    console.log("Producto:", product);
  }, [product]);

  const handleWhatsAppClick = () => {
    window.location.href = `https://wa.me/598${clientData.phone}?text=Hola.%20%20%20vengo%20de%20la%20plantilla%20web%20de%20hamburgueseria%2C%20estoy%20interesado%20en%20el%20producto%20${product.nombre}.%20Me%20gustaría%20tener%20más%20información%20por%20favor.%20Gracias.`;
  };
  
  return (
    <>
      <MyAppBar />
      <div style={{ minHeight: "91vh", padding: "20px" }}>
        <Container>
          <Grid container spacing={2} alignItems="center">
            <Grid size={12} >
              <Typography variant="h4" textAlign='center'>{product.nombre}</Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              {product.imagen && (
                <img
                  src={transformGoogleDriveLink(product.imagen)}
                  alt={product.nombre}
                  style={{ width: "100%", height: "auto" }}
                />
              )}
            </Grid>
            <Grid size={{ xs: 12, sm: 8 }}>
              <Typography variant="body1" style={{ margin: "20px 0" }}>
                {product.descripcion2}
              </Typography>
              <Typography variant="h6">Precio: {product.precio}</Typography>
              <IconButton
              onClick={handleWhatsAppClick}
              sx={{display: { xs: "flex" }, fontSize: 50, mr: 1 }}
            >
              <WhatsAppIcon sx={{ width: "60px", height: "60px" }} />
            </IconButton>
            </Grid>
          </Grid>
        </Container>
        <Contact clientData={clientData} />
      </div>
    </>
  );
}

export default ProductPage;
