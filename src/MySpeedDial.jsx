import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { useContext } from "react";
import { ColorModeContext } from "./context/ThemeProvider";
import { LangContext } from "./context/langContext";

export default function BasicSpeedDial() {
  const { mode, toggleColorMode } = useContext(ColorModeContext);
  const { lang } = useContext(LangContext);

  const actions = [
    {
      icon:
        mode === "dark" ? (
          <LightModeIcon color="dark" />
        ) : (
          <DarkModeIcon color="warning" />
        ),
      name:
        mode === "dark"
          ? lang === "ar"
            ? "تغيير الثيم"
            : "Light Mode"
          : lang === "en"
          ? "Dark Mode"
          : "تغيير الثيم",
      onClick: toggleColorMode, // Toggle color mode on click
    },
  ];

  return (
    <Box
      className="speed-dial"
      sx={{
        position: "absolute",
        bottom: {
          xs: 10, // For mobile screens (0-600px)
          sm: 20, // For small screens (600px-900px)
          md: 30, // For medium screens (900px-1200px)
          lg: 40, // For larger screens (1200px-1600px)
          xl: 50, // For extra large screens (1600px and above)
        },
        right: {
          xs: 10,
          sm: 20,
          md: 30,
          lg: 40,
          xl: 50,
        },
        "@media (max-width: 600px)": {
          bottom: 5,
          right: 5, // For mobile screens, closer to the corner
        },
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        icon={<SpeedDialIcon />}
        direction="left"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.onClick} // Execute onClick to toggle mode
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
