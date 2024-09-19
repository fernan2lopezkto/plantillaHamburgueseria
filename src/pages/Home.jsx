//import { Container, Typography } from "@mui/material";
//import Grid from '@mui/material/Grid2';
//import { motion } from "framer-motion";
//import fondo from "../assets/mid/ham4.png";
import texts from "../data/texts";

// COMPONENTS
import Bienvenida from "../components/Bienvenida";
import MyAppBar from "../components/MyAppBar";
import Especialidad from "../components/Especialidad";
import PreguntasFrecuentes from "../components/PreguntasFrecuentes";



function Home() {
  return (
    <>
    <MyAppBar />
    <Bienvenida />
    <Especialidad />
    <PreguntasFrecuentes />
    </>
  );
}

export default Home;
