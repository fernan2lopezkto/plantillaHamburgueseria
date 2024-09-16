import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d4b8f8',  // Lila pastel principal
    },
    secondary: {
      main: '#e0d6f7',  // Violeta más claro
    },
    background: {
      default: '#f8f7ff',  // Fondo blanco con un toque frío
      paper: '#ffffff',    // Fondo de elementos como tarjetas
    },
    text: {
      primary: '#4a3a5a',  // Color de texto oscuro para buena legibilidad
      secondary: '#7c768f',  // Color de texto secundario
    },
  },
  typography: {
    fontFamily: 'Mooli, Arial, sans-serif',  // Tipografía por defecto

    h1: {
      fontFamily: 'Grey Qo, Arial, sans-serif',  // Títulos grandes
      fontWeight: 700,
      color: '#4a3a5a',  // Color oscuro
    },
    h2: {
      fontFamily: 'Grey Qo, Arial, sans-serif',  // Subtítulos
      fontWeight: 700,
      color: '#4a3a5a',
    },
    subtitle1: {
      fontFamily: 'Grey Qo, Arial, sans-serif',  // Subtítulos menores
      fontWeight: 500,
      color: '#7c768f',
    },
    button: {
      fontFamily: 'Grey Qo, Arial, sans-serif',  // Botones
      textTransform: 'none',
      color: '#ffffff',  // Texto blanco en botones
    },
    body1: {
      fontFamily: 'Mooli, Arial, sans-serif',  // Texto regular
      color: '#4a3a5a',
    },
    body2: {
      fontFamily: 'Mooli, Arial, sans-serif',  // Texto pequeño
      color: '#7c768f',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#d4b8f8',
          '&:hover': {
            backgroundColor: '#e0d6f7',
          },
        },
      },
    },
  },
});

export default theme;