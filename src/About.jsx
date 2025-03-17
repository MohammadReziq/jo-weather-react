import React from "react";
import { useContext } from "react";
import { LangContext } from "./context/langContext";
import "./About.css";

export default function About() {
  const { lang } = useContext(LangContext);

  return (
    <div
      className="about-container"
      dir={lang === "ar" ? "rtl" : "ltr"}
      
    >
      <h1 className="about-title">{lang === "ar" ? "عني" : "About Me"}</h1>
      <p className="about-content">
        {lang === "ar"
          ? "مرحبًا! اسمي محمد رزق. أنا شغوف بتطوير واجهات المستخدم، وتخصصت في HTML وCSS وJavaScript وReact. أنا حاليًا أدرس علوم الكمبيوتر في جامعة الأردن، وأستمتع ببناء تطبيقات الويب عالية الجودة."
          : "Hello! My name is Mohammad Reziq. I'm passionate about front-end web development, and I specialize in HTML, CSS, JavaScript, and React. I am currently studying computer science at the University of Jordan, and I enjoy building high-quality web applications."}
      </p>

      <h3 className="contact-title">
        {lang === "ar" ? "اتصل بي" : "Contact Me"}
      </h3>
      <p className="about-content">
        {lang === "ar"
          ? "يمكنك الاتصال بي عبر لينكدإن أو التواصل معي مباشرة عبر واتساب:"
          : "You can connect with me on LinkedIn or reach out to me directly via WhatsApp:"}
      </p>

      <ul className="contact-list">
        <li>
          <a
            href="https://www.linkedin.com/in/mohammad-reziq-626395339/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link linkedin"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/962776910346"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link whatsapp"
          >
            WhatsApp
          </a>
        </li>
      </ul>
    </div>
  );
}
