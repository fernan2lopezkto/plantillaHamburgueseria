import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D32F2F',  // Rojo intenso principal
    },
    secondary: {
      main: '#FBC02D',  // Amarillo mostaza
    },
    background: {
      default: '#F5F5F5',  // Fondo gris claro
      paper: '#FFFFFF',     // Fondo blanco para elementos como tarjetas
    },
    text: {
      primary: '#212121',  // Color de texto negro carbón
      secondary: '#757575',  // Color de texto gris oscuro
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',  // Tipografía por defecto

    h1: {
      fontFamily: 'Montserrat, Arial, sans-serif',  // Títulos grandes
      fontWeight: 700,
      color: '#D32F2F',  // Color rojo intenso
    },
    h2: {
      fontFamily: 'Montserrat, Arial, sans-serif',  // Subtítulos
      fontWeight: 700,
      color: '#D32F2F',
    },
    subtitle1: {
      fontFamily: 'Montserrat, Arial, sans-serif',  // Subtítulos menores
      fontWeight: 500,
      color: '#757575',
    },
    button: {
      fontFamily: 'Montserrat, Arial, sans-serif',  // Botones
      textTransform: 'none',
      color: '#FFFFFF',  // Texto blanco en botones
    },
    body1: {
      fontFamily: 'Roboto, Arial, sans-serif',  // Texto regular
      color: '#aaaaaa',
    },
    body2: {
      fontFamily: 'Roboto, Arial, sans-serif',  // Texto pequeño
      color: '#757575',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#D32F2F',  // Fondo rojo intenso para botones
          '&:hover': {
            backgroundColor: '#B71C1C',  // Fondo rojo más oscuro en hover
          },
        },
      },
    },
  },
});

export default theme;
