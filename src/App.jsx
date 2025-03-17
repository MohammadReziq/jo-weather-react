import "./App.css";
import * as React from "react";
import { createTheme, SpeedDialAction, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import axios from "axios";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { useContext } from "react";
import { LangContext } from "./context/langContext";
import MySpeedDial from "./MySpeedDial";
import BasicSpeedDial from "./MySpeedDial";
import { ColorModeContext } from "./context/ThemeProvider";
const datacityes = {
  cities: [
    {
      city: "عمان",
      translation: "Amman",
      lat: 31.9686,
      lon: 35.9453,
    },
    {
      city: "إربد",
      translation: "Irbid",
      lat: 32.5556,
      lon: 35.85,
    },
    {
      city: "الزرقاء",
      translation: "Zarqa",
      lat: 32.0665,
      lon: 36.0999,
    },
    {
      city: "العقبة",
      translation: "Aqaba",
      lat: 29.5335,
      lon: 35.0007,
    },
    {
      city: "المفرق",
      translation: "Mafraq",
      lat: 32.34,
      lon: 36.201,
    },
    {
      city: "الكرك",
      translation: "Karak",
      lat: 31.1824,
      lon: 35.7115,
    },
    {
      city: "مادبا",
      translation: "Madaba",
      lat: 31.7158,
      lon: 35.7995,
    },
    {
      city: "جرش",
      translation: "Jerash",
      lat: 32.066,
      lon: 35.8915,
    },
    {
      city: "السلط",
      translation: "Salt",
      lat: 32.0336,
      lon: 35.7117,
    },
    {
      city: "الطفيلة",
      translation: "Tafilah",
      lat: 30.834,
      lon: 35.7442,
    },
    {
      city: "عجلون",
      translation: "Ajloun",
      lat: 32.3333,
      lon: 35.742,
    },
    {
      city: "معان",
      translation: "Ma'an",
      lat: 30.1945,
      lon: 35.7315,
    },
  ],
};
i18next.init({
  lng: "ar",
  resources: {
    en: { translation: { language: "Englsih" } },
    ar: { translation: { language: "عربي" } },
  },
});
const theme = createTheme({
  typography: {},
});

function App() {
  const { mode } = useContext(ColorModeContext);
  const { lang, setLang } = useContext(LangContext);
  const [newCity, setNewCity] = useState({
    city: "عمان",
    translation: "Amman",
    lat: 31.9686,
    lon: 35.9453,
  });

  const [data, setData] = useState(null);
  let formateDate = new Date().toLocaleDateString(
    lang == "ar" ? "ar-EG" : "en-US",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );
  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          newCity.lat
        }&lon=${newCity.lon}&lang=${
          lang == "ar" ? "ar" : "en"
        }&appid=1d2df495db311ce5f4e2b2866f4c2527`,
        { cancelToken: source.token }
      )
      .then((response) => setData(response))
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
        } else {
          console.error("Error fetching data", error);
        }
      });

    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, [newCity, lang]);

  return (
    <I18nextProvider i18={i18next}>
      <ThemeProvider theme={theme}>
        <div
          dir={lang == "ar" ? "rtl" : "ltr"}
          style={{
            minHeight: "100vh",
            backgroundColor: mode == "light" ? "#0048CA" : "#252932",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div>
            <div
              style={{
                width: "auto",
                backgroundColor: "#0A3F9D",
                borderRadius: "1rem",
                padding: ".5rem",
                color: "white",
                margin: "4rem 1rem 0",
                boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  padding: ".5rem",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h1>{lang == "ar" ? newCity.city : newCity.translation}</h1>
                <p
                  style={{
                    fontWeight: "400",
                    fontSize: "1rem",
                    margin: " 0 1rem",
                  }}
                >
                  {formateDate}
                </p>
              </div>
              <hr
                style={{
                  padding: ".05rem",
                  backgroundColor: "white",
                  border: "none",
                  borderRadius: ".5rem",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: ".5rem",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      margin: ".5rem",
                    }}
                  >
                    <p style={{ fontSize: "3rem", margin: "0 .5rem" }}>
                      {data != null ? (
                        Number((data.data.main.temp - 272).toFixed(2))
                      ) : (
                        <CircularProgress
                          style={{ width: "20px", height: "20px" }}
                          color="secondary"
                        />
                      )}
                    </p>
                    {data ? (
                      <img
                        src={`https://openweathermap.org/img/wn/${data.data.weather[0].icon}@2x.png`}
                        width={"80px"}
                        height={"80px"}
                      />
                    ) : (
                      <CircularProgress
                        style={{ width: "60px", height: "60px" }}
                        color="secondary"
                      />
                    )}
                  </div>
                  <p style={{ fontSize: "1rem", margin: "1rem 0" }}>
                    {data != null ? (
                      data.data.weather[0].description
                    ) : (
                      <CircularProgress
                        style={{ width: "20px", height: "20px" }}
                        color="secondary"
                      />
                    )}
                  </p>
                  <p style={{ fontSize: ".8rem" }}>
                    {lang == "ar" ? "الصغرى" : "max"}:
                    <span>
                      {" "}
                      {data != null ? (
                        Number((data.data.main.temp_min - 272.15).toFixed(2)) ||
                        "null"
                      ) : (
                        <CircularProgress
                          style={{ width: "15px", height: "15px" }}
                          color="secondary"
                        />
                      )}
                    </span>{" "}
                    | {lang == "ar" ? "الكبرى" : "min"}:
                    <span>
                      {"  "}
                      {data != null ? (
                        Number((data.data.main.temp_max - 272.15).toFixed(2)) ||
                        "null"
                      ) : (
                        <CircularProgress
                          style={{ width: "20px", height: "20px" }}
                          color="secondary"
                        />
                      )}
                    </span>{" "}
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <CloudCircleIcon
                    style={{
                      width: "130",
                      height: "130",
                      color: mode == "dark" ? "#4e79a0" : "white",
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                color: "white",
                padding: ".5rem",
                display: "flex",
                justifyContent: "space-between",
                margin: "0 2rem",
              }}
            >
              <button
                onClick={() => {
                  setLang((prev) => (prev === "ar" ? "en" : "ar"));
                }}
                style={{
                  width: "120px",
                  padding: ".5rem 1rem",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: ".5rem",
                  border: "none",
                  backgroundColor: mode === "dark" ? "#444" : "#007BFF", // Dynamic background color based on theme
                  color: mode === "dark" ? "#fff" : "#fff", // Text color for contrast
                  cursor: "pointer",
                  outline: "none",
                  transition: "all 0.3s ease", // Smooth transition for hover and focus
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#ff5722")
                } // Orange background on hover
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor =
                    mode === "dark" ? "#444" : "#007BFF")
                } // Return to original color
              >
                {lang === "ar" ? "عربي" : "English"}
              </button>

              <select
                onChange={(e) => {
                  setNewCity(JSON.parse(e.target.value));
                }}
                style={{
                  width: "100%",
                  border:
                    mode === "dark" ? "2px solid #4CAF50" : "2px solid #007BFF", // Green for dark mode, blue for light mode
                  borderRadius: "8px", // More rounded corners
                  fontSize: "1.2rem", // Slightly smaller font for balance
                  fontWeight: "600", // Slightly lighter weight
                  textAlign: "center",
                  outline: "none",
                  padding: ".8rem 1rem", // More padding for a spacious feel
                  margin: "0 1rem",
                  backgroundColor: mode === "dark" ? "#333" : "#fff", // Dark background in dark mode, light in light mode
                  color: mode === "dark" ? "#fff" : "#333", // Text color adjusted for contrast
                  cursor: "pointer",
                  transition: "all 0.3s ease", // Smooth transition for interactive effects
                }}
                onFocus={(e) => (e.target.style.border = "2px solid #ff5722")} // Orange border on focus
                onBlur={(e) =>
                  (e.target.style.border =
                    mode === "dark" ? "2px solid #4CAF50" : "2px solid #007BFF")
                } // Return to original border color
              >
                {datacityes.cities.map((city) => (
                  <option value={JSON.stringify(city)} key={city.id}>
                    {lang === "ar" ? city.city : city.translation}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
