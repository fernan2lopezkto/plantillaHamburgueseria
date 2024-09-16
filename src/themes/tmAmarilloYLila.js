import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff4b3',  // Amarillo pastel principal
    },
    secondary: {
      main: '#cdb4db',  // Lila suave
    },
    background: {
      default: '#f9f5f7',  // Fondo blanco con un toque lila
      paper: '#ffffff',    // Fondo de elementos como tarjetas
    },
    text: {
      primary: '#665a53',  // Marrón suave para buena legibilidad
      secondary: '#8f7899',  // Lila oscuro para texto secundario
    },
  },
  typography: {
    fontFamily: 'Mooli, Arial, sans-serif',

    h1: {
      fontFamily: 'Grey Qo, Arial, sans-serif',
      fontWeight: 700,
      color: '#665a53',
    },
    h2: {
      fontFamily: 'Grey Qo, Arial, sans-serif',
      fontWeight: 700,
      color: '#665a53',
    },
    subtitle1: {
      fontFamily: 'Grey Qo, Arial, sans-serif',
      fontWeight: 500,
      color: '#8f7899',
    },
    button: {
      fontFamily: 'Grey Qo, Arial, sans-serif',
      textTransform: 'none',
      color: '#ffffff',
    },
    body1: {
      fontFamily: 'Mooli, Arial, sans-serif',
      color: '#665a53',
    },
    body2: {
      fontFamily: 'Mooli, Arial, sans-serif',
      color: '#8f7899',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff4b3',
          '&:hover': {
            backgroundColor: '#cdb4db',
          },
        },
      },
    },
  },
});

export default theme;