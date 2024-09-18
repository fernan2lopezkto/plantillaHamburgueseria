import { Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { motion } from "framer-motion";
import fondo from "../assets/mid/ham4.png";
import texts from "../data/texts";
import Especialidad from "../components/Especialidad";

function Home() {
  return (
    <>
    <div
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "#000000",
      }}
      >
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
        <Container
          sx={{
            minHeight: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid size={12}>
                <Typography variant="h2" component="h1" textAlign="center">
                  {texts.title}
                </Typography>
              </Grid>
              <Grid size={12}>
                <Typography component="p" textAlign="center">
                  {texts.description}
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </div>
    </div>
    <Especialidad />
      </>
  );
}

export default Home;
