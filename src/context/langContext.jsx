import { createContext, useState } from "react";

// Fixing the typo and following the naming convention
export const LangContext = createContext(null);

export default function LangProvider({ children }) {
  const [lang, setLang] = useState("ar");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}
