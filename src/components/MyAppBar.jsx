import * as React from "react";
import { NavLink } from "react-router-dom";

// MUI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Instagram from "@mui/icons-material/Instagram";
import { WhatsApp } from "@mui/icons-material";

import clientData from "../data/clientData";

import logoPrincipal from "/logoburguer.webp";

const pages = [
  { name: "Home", id: "/plantillahamburgueseria" },
  { name: "Menu", id: "/plantillahamburgueseria/menu" },
  {name: "About", id: "/plantillahamburgueseria/about"},
  { name: "Contacto", id: "/plantillahamburgueseria/contact" },
];

function MyAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, height: 30, mr: 1 }}>
            <img src={logoPrincipal} className="logo" alt="Vite logo" />
          </Box>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              fontFamily: "Grey Qo, Arial, sans-serif",
              //fontWeight: 100,
              letterSpacing: ".01rem",
              color: "inherit",
              textDecoration: "none",
              //fontFamily: 'Grey Qo, Arial, sans-serif'
            }}
          >
            {clientData.companyName}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  width: "100vw", // Ocupa todo el ancho de la pantalla
                  height: "100vh", // Ocupa toda la altura de la pantalla
                  left: 0, // Alinea el menú al borde izquierdo
                  top: 0, // Alinea el menú al borde superior
                  display: "flex", // Usa flexbox para alinear los elementos
                  flexDirection: "column", // Alinea los elementos en una columna
                  justifyContent: "center", // Centra los elementos verticalmente
                  alignItems: "center", // Centra los elementos horizontalmente
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <NavLink
                    to={`${page.id}`}
                    style={{ textDecoration: "none", width: "100%" }}
                  >
                    <Typography color="inherit" textAlign="center">
                      {page.name}
                    </Typography>
                  </NavLink>
                </MenuItem>
              ))}
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
                      "?text=Hola.%20%20%20vengo%20de%20la%20plantilla%20web%20de%20pastelería%2C%20me%20gustaría%20tener%20más%20información%20por%20favor.%20Gracias")
                  }
                >
                  <WhatsApp
                    sx={{ display: { xs: "flex" }, fontSize: 50, mr: 1 }}
                  />
                </IconButton>
              </Box>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, height: 30, mr: 1 }}>
            <img src={logoPrincipal} className="logo" alt="Vite logo" />
          </Box>
          {/* <Typography
            variant="h4"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Grey Qo, Arial, sans-serif",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {clientData.companyName}
          </Typography> */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
               <NavLink
               key={page.name}
               to={page.id}
               style={{ textDecoration: "none", color: "inherit" }} // Estilos para remover subrayado y mantener color
             >
               <Button
                 onClick={handleCloseNavMenu}
                 sx={{
                   my: 2,
                   color: "inherit",
                   display: "block",
                   fontFamily: "Mooli, Arial, sans-serif",
                 }}
               >
                 {page.name}
               </Button>
             </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default MyAppBar;
