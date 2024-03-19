import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#689493",
      light: "#91a8a8",
      dark: "#556363",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: {
      fontFamily: '"Ubuntu", sans-serif',
      fontSize: "1rem",
    },
    myFont: {
      fontFamily: '"Ubuntu", sans-serif',
      fontSize: "100rem",
    },
  },
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "red",
          margin: "0",
        },
      },
    },
  },
});
