import React from 'react'
import { languages } from "@/app/i18n/settings";
import Link from "next/link";

const LanguageSwitcher = ({ lng }) => {
  return <>
          {languages
            .filter((l) => lng !== l)
            .map((l, index) => {
              return (
                <span key={l}>
                  {index > 0 && " or "}
                  <Link href={`/${l}`}>{l=== "ar" ? "العربية" : "English"}</Link>
                </span>
              );
            })}{" "}
  </>
}

export default LanguageSwitcher