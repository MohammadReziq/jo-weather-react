import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { useState, createContext, useMemo } from "react";

// Create a context for theme mode
export const ColorModeContext = createContext({
  mode: "light",
  toggleColorMode: () => {},
});

const ThemeProviderWrapper = ({ children }) => {
  const [mode, setMode] = useState("light");

  // Function to toggle theme mode
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  // Define themes
  const theme = useMemo(() => {
    const lightTheme = {
      primary: { main: "#1565C0" },
      secondary: { main: "#FF9800" },
      background: { default: "#FFFFFF", paper: "#0048ca" },
      text: { primary: "#212121", secondary: "#4e79a0" },
    };

    const darkTheme = {
      primary: { main: "#90CAF9" },
      secondary: { main: "#FFB74D" },
      background: { default: "#23272F", paper: "#1E1E1E" },
      text: { primary: "#E0E0E0", secondary: "#BDBDBD" },
    };

    return createTheme({
      palette: {
        mode,
        ...(mode === "light" ? lightTheme : darkTheme),
      },
    });
  }, [mode]);

  return (
    <ColorModeContext.Provider value={{ mode, ...colorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeProviderWrapper;
