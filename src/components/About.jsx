import { Container, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2"
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import fondo from "../assets/mid/ham2.png";
import texts from "../data/texts";
import clientData from "../data/clientData"

function About() {
  
  const { ref, inView } = useInView({ triggerOnce: true });
  
  const animations = {
    slideIn: { initial: { x: '100%' }, animate: { x: 0 } },
    fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1 } }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "#222444",
      }}
    >
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
        <Container
          sx={{
            minHeight: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div
            ref={ref}
            initial={animations["fadeIn"].initial}
            animate={inView ? animations["fadeIn"].animate : animations["fadeIn"].initial}
            transition={{ duration: 3 }}
          >
            <Grid
              container
              justifyContent="center"
              spacing={4}
            >
              <Grid xs={12}>
                <Typography variant="h2" component="h1" textAlign="center">
                  {clientData.companyName}
                </Typography>
              </Grid>
              <Grid xs={12}>
                <Typography
                  variant="h6"
                  component="p"
                  textAlign="center"
                ></Typography>
              </Grid>
              <Grid xs={12} md={6}>
                <Typography
                  variant="body1"
                  component="p"
                  mb={2}
                  sx={{
                    display: {
                      xs: "block",
                      sm: "block",
                      md: "block"
                    }
                  }}
                >
                  {texts.aboutp1}
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    display: {
                      xs: "none",
                      sm: "block",
                      md: "block"
                    }
                  }}
                >
                  {texts.aboutp2}
                </Typography>
              </Grid>
              <Grid xs={12} md={6}>
                <Typography
                  variant="body1"
                  component="p"
                  mb={2}
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "block"
                    }
                  }}
                >
                  {texts.aboutp3}
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "block"
                    }
                  }}
                >
                  {texts.aboutp4}
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </div>
    </div>
  );
}

export default About;
