import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d1c4e9',  // Lavanda suave principal
    },
    secondary: {
      main: '#fce4ec',  // Crema suave
    },
    background: {
      default: '#f7f5fa',  // Fondo blanco con un toque lavanda
      paper: '#ffffff',    // Fondo de elementos como tarjetas
    },
    text: {
      primary: '#5f5d60',  // Gris oscuro para buena legibilidad
      secondary: '#9e9ba5',  // Lavanda grisácea para texto secundario
    },
  },
  typography: {
    fontFamily: 'Mooli, Arial, sans-serif',

    h1: {
      fontFamily: 'Grey Qo, Arial, sans-serif',
      fontWeight: 700,
      color: '#5f5d60',
    },
    h2: {
      fontFamily: 'Grey Qo, Arial, sans-serif',
      fontWeight: 700,
      color: '#5f5d60',
    },
    subtitle1: {
      fontFamily: 'Grey Qo, Arial, sans-serif',
      fontWeight: 500,
      color: '#9e9ba5',
    },
    button: {
      fontFamily: 'Grey Qo, Arial, sans-serif',
      textTransform: 'none',
      color: '#ffffff',
    },
    body1: {
      fontFamily: 'Mooli, Arial, sans-serif',
      color: '#5f5d60',
    },
    body2: {
      fontFamily: 'Mooli, Arial, sans-serif',
      color: '#9e9ba5',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#d1c4e9',
          '&:hover': {
            backgroundColor: '#fce4ec',
          },
        },
      },
    },
  },
});

export default theme;