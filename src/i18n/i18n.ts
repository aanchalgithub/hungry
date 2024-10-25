import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { English } from "./en";
import { Hindi } from "./hi";
import { Arabic } from "./ar";
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    // .use(Backend)
    .init({
        debug: true,
        fallbackLng: "en",
        resources: {
            en: {
                translation: {
                    ...English
                }
            },
            hi: {
                translation: {
                    ...Hindi
                }
            },
            ar:{
                translation:{
                    ...Arabic
                }
            }

        },

        returnObjects: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },

    });

export default i18n;