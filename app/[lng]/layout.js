import { dir } from "i18next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Cairo, Afacad } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navs/Navbar";
import { ThemeProvider } from "./ThemeProvider";
import { useTranslation } from "../i18n";
import TopHeader from "@/components/Navs/TopHeader";
import { languages } from "../i18n/settings";
import ErrorBoundary from "@/components/Errorboundary";

const afacad = Afacad({
  subsets: ["latin"],
  weights: ["400", "700"],
  variable: '--font-afacad',
});

const cairo = Cairo({
  subsets: ["arabic"],
  weights: ["400", "700"],
  variable: '--font-cairo',
});

export async function generateMetadata({ params }) {
  const { lng } = params;
  const { t } = await useTranslation(lng);
  return {
    title: t("meta_title"),
    description: t("meta_description"),
    keywords: t("meta_keywords"),
    authors: [{ name: "IBN Al-Nafis" }],
    openGraph: {
      title: t("meta_title"),
      description: t("meta_description"),
      images: [{ url: "/assets/images/logo1.jpg" }],
      locale: lng,
      type: 'website',
    },
    twitter: {
      card: "summary_large_image",
      title: t("meta_title"),
      description: t("meta_description"),
      images: ["/assets/images/logo1.jpg"],
    },
    icons: {
      icon: '/favicon.ico',
    },
  };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function RootLayout({ children, params }) {
  const { lng } = params;
  return (
    <html lang={lng} dir={dir(lng)} className={`${afacad.variable} ${cairo.variable}`}>
      <body className={`bg-gray-50 min-h-screen ${lng === "ar" ? 'font-cairo' : 'font-afacad'}`}>
        <ErrorBoundary>
          <ThemeProvider>
            <AntdRegistry>
              <TopHeader lng={lng} />
              <Navbar lng={lng} />
              <main>{children}</main>
              <Footer lng={lng} />
            </AntdRegistry>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}

