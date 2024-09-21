import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar el hook useNavigate
import papa from "papaparse";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

const url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQGfjIyNVUnYeN03aB059xGJOkzD5p_yvIFKDWxhAsa5DC6q1cup0AbA16iIAS1oj-iU2eZ7gHFyORQ/pub?gid=0&single=true&output=csv";

// Función para transformar los espacios en guiones
const transformPath = (name) => name.replace(/\s+/g, "-").toLowerCase();

function ProductTable() {
  const navigate = useNavigate(); // Inicializar el hook useNavigate
  const [data, setData] = useState([]);

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

  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        const parsedData = papa.parse(data, { header: true }).data;
        setData(parsedData);
      })
      .catch((err) => console.log(err));
  }, []);

  // Función para manejar el click en un producto
  const handleProductClick = (productName) => {
    const path = transformPath(productName); // Convertir el nombre en URL amigable
    navigate(`/plantillahamburgueseria/menu/${path}`); // Navegar a la página del producto
  };

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={4} id="menu">
      <Grid size={12}>
        <Typography
          variant="h4"
          component="h3"
          textAlign="center"
          mb={2}
          mt={4}
        >
          Menu
        </Typography>
      </Grid>
      {data.map((ham, index) => (
        <Grid size={{ xs: 9, sm: 4, md: 3 }} key={index}>
          <Card>
            <CardActionArea onClick={() => handleProductClick(ham.nombre)}> {/* Manejar clic en el producto */}
              {ham.imagen && (
                <CardMedia
                  component="img"
                  height="100"
                  width="200"
                  image={transformGoogleDriveLink(ham.imagen)}
                  alt={ham.nombre}
                />
              )}
              <CardContent>
                <Typography variant="h5" component="div">
                  {ham.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {ham.descripcion}
                </Typography>
                <Typography variant="h6" component="div">
                  Precio: {ham.precio}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductTable;
