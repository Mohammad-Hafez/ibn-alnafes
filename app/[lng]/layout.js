import { dir } from "i18next";
import { languages } from "../i18n/settings";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Cairo, Afacad } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navs/Navbar";
import { ThemeProvider } from "./ThemeProvider";
import { useTranslation } from "../i18n";
import TopHeader from "@/components/Navs/TopHeader";

const afacad = Afacad({
  subsets: ["latin"],
  weights: ["400", "700"],
});

const cairo = Cairo({
  subsets: ["arabic"],
  weights: ["400", "700"],
});

export async function generateMetadata({ params }) {
  const { lng } = params;
  const { t } = await useTranslation(lng);
  return {
    title: t("meta_title"), 
    description: t("meta_description"),
    keywords: t("meta_keywords"),
    author: "IBN Al-Nafis",
    favicon: "../../public/favicon.ico",
    icon: "../../public/favicon.ico",
    openGraph: {
      title: t("meta_title"),
      description: t("meta_description"),
      images: [
        {
          url: t("../../public/assets/images/logo1.jpg"),
        },
      ],
      url: `https://example.com/${lng}`,
    },
    twitter: {
      card: "summary_large_image",
      title: t("meta_title"),
      description: t("meta_description"),
      images: [
        {
          url: t("../../public/assets/images/logo1.jpg"),
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <>
      <html lang={lng} dir={dir(lng)}>
        <head />
        <body
          className={`b-gray-50 min-h-screen 
            ${lng === "ar" ? cairo.className : afacad.className}`}
        >
          <ThemeProvider>
            <AntdRegistry>
              <TopHeader lng={lng}/>
              <Navbar lng={lng} />
              {children}
              <Footer lng={lng} />
            </AntdRegistry>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
