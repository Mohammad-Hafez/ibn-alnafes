import Image from "next/image";
import hero_bg from '@/public/assets/images/hero.svg'
export default function HeroSection({ t }) {
  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full">
      <Image
        src={hero_bg}
        alt="IBN AL-NAFIS Bakery"
        fill
        className="object-cover brightness-75"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl text-white font-bold text-center">
          {t("hero.title")}
        </h1>
      </div>
    </section>
  );
}

