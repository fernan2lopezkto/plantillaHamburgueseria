import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f4b8c7',  // Rosado suave principal
    },
    secondary: {
      main: '#e58ebd',  // Rosado más claro
    },
    background: {
      default: '#fff5f7',  // Fondo blanco con un toque rosado
      paper: '#ffffff',    // Fondo de elementos como tarjetas
    },
    text: {
      primary: '#60384b',  // Color de texto oscuro para buena legibilidad
      secondary: '#8a6e76',  // Color de texto secundario
    },
  },
  typography: {
    fontFamily: 'Mooli, Arial, sans-serif',  // Tipografía por defecto

    h1: {
      fontFamily: 'Grey Qo, Arial, sans-serif',  // Títulos grandes
      fontWeight: 700,
      color: '#60384b',  // Color oscuro
    },
    h2: {
      fontFamily: 'Grey Qo, Arial, sans-serif',  // Subtítulos
      fontWeight: 700,
      color: '#60384b',
    },
    subtitle1: {
      fontFamily: 'Grey Qo, Arial, sans-serif',  // Subtítulos menores
      fontWeight: 500,
      color: '#8a6e76',
    },
    button: {
      fontFamily: 'Grey Qo, Arial, sans-serif',  // Botones
      textTransform: 'none',
      color: '#ffffff',  // Texto blanco en botones
    },
    body1: {
      fontFamily: 'Mooli, Arial, sans-serif',  // Texto regular
      color: '#60384b',
    },
    body2: {
      fontFamily: 'Mooli, Arial, sans-serif',  // Texto pequeño
      color: '#8a6e76',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#f4b8c7',
          '&:hover': {
            backgroundColor: '#e58ebd',
          },
        },
      },
    },
  },
});

export default theme;