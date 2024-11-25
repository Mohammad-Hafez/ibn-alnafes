"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { languages } from "@/app/i18n/settings";
import Link from "next/link";
import { useClientTranslation } from '@/app/i18n/client';
import { changeLanguage } from '@/app/i18n/ChangeLang';

const LanguageSwitcher = ({ lng }) => {
  const router = useRouter();
  const { i18n } = useClientTranslation(lng);

  const handleLanguageChange = async (newLang) => {
    await changeLanguage(newLang);
    await i18n.changeLanguage(newLang);
    router.push(`/${newLang}`);
  };

  return (
    <>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && " or "}
              <Link 
                href={`/${l}`} 
                onClick={(e) => {
                  e.preventDefault();
                  handleLanguageChange(l);
                }}
              >
                {l === "ar" ? "العربية" : "English"}
              </Link>
            </span>
          );
        })}{" "}
    </>
  );
};

export default LanguageSwitcher;

