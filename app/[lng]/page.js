import '@/styles/globals.css'
import Image from "next/image";
import { useTranslation } from "../i18n";
import HeroSection from "@/components/Home/HeroSection";
import AboutSection from "@/components/Home/AboutSection";
import BakerySection from "@/components/Home/BakerySection";
import BestBakedSection from "@/components/Home/BestBakedSection";
import SandwichSection from "@/components/Home/SandwichSection";
import RestaurantSection from "@/components/Home/RestaurantSection";
import RecipesSection from "@/components/Home/RecipesSection";
import ContactSection from "@/components/Home/ContactSection";
import PastrySection from "@/components/Home/PastrySection";

export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng);

  return (
    <main className="min-h-screen">
      <HeroSection t={t} />
      <AboutSection t={t} />
      <BakerySection t={t} />
      <BestBakedSection lng={lng}/>
      <SandwichSection t={t} />
      <RestaurantSection t={t} />
      <RecipesSection t={t} />
      <ContactSection lng={lng}/>
      <PastrySection t={t} />
    </main>
  );
}

