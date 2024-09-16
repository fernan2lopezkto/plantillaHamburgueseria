import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f8b8d0',  // Rosado pastel principal
    },
    secondary: {
      main: '#f7d6e0',  // Rosado más claro
    },
    background: {
      default: '#fffaf8',  // Fondo blanco con un toque cálido
      paper: '#ffffff',    // Fondo de elementos como tarjetas
    },
    text: {
      primary: '#5a3a47',  // Color de texto oscuro para buena legibilidad
      secondary: '#9c7682',  // Color de texto secundario
    },
  },
  typography: {
    fontFamily: 'Mooli, Arial, sans-serif',  // Tipografía por defecto

    h1: {
      fontFamily: 'Grey Qo, Arial, sans-serif',  // Títulos grandes
      fontWeight: 700,
      color: '#5a3a47',  // Color oscuro
    },
    h2: {
      fontFamily: 'Grey Qo, Arial, sans-serif',  // Subtítulos
      fontWeight: 700,
      color: '#5a3a47',
    },
    subtitle1: {
      fontFamily: 'Grey Qo, Arial, sans-serif',  // Subtítulos menores
      fontWeight: 500,
      color: '#9c7682',
    },
    button: {
      fontFamily: 'Grey Qo, Arial, sans-serif',  // Botones
      textTransform: 'none',
      color: '#ffffff',  // Texto blanco en botones
    },
    body1: {
      fontFamily: 'Mooli, Arial, sans-serif',  // Texto regular
      color: '#5a3a47',
    },
    body2: {
      fontFamily: 'Mooli, Arial, sans-serif',  // Texto pequeño
      color: '#9c7682',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#f8b8d0',
          '&:hover': {
            backgroundColor: '#f7d6e0',
          },
        },
      },
    },
  },
});

export default theme;
