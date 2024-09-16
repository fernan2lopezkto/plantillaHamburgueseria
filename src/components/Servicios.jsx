import { Container, Grid, Typography } from "@mui/material";

import serv1 from "../assets/serv/decEventos.png";

import texts from '../data/texts';

function Servicios() {
  return (
    <>
      {/* <Bubbles /> */}
      <Container
        mb={4}
        id="servicios"
        sx={{
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={4} mb={4}>
          <Grid item xs={12}>
            <Typography variant="h4" mt={4} mb={4} textAlign="center">
              {texts.serviciosTitle}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src={serv1} alt="servicio foto" style={{ maxWidth: "100%" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <Typography variant="body2" color="text.secondary" mb={4}>
              {texts.serviciosList[0].p1}
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={4}>
              {texts.serviciosList[0].p2}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {texts.serviciosList[0].p3}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default Servicios;
