import { Container, Typography, Box, Button } from "@mui/material";

import Grid from "@mui/material/Grid2"

import { IconButton } from "@mui/material";
import Instagram from "@mui/icons-material/Instagram";
import { WhatsApp } from "@mui/icons-material";

import useTheme from "@mui/material/styles/useTheme";

//import clientData from "../data/clientData";

function Contact({clientData}) {
  const theme = useTheme();

  return (
    <Container
      pt={2}
      id="contacto"
      maxWidth={false}
      sx={{
        minHeight: "80vh",
        //backgroundColor: theme.palette.primary.main,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={6}
        pt={2}
        pb={6}
      >
        <Grid xs={12} sm={6} md={4} sx={{ textAlign: "center" }}>
          <Typography variant="h4" mt={2}>
            Contacto
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <IconButton
              onClick={(event) =>
                (window.location.href = clientData.socialMedia.instagram)
              }
            >
              <Instagram
                sx={{ display: { xs: "flex" }, fontSize: 50, mr: 1 }}
              />
            </IconButton>
            <IconButton
              onClick={(event) =>
                (window.location.href =
                  "https://wa.me/598" +
                  clientData.phone +
                  "?text=Hola.%20%20%20vengo%20de%20la%20plantilla%20web%20de%20hamburgueseria%2C%20me%20gustaría%20tener%20más%20información%20por%20favor.%20Gracias")
              }
            >
              <WhatsApp sx={{ display: { xs: "flex" }, fontSize: 50, mr: 1 }} />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              target="_top"
              rel="noopener noreferrer"
              href={`mailto:sudulcegraciaweb@gmail.com`}
            >
              <Typography>{clientData.email}</Typography>
            </Button>
          </Box>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Typography variant="h2" component="p" textAlign="center">
            {clientData.companyName}
          </Typography>
        </Grid>
        <Grid xs={12} sm={6} md={4} textAlign="center">
          <Typography variant="h4" textAlign="center">
            Ubicacion
          </Typography>
          <Typography variant="p" textAlign="center">
            {clientData.address}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Contact;
