import { Container, Typography, Box, Button } from "@mui/material";

import Grid from "@mui/material/Grid2"

import { IconButton } from "@mui/material";
import Instagram from "@mui/icons-material/Instagram";
import { WhatsApp } from "@mui/icons-material";

import useTheme from "@mui/material/styles/useTheme";

import clientData from "../data/clientData";
import MyAppBar from "../components/MyAppBar";
import Contact from "../components/Contact";

function ContactPage() {
  const theme = useTheme();

  return (
    <div
    style={{
      minHeight: "100vh",
    }}
    >
      <MyAppBar />
      <Contact clientData={clientData} />
    </div>
  );
}
export default ContactPage;
