import { createContext, useContext } from "react";
export type Language = "es" | "en";
export type LanguageValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (text: string) => string;
};
export const LanguageContext = createContext<LanguageValue>({
  language: "en",
  setLanguage: () => {},
  t: (text) => text,
});
export function useLanguage() {
  return useContext(LanguageContext);
}
