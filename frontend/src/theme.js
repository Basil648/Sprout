import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E88E5",
    },
    secondary: {
      main: "#FF7043",
    },
    background: {
      default: "#f5f7fb",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
});

export default theme;
