import React from "react";
import { useContext } from "react";
import { LangContext } from "./context/langContext";
import { ColorModeContext } from "./context/ThemeProvider";

export default function Contact() {
  const { lang } = useContext(LangContext);
  const { mode } = useContext(ColorModeContext);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    padding: "2rem",
    fontFamily: "'Arial', sans-serif",
    textAlign: lang === "ar" ? "right" : "left",
    direction: lang === "ar" ? "rtl" : "ltr",
  };

  const headerStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#1a73e8",
    marginBottom: "1.5rem",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    width: "100%",
    maxWidth: "500px",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: mode === "dark" ? "#333" : "#ffffff", // Dark mode background
  };

  const inputStyle = {
    padding: "0.8rem",
    fontSize: "1rem",
    backgroundColor: mode === "dark" ? "#22262F" : "#f4f4f4", // Light mode background
    color: mode === "dark" ? "white" : "#333", // Text color for dark mode
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    outline: "none",
    transition: "border-color 0.3s ease",
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: "150px",
    resize: "vertical",
  };

  const buttonStyle = {
    padding: "0.8rem",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#ffffff",
    backgroundColor: "#1a73e8",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#1557b0",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>{lang === "en" ? "Contact Us" : "تواصل معنا"}</h1>
      <form style={formStyle}>
        <input
          type="text"
          placeholder={lang === "en" ? "Your Name" : "اسمك"}
          style={inputStyle}
          required
        />
        <input
          type="email"
          placeholder={lang === "en" ? "Your Email" : "بريدك الإلكتروني"}
          style={inputStyle}
          required
        />
        <textarea
          placeholder={lang === "en" ? "Your Message" : "رسالتك"}
          style={textareaStyle}
          required
        />
        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = buttonStyle.backgroundColor)
          }
        >
          {lang === "en" ? "Send Message" : "إرسال الرسالة"}
        </button>
      </form>
    </div>
  );
}
