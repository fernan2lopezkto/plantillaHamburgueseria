import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#a8d5ba',  // Menta suave principal
    },
    secondary: {
      main: '#f6c1a9',  // Durazno claro
    },
    background: {
      default: '#f0f7f4',  // Fondo blanco con un toque menta
      paper: '#ffffff',    // Fondo de elementos como tarjetas
    },
    text: {
      primary: '#5a7366',  // Verde bosque para buena legibilidad
      secondary: '#b48774',  // Durazno oscuro para texto secundario
    },
  },
  typography: {
    fontFamily: 'Mooli, Arial, sans-serif',

    h1: {
      fontFamily: 'Grey Qo, Arial, sans-serif',
      fontWeight: 700,
      color: '#5a7366',
    },
    h2: {
      fontFamily: 'Grey Qo, Arial, sans-serif',
      fontWeight: 700,
      color: '#5a7366',
    },
    subtitle1: {
      fontFamily: 'Grey Qo, Arial, sans-serif',
      fontWeight: 500,
      color: '#b48774',
    },
    button: {
      fontFamily: 'Grey Qo, Arial, sans-serif',
      textTransform: 'none',
      color: '#ffffff',
    },
    body1: {
      fontFamily: 'Mooli, Arial, sans-serif',
      color: '#5a7366',
    },
    body2: {
      fontFamily: 'Mooli, Arial, sans-serif',
      color: '#b48774',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#a8d5ba',
          '&:hover': {
            backgroundColor: '#f6c1a9',
          },
        },
      },
    },
  },
});

export default theme;