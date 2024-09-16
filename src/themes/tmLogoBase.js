import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#db6a7f',  // Rosado pastel principal
    },
    secondary: {
      main: '#f3b3c3',  // Rosado claro
    },
    background: {
      default: '#fff7f8',  // Fondo blanco con un toque rosado
      paper: '#ffffff',    // Fondo de elementos como tarjetas
    },
    text: {
      primary: '#4c3c41',  // Marrón oscuro para buena legibilidad
      secondary: '#798e74',  // Verde suave para texto secundario
    },
  },
  typography: {
    fontFamily: 'Pacifico, Arial, sans-serif',  // Tipografía similar a la usada en "Su Dulce"

    h1: {
      fontFamily: 'Pacifico, Arial, sans-serif',
      fontWeight: 700,
      color: '#db6a7f',  // Rosado pastel
    },
    h2: {
      fontFamily: 'Pacifico, Arial, sans-serif',
      fontWeight: 700,
      color: '#db6a7f',
    },
    subtitle1: {
      fontFamily: 'Poppins, Arial, sans-serif',  // Tipografía más simple para textos menores
      fontWeight: 500,
      color: '#4c3c41',
    },
    button: {
      fontFamily: 'Pacifico, Arial, sans-serif',
      textTransform: 'none',
      color: '#ffffff',
    },
    body1: {
      fontFamily: 'Poppins, Arial, sans-serif',
      color: '#4c3c41',
    },
    body2: {
      fontFamily: 'Poppins, Arial, sans-serif',
      color: '#798e74',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#db6a7f',
          '&:hover': {
            backgroundColor: '#f3b3c3',
          },
        },
      },
    },
  },
});

export default theme;