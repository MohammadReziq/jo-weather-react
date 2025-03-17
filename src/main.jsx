import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LangProvider from "./context/langContext.jsx";
import App from "./App.jsx";
import About from "./About.jsx";
import Information from "./Information.jsx";
import Contact from "./Contact.jsx";
import CloudCircleTwoToneIcon from "@mui/icons-material/CloudCircleTwoTone";
import { useContext } from "react";
import { LangContext } from "./context/langContext.jsx";
import "./index.css";
import ThemeProviderWrapper from "./context/ThemeProvider.jsx";
import BasicSpeedDial from "./MySpeedDial.jsx";
import { ColorModeContext } from "./context/ThemeProvider.jsx";
import { useTheme } from "@emotion/react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProviderWrapper>
      <LangProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/information" element={<Information />} />
          </Routes>
        </Router>
      </LangProvider>
    </ThemeProviderWrapper>
  </StrictMode>
);

function NavBar() {
  const { lang } = useContext(LangContext);
  const { mode, toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 1rem",
        alignItems: "center",
        flexWrap: "wrap", // Ensures items wrap on smaller screens
        gap: "1rem", // Space between logo and navigation
        backgroundColor: theme.palette.background,
        color: theme.palette.text,
      }}
    >
      {/* Logo Section */}
      <ul
        className="center-logo"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0",
          flex: "1", // Take up remaining space
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            padding: ".5rem 1rem",
            fontWeight: "bold",
            fontSize: "2rem",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <p
            className="logo"
            style={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            {lang === "ar" ? "موقع الطقس" : "Weather App"}
          </p>
          <CloudCircleTwoToneIcon
            color="primary"
            style={{ fontSize: "4rem" }}
          />
        </Link>
      </ul>

      {/* Navigation Links */}
      <ul
        className="try"
        style={{
          display: "flex",
          gap: "1rem",
          listStyle: "none",
          justifyContent: "center",
          alignItems: "center",
          flex: "1",
          padding: "0", // Ensure no extra padding
          margin: "0",
        }}
      >
        <li style={{ padding: ".5rem" }}>
          <Link
            className="about"
            to="/about"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            {lang === "ar" ? "عني" : "About"}
          </Link>
        </li>

        <li style={{ padding: ".5rem" }}>
          <Link
            to="/contact"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            {lang === "ar" ? "للتواصل" : "Contact"}
          </Link>
        </li>
        <li style={{ padding: ".5rem" }}>
          <Link
            to="/information"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            {lang === "ar" ? "معلومات" : "Information"}
          </Link>
        </li>
        <li
          onClick={toggleColorMode}
          style={{ cursor: "pointer", margin: "0 1rem" }}
        >
          {mode === "dark" ? (
            <DarkModeIcon color="warning" />
          ) : (
            <LightModeIcon color="dark" />
          )}
        </li>
      </ul>
    </div>
  );
}
