import React, { useContext } from "react";
import { LangContext } from "./context/langContext";

export default function Information() {
  const { lang } = useContext(LangContext);

  const containerStyle = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    direction: lang === "ar" ? "rtl" : "ltr",
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    margin: "20px",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "black",
    marginBottom: "10px",
  };

  const textStyle = {
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>
        {lang === "ar" ? "عن OpenWeather" : "About OpenWeather"}
      </h1>
      <p style={textStyle}>
        {lang === "ar"
          ? "استخدمت OpenWeather لإنشاء هذا الموقع. توفر OpenWeather العديد من خدمات بيانات الطقس مثل الطقس الحالي، التوقعات، وبيانات الطقس التاريخية. يقدمون APIs تسمح للمطورين بدمج معلومات الطقس الحية في المواقع والتطبيقات. يمكنك العثور على مزيد من المعلومات حولهم على موقعهم الرسمي: "
          : "I used OpenWeather to create this website. OpenWeather provides various weather data services such as current weather, forecasts, and historical weather data. They offer APIs that allow developers to integrate real-time weather information into websites and apps. You can find more information about them on their official website: "}
        <a
          href="https://openweathermap.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenWeather
        </a>
        .
      </p>
    </div>
  );
}
