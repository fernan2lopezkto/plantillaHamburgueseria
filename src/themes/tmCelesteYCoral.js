import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#a0d9e8',  // Celeste principal
    },
    secondary: {
      main: '#f7b1ab',  // Coral suave
    },
    background: {
      default: '#eef9fb',  // Fondo blanco con un toque celeste
      paper: '#ffffff',    // Fondo de elementos como tarjetas
    },
    text: {
      primary: '#4a646e',  // Azul marino suave para buena legibilidad
      secondary: '#b57b74',  // Coral oscuro para texto secundario
    },
  },
  typography: {
    fontFamily: 'Mooli, Arial, sans-serif',

    h1: {
      fontFamily: 'Grey Qo, Arial, sans-serif',
      fontWeight: 700,
      color: '#4a646e',
    },
    h2: {
      fontFamily: 'Grey Qo, Arial, sans-serif',
      fontWeight: 700,
      color: '#4a646e',
    },
    subtitle1: {
      fontFamily: 'Grey Qo, Arial, sans-serif',
      fontWeight: 500,
      color: '#b57b74',
    },
    button: {
      fontFamily: 'Grey Qo, Arial, sans-serif',
      textTransform: 'none',
      color: '#ffffff',
    },
    body1: {
      fontFamily: 'Mooli, Arial, sans-serif',
      color: '#4a646e',
    },
    body2: {
      fontFamily: 'Mooli, Arial, sans-serif',
      color: '#b57b74',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#a0d9e8',
          '&:hover': {
            backgroundColor: '#f7b1ab',
          },
        },
      },
    },
  },
});

export default theme;