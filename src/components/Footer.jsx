import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import clientData from "../data/clientData";

function Footer() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AppBar position="static" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" fontSize={12}>
              <a
                href={clientData.website}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Created by 4Code.uy
              </a>
            </Typography>
          </Box>
          <Box>
            <Fab variant="extended" onClick={handleClick} sx={{height: '5'}}>
              <NavigationIcon />
            </Fab>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Footer;
